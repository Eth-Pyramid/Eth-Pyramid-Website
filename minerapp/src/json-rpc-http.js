import ajax from '/lib/ajax.min.js'
import JSON from '/lib/json3.min'

var JsonRpc = function (url) {
  this.url = url
  this.id = 1
}
JsonRpc.prototype.call = function (method, params, success) {
  var request = ajax({
    method: 'post',
    url: this.url,
    data: JSON.stringify({
      jsonrpc: '2.0',
      id: this.id++,
      method: method,
      params: params
    })
  })
  request.then(function (response) {
    success(response.result)
  })
}

export default JsonRpc
