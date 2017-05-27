var express = require('express');
var ParseServer = require('parse-server').ParseServer;

// Configure the Parse API
var api = new ParseServer({
  databaseURI: 'mongodb://localhost:27017/dev',
  cloud: __dirname + '/cloud/main.js',
  appId: 'fyelciParse',
  masterKey: 'yh874hdkcj749dk*098=3dvs',
  serverURL: 'http://localhost:1337/api'
});

var app = express();

// Serve the Parse API on the /parse URL prefix
app.use('/api', api);

// Listen for connections on port 1337
var port = 1337;
app.listen(port, function() {
    console.log('parse-server-example running on port ' + port + '.');
});

