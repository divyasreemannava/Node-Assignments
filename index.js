var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var html = fs.readFileSync('./index.html', 'utf8');
    var message = 'Divya Sree';
    html = html.replace('{Your Name}', message);
    res.end(html);
    
}).listen(5000, ()=>{console.log("server is up")});