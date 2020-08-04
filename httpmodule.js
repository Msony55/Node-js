const http = require("http");
const server = http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/html"})
        res.write("<h1>Node js first hosting </h1>");

    res.end();
}).listen(3000,()=>console.log("Server Running on port 3000"));