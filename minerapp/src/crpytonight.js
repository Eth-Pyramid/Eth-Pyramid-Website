function Cryptonight () {
  this.callback = null
}

Cryptonight.prototype.process = function () {
  var res = window.Module.ccall('process_result', 'number', [], [])

  if (res === 2) {
    console.log('Got share')
    var nonce = window.Module.ccall('get_result_nonce', 'string', [], [])
    var hash = window.Module.ccall('get_result_hash', 'string', [], [])

    this.callback({
      'result': true,
      'nonce': nonce,
      'hash': hash
    })
  } else if (res === 1) {
    setTimeout(this.process.bind(this), 10)
  } else {
    this.callback({
      'result': false
    })
  }
}

Cryptonight.prototype.hash = function (blob, target, start, callback) {
  window.Module.ccall('work', 'number', ['string', 'string', 'number'], [
    blob,
    target,
    start
  ])

  this.callback = callback
  setTimeout(this.process.bind(this), 1000)
}

Cryptonight.prototype.init = function () {

  window.Module.ccall('init', 'number', ['number'], [5])
}

export default Cryptonight
