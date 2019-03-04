const express = require('express');
const cors = require('cors');
const PORT = 8888;
const app = express();
const mysql = require('mysql');
const fs = require('fs'); //file system
const rl = require('readline'); //read line


app.use(cors());
app.use(express.json());

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'aaronFit'
});



app.post('/contact', function(req,res) {
    console.log(req.body);
    connection.connect();  
    const data = req.body;
   connection.query('INSERT INTO register SET ?',data,function(err,res){
       if (err) {
           console.log(err.sql);
       }  

       res.end('ok');
   });

   
    
})


app.listen(PORT, function () {
    console.log('server started as port' + PORT);

});