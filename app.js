    var express = require('express');
    var app = express();
    var router = express.Router();
    // var http = require('http');
    // var mongoose = require('mongoose');
    var bodyParser = require('body-parser');
    var PORT = process.env.PORT || 8080;
        app.use(bodyParser());
        app.use('/',express.static(__dirname+'/routes/'));
        router.get('/featured', function(req, res){
        res.render('/featured');
        });
        //app.use('/featured',express.static(__dirname+'/routes'))
        app.listen(PORT,function(){
    console.log('Server listening on Port: '+PORT+"!");
 });
