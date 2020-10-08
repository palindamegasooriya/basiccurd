var express = require('express');
var app = express();
var db = require('./config/db');
var UserController=require('./controllers/userController');


app.use('/users', UserController);

app.listen(3001,function(){
    console.log("listning to port 3001");
    });


module.exports = app;