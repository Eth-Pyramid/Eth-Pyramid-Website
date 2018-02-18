var express = require('express');
var netApi = require('net-browserify');

// Create our app
var app = express();

app.use(netApi({
  'allowOrigin': 'http://localhost'
}));

// Start the server
var server = app.listen(8070, function() {
  console.log('Server listening on port ' + server.address().port);
});