//this is with the help of es6 method
import * as server from "http";
const myserver=server.createServer((req,res)=>{
    console.log("New Request Recorder!!");
    res.end("Hello Server this is production check!!");
})
myserver.listen(3000,()=>{console.log("Server recieved")});