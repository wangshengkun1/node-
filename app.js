//引入HTTP模块
var http = require('http');
// request   获取url传过来的信息
// response   给游览器响应信息
http.createServer(function (request, response) {

    // 设置响应头
  response.writeHead(200, {'Content-Type': 'text/plain'});
    //表示输入一句话并且结束响应
  response.end('Hello World');
}).listen(8081);
// 8081端口
console.log('Server running at http://127.0.0.1:8081/');