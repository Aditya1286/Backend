import http from 'http';
const server = http.createServer((req,res)=>{
    console.log("New Request Initiated");
    console.log("Request Url: ",req.url);
    console.log("Request Method: ",req.method);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("This is Your Nodejs Server checkpost!!");

});
server.listen(3000,()=>{
    console.log("Server Listening on PortNumber-3000");
});