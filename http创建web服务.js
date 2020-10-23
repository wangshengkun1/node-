const http = require('http');
// req   获取客户端传过来的信息
// res   给游览器响应信息

http.createServer((req,res)=>{

    console.log(req.url);//获取URL

    // 设置响应头
    // 状态码200  文件类型 html 字符集utf-8
    res.writeHead(200,{"Content-type":"text/html;charset='utf-8'"});

    res.write("<head><meta charset='UTF-8'></head>");

    res.write('你好 is nodejs');

    res.write('<h2>你好 nodejs</h2>');

    res.end();//结束响应
}).listen(3000);