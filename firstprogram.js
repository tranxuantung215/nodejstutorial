var http = require('http');
var express = require('express');
var addition = require('./Addition.js');

// var app = express();
// app.set('view engine', 'jade');
// app.get('/',function(req,res)
// {
// });
// var server=app.listen(9090,function()
// {
// });

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(addition.AddNumber(1,2));
}).listen(9090);