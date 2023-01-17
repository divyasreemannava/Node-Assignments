var http = require("http");
const { url } = require("inspector");
const { type } = require("os");

const httpServer = http.createServer(handleServer);

function handleServer(req, res) {
  if(req.url=="/welcome"){
    res.writeHead(200,{"content-type":"text/html"})
    res.write("<h1>Welcome to Dominos!</h1>")
    res.end()
  }
  else if(req.url == "/contact"){
    // res.writeHead(200,{"content-type":"application/json"})
    res.write(JSON.stringify({
        phone: '18602100000', 
        email: 'guestcaredominos@jublfood.com'   
    }))
    res.end()
  }else{
    res.end("Page not found")
  }
}
httpServer.listen(3000,()=>{console.log("server is up at 3000")})
module.exports = httpServer;