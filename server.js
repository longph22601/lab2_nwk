var http = require('http');
var url = require('url');
var tinh = require('./Tinh');

var express = require('express');
var app = express();
var server = require("http").createServer(app);
server.listen(8080);
// app.get('/calAdd', function(req,res){
//     var rs = 0;
//     var a = parseInt(req.query.a);
//     var b = parseInt(req.query.b);
//     rs = tinh.add(a,b);
//     res.json(rs);
// });
// app.get('/calSub', function(req,res){
//     var rs = 0;
//     var a = parseInt(req.query.a);
//     var b = parseInt(req.query.b);
//     rs = tinh.sub(a,b);
//     res.json(rs);
// });
// app.get('/calMul', function(req,res){
//     var rs = 0;
//     var a = parseInt(req.query.a);
//     var b = parseInt(req.query.b);
//     rs = tinh.mul(a,b);
//     res.json(rs);
// });
// app.get('/calDiv', function(req,res){
//     var rs = 0;
//     var a = parseInt(req.query.a);
//     var b = parseInt(req.query.b);
//     rs = tinh.div(a,b);
//     res.json(rs);
// });
// app.listen(8080);


const bodyParser  =require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});
app.get('/Tinh', function(req,res){
    var a = req.query.a;
    var b = req.query.b;
    var result = parseInt(a)+parseInt(b);
    res.send('kết quả:'+result);
});
app.post('/login',function(req,res){
    var a =req.body.a;
    var b = req.body.b;
    var result = parseInt(a)+parseInt(b);
    var result1 = parseInt(a)-parseInt(b);
    var result2 = parseInt(a)*parseInt(b);
    var result3 = parseInt(a)/parseInt(b);
    res.send('kết quả: a+b= '+result+';'+'a-b='+result1+';'+'axb='+result2+';'+'a/b='+result3);
    

})


