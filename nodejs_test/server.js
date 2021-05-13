var express = require('express')
var http = require('http')
var path = require('path')
var static = require('serve-static');

//웹서버생성
var app = express();
app.use('/public',static(path.join(__dirname,'public')));

http.createServer(app).listen(3001,function(){
    console.log('express webserver start ! :: 3001');
})