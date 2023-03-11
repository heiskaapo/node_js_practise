const http = require('node:http');
const server = http.createServer((req, res)=>{
const text_res = (req.url == '/') ? "You are now at the home page" : "you have reached some other place than the page you though first!"
  res.end(text_res)
})
server.listen(3000) 