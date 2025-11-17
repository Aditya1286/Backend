//Learning File Stream
// There are four main types of streams:

// Readable-e.g., fs.createReadStream()
// Writable - e.g., fs.createWriteStream()
// Duplex - both readable and writable (e.g., TCP sockets)
// Transform -  modify data while reading/writing (e.g., zlib compression)
import fs from 'fs';
//Create a readable stream 
const rstream = fs.createReadStream('test.txt',{encoding:'utf-8'});
//listen to data stream
rstream.on('data',(chunk)=>{
    console.log('Received chunk:',chunk);
})
//listen to end event this is the file after readinf if you want to give a callback 
rstream.on('end',()=>{
    console.log("Finsihed reading file");
});
//this is event emitter handle the emitter 
rstream.on('error',(err)=>{
    console.error(err.message);
})