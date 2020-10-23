// 代码块 node-http-server
const http = require('http');
const url = require('url');
// req   获取客户端传过来的信息
// res   给游览器响应信息

http.createServer((req,res)=>{

    // 设置响应头
    // 状态码200  文件类型 html 字符集utf-8
    res.writeHead(200,{"Content-type":"text/html;charset='utf-8'"});//解决乱码

    res.write("<head><meta charset='UTF-8'></head>");//解决乱码 

    console.log(req.url); //获取游览器访问地址

    if(req.url!='/favicon.ico'){
        var userinfo = url.parse(req.url,true).query;
        console.log(`姓名:${userinfo.name}--年龄:${userinfo.age}`);
    }

    res.end();//结束响应
}).listen(3000);