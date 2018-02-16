import Cryptonight from './crpytonight'
import Stratum from './stratum'
var EventEmitter = require('events')

function Miner (algo, url, key) {
  this.hash_func = null
  this.running = false
  this.stopping = false
  this.hash_count = 0
  this.round_hash_count = 0
  this.hashes_per_round = 10000
  this.start_time = +new Date()
  this.job = null
  this.start_nonce = 0
  this.solves = 0
  this.algo = algo
  this.key = key
  this.stratum = new Stratum()
  this.keepalive_interval = null

  this.stratum.on('connect', this.onConnect.bind(this))

  this.stratum.connect(url)

  this.stratum.on('job', function (job) {
    this.start_nonce = 0
    this.job = job
  }.bind(this))

  switch (algo) {
    case 'cryptonight':
      var cn = new Cryptonight()
      cn.init()
      this.hash_func = cn.hash.bind(cn)
      break
    default:
      console.log('Unknown algorithm ' + algo)
      break
  }
}

Miner.prototype = EventEmitter.prototype

Miner.prototype.onConnect = function () {
  this.stratum.login(this.key, 'x', function (id, job) {
    this.id = id
    this.job = job
    this.keepalive_interval = setInterval(this.stratum.keepAlive.bind(this.stratum, this.id), 15000)
  }.bind(this))
}

Miner.prototype.newJob = function (data) {
  this.job = data.job
  this.start_nonce = data.start_nonce
  this.getJob(false)
}

Miner.prototype.processResult = function (result) {
  if (result.result) {
    this.stratum.submitShare(this.id, this.job.job_id, result.nonce, result.hash)
    this.solves++
  }

  this.hash_count += 500
  this.round_hash_count += 500
  this.start_nonce += 500

  if (this.round_hash_count >= this.hashes_per_round) {
    this.job = null
    this.round_hash_count = 0
    this.getJob(true)
  }

  if (!this.stopping) {
    setTimeout(this.work.bind(this), this.job == null ? 500 : 0)
  } else {
    this.running = false
    this.hash_count = 0
  }
}

Miner.prototype.work = function () {
  if (this.job != null) {
    this.hash_func(this.job.blob, this.job.target, this.start_nonce, this.processResult.bind(this))
  } else {
    setTimeout(this.work.bind(this), 1000)
  }
}

Miner.prototype.hashRate = function () {
  if (!this.running || this.hash_count === 0) {
    return 0
  }
  var now = +new Date()
  var diff = now - this.start_time
  return this.hash_count / diff * 1000
}

Miner.prototype.start = function () {
  this.start_time = +new Date()
  this.running = true
  this.stopping = false
  this.hash_count = 0
  this.solves = 0

  console.log('Starting Web Miner')
  this.work()
}

Miner.prototype.stop = function () {
  this.stopping = true
  clearInterval(this.keepalive_interval)
}

export default Miner
