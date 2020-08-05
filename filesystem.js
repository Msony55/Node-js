// // fs is module of node js for file handling

// //this is for print your file
// const fs = require("fs");
// // console.log(fs); 
// fs.readFile(__dirname+"/hello.txt"/*enter your file name */,"utf8",(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// });

//this is for delete your file

// const fs = require("fs");
// fs.readFile(__dirname+"/hello.txt"/*enter your file name */,"utf8",(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// });
// //unlink is use for delete file
// fs.unlink(__dirname+"/hello.txt",(err,data)=>{
//     if(err) throw err;
//     console.log("your file is delete\n"+data);
// });

// work on server

const fs = require("fs");
const http = require("http");
const server = http.createServer(function(req,res){

    fs.readFile(__dirname+"/hello.txt"/*enter your file name */,"utf8",(err,data)=>{
        res.writeHead(200,{"content-type":"text/plain"});
        res.write(data);

    res.end();
            if(err) throw err;
            console.log(data);
        });
}).listen(3000,()=>console.log("Server Running on port 3000"));