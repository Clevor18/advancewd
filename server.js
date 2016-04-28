//simple node server
var express = require('express');
var path = require('path');

//initialize server

var app = express();
/**
  *@var req the input url being requested
  *@var res the result i send back
  */

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});
  app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname + '/ourhistory.html'));
  });

var port = 8000;
app.listen(port);
console.log("server started on port:" + 8000);
