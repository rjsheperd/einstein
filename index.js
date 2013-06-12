//index.js
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('welcome to project einstein\n');
}).listen(8080); 