var express = require('express');
// var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();
//
// app.use(express.static('public'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.get('/aassdd',function(req,res){
    fs.readFile(__dirname + '/public/data.json',function(err,data){
        if(err){
          console.log(err)
        }else {
          res.json(JSON.parse(data))
        }
    })
});

app.listen(3001,function(){
  console.log('------服务器启动------');
  console.log('--访问地址：http://localhost:3001/')
});
