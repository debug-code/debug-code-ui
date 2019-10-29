
var express = require('express');
var fs = require('fs');
//加载ejs模块
const ejs = require('ejs');

//加载path模块，path模块中包含许多处理文件路径的工具
const path = require('path');

var app = express();


var cookieParser = require('cookie-parser');
// respond with "hello world" when a GET request is made to the homepage

app.set('view engine', 'ejs');
//注册模板文件的后缀名为html，默认为ejs
app.engine('html', ejs.__express);
//设置模板文件存放的目录，默认是与app.js同级下views文件夹
//path.join()用于路径拼接，可以根据当前的操作系统的类型正确选用文件路径拼接字符，linux是/,window是\
app.set('views', path.join(__dirname, '/views'));



app.use('/static', express.static('static'));

app.get('/view/index', function(req, res) {
  var pathname = 'views/index.html';
  fs.readFile(pathname,function(err, data) {
    if(err) {
      console.log(err);
      //HTTP 状态码 404 ： NOT FOUND
      //Content Type:text/plain
      res.writeHead(404, {'Content-Type': 'text/html'});
    }
    else {
      //HTTP 状态码 200 ： OK
      res.writeHead(200, {'Content-Type': 'text/html'});
      // response.writeHead(200);
      res.write(data.toString())
    }
    //发送响应数据
    res.send();
  });
  
});

app.get('/view/blog/:uid', function(req, res) {
  var pathname = 'blog.html';
  res.render(pathname, {uuid:req.params.uid});
});

app.get('/view/login', function(req, res) {
  var pathname = 'views/login.html';
  fs.readFile(pathname,function(err, data) {
    
    console.log("/view/login");
    
    if(err) {
      console.log(err);
      //HTTP 状态码 404 ： NOT FOUND
      //Content Type:text/plain
      res.writeHead(404, {'Content-Type': 'text/html'});
    }
    else {
      //HTTP 状态码 200 ： OK
      res.writeHead(200, {'Content-Type': 'text/html'});
      // response.writeHead(200);
      res.write(data.toString())
    }
    //发送响应数据
    res.send();
  });
  
});

app.get('/view/manage', function(req, res) {
  var pathname = 'views/manage.html';
  fs.readFile(pathname,function(err, data) {
    if(err) {
      console.log(err);
      //HTTP 状态码 404 ： NOT FOUND
      //Content Type:text/plain
      res.writeHead(404, {'Content-Type': 'text/html'});
    }
    else {
      //HTTP 状态码 200 ： OK
      res.writeHead(200, {'Content-Type': 'text/html'});
      // response.writeHead(200);
      res.write(data.toString())
    }
    //发送响应数据
    res.send();
  });
  
});

//--------
app.get('/data/userList', function(req, res) {
  var pathname = 'views/alist.html';
  fs.readFile(pathname,function(err, data) {
    if(err) {
      console.log(err);
      //HTTP 状态码 404 ： NOT FOUND
      //Content Type:text/plain
      res.writeHead(404, {'Content-Type': 'text/html'});
    }
    else {
      //HTTP 状态码 200 ： OK
      res.writeHead(200, {'Content-Type': 'text/html'});
      // response.writeHead(200);
      res.write(data.toString())
    }
    //发送响应数据
    res.send();
  });
  
});
app.get('/view/userList', function(req, res) {
  var pathname = 'views/userList.html';
  fs.readFile(pathname,function(err, data) {
    if(err) {
      console.log(err);
      //HTTP 状态码 404 ： NOT FOUND
      //Content Type:text/plain
      res.writeHead(404, {'Content-Type': 'text/html'});
    }
    else {
      //HTTP 状态码 200 ： OK
      res.writeHead(200, {'Content-Type': 'text/html'});
      // response.writeHead(200);
      res.write(data.toString())
    }
    //发送响应数据
    res.send();
  });
  
});
//----------

app.get('/view/alist', function(req, res) {
  // var pathname = 'views/alist.html';
  res.writeHead(200, {'Content-Type': 'json'});
  // response.writeHead(200);
  
  let result = [{
    userName:"ss",
    realName:"sss"
    },
    {
      userName:"sas",
      realName:"sssa"
    }]
    let r = {
      code: 0,
      msg: "",
      count: 2,
      data: result
    } 
  res.write(JSON.stringify(r))

  res.send();
  
});


app.get('/view/editor/:uid', function (req, res, next) {
  // if the user ID is 0, skip to the next route
  if (req.params.uid != "") {
    var pathname = 'editor.html'; 
    res.render( pathname, {uuid:req.params.uid} );
  }else {
    next("router")
  }; 
});
app.get('/view/editor', function(req, res) {

  var pathname = 'editor.html'; 
  res.render( pathname, {uuid:req.params.uid} );
  
});

app.listen(8070, function () {
  console.log('Example app listening on port 8070!');
});