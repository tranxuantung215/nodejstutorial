var http = require('http');
var express = require('express');
var addition = require('./Addition.js');
var request = require('request');
var emplStr = "";

var app = express();
app.set('view engine', 'jade');

app.route('/Node').get(function(req,res)
{
    res.send("Tutorial on Node");
});
app.route('/Angular').get(function(req,res)
{
    res.send("Tutorial on Angular");
});
app.get('/',function(req,res)
{
    // res.send('Suprise Madafaka');
    res.render('index',
        {title:'Oscar', message:'Ola!'})
});
app.route('/EmployeeList').get(function(req,res)
{
    var MongoClient = require('mongodb').MongoClient;
    var url = 'mongodb://localhost:27017';
    MongoClient.connect(url, function(err, client){
        console.log('Connected');
        var db = client.db('EmployeeDB');

        var cursor = db.collection('Employee').find();
        cursor.each(function(err, obj){
            if(obj){        
                console.log(obj.employeename);
                emplStr = emplStr + "Employee: " + obj.employeename + "</br>";
            }
        });
        res.send(emplStr);   
        client.close();
    });
});

var server=app.listen(9090,function()
{
});

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end(addition.AddNumber(1,2));
// }).listen(9090);

// var request = require("request");
// 	request("http://www.google.com",function(error,response,body)
// 	{
// 		console.log(response);
// 	});

