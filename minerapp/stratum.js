var net = require('net-browserify')
var EventEmitter = require('events').EventEmitter

net.setProxy({
  hostname: 'webclient.esker.tech',
  port: 8070
})

function Stratum () {
  this.socket = null
  this.pending = {}
}

Stratum.prototype = EventEmitter.prototype

Stratum.prototype.connect = function (url) {
  this.messageId = 1

  this.socket = new net.Socket()
  this.socket.on('data', this.onData.bind(this))
  this.socket.on('close', this.onClose.bind(this))
  this.socket.on('connect', this.handleConnect.bind(this))
  var parts = url.split(':')
  this.socket.connect(parts[1], parts[0])
}

Stratum.prototype.handleConnect = function () {
  this.emit('connect')
}

Stratum.prototype.onData = function (buffer) {
  console.log('<< ' + buffer)

  var raw = JSON.parse(buffer)

  if (raw.error == null) {
    if (raw.id in this.pending) {
      this.pending[raw.id].call(this, raw.result)
    } else {
      switch (raw.method) {
        case 'job':
          this.emit('job', raw.params)
          break
      }
    }

    this.emit('data', raw)
  }
}

Stratum.prototype.onClose = function () {
  console.log('Socket closed')
  this.emit('close')
}

Stratum.prototype.keepAlive = function (id) {
  console.log('Keep alive')
  this.call('keepalived', {'id': id})
}

Stratum.prototype.login = function (login, pass, callback) {
  this.call('login', {
    'login': login,
    'pass': pass,
    'agent': 'esker-webminer/1.0.0'
  }, function (data) {
    if (data.status === 'OK') {
      callback(data.id, data.job)
      this.emit('login.success')
    } else {
      this.emit('login.fail')
    }
  }.bind(this))
}

Stratum.prototype.submitShare = function (id, jobId, nonce, result, callback) {
  console.log('submitting share')
  this.call('submit', {
    'id': id,
    'job_id': jobId,
    'nonce': nonce,
    'result': result
  }, callback)
}

Stratum.prototype.call = function (method, params, callback) {
  var raw = {
    'id': this.messageId++,
    'jsonrpc': '2.0',
    'method': method,
    'params': params
  }

  if (callback != null) {
    this.pending[raw.id] = function (data) {
      callback.call(this, data)
      delete this.pending[raw.id]
    }.bind(this)
  }

  var string = JSON.stringify(raw) + '\n'

  console.log('>> ' + string)

  this.socket.write(string)
}

export default Stratum
