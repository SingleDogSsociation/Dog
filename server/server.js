/**
 * Created by 刘畅 on 2017/3/18.
 */
var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//跨域
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.get('/qqqq',function(req,res){
    fs.readFile(__dirname + '/public/lists.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            var length = JSON.parse(data).result.length;
            res.json({"length":length});
        }
    })
});
app.post('/getlist',function(req,res){
    fs.readFile(__dirname + '/public/lists.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            var start = parseInt(req.body.page_index);
            var start = start*req.body.page_size;
            var end = start + parseInt(req.body.page_size);
            var data = data.toString();
            var json = JSON.parse(data);
            var result = json.result;
            console.log(start + ','+end);
            var res_arr = result.slice(start,end);
            var res_data = {
                "result":res_arr
            };
            res.json(res_data);
        }
    })
});



app.get('/aassdd',function(req,res){
    fs.readFile(__dirname + '/public/data.json',function(err,data){
        if(err){
            // console.log(err)
        }else{
            console.log(data);
            res.jsonp(data.toString())
        }
    })
});

app.listen(3000,function(){
    console.log('..........22');
});