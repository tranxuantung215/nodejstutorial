var MongoClient = require('mongodb').MongoClient;
// var url = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false';
var url = 'mongodb://localhost:27017';
MongoClient.connect(url, function(err, client){
    console.log('Connected');
    var db = client.db('EmployeeDB');

    var cursor = db.collection('Employee').find();
    cursor.each(function(err, obj){
        if(obj){            
            console.log(obj);
        }
    });

    // db.collection('Employee').insertOne({
    //     "employeeid" : 4,
    //     "employeename" : "Jasmine"

    // });

    console.log('Closing connection');
    client.close();
});