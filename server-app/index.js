const express = require('express');
const cors = require('cors');
const PORT = 8888;
const app = express();
const mysql = require('mysql');
const fs = require('fs'); //file system
const http = require('http').Server(app);
const io = require('socket.io')(http);
const rl = require('readline'); //read line


app.use(cors());
app.use(express.json());

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'aaronFit'
});



app.post('/contact', function (req, postRes) {
    console.log(req.body);
    connection.connect(function (err, d) {
        const data = req.body;
        connection.query('INSERT INTO register SET ?', data, function (err, res) {
            if (err) {
                console.log(err.sql);
            }
            postRes.json('ok');
        });



    });



});

app.post('/recipes', function (req, postRes) {
    connection.connect(function (err, res) {
        let data = {
            name: req.body.name,
            instructions: req.body.instructions
        }
        connection.query('INSERT INTO recipes SET ?', data, function (err, res) {
            if (err) {
                console.log(err.sql);
            }

            postRes.json('ok');
        });
    });
});

app.get('/recipes', function (req, postRes) {
    connection.connect(function (err, res) {

        connection.query('SELECT * FROM `recipes`', function (err, res) {
            if (err) {
                console.log(err.sql);
            }

            postRes.send(res);
        });
    });
});

io.on('conection', function(socket){
    socket.on('message',function(msg){
        numArray.push(+msg);
        socket.emit('message', numArray);
        
    });

    socket.on('disconnect',function(){
        console.log('user disconnected');
        
    })
})

http.listen(PORT, function () {
    console.log('server started as port' + PORT);

});