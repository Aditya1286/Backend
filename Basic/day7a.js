import fs from 'fs';

//creating the object for updating the thing
const wstream = fs.createWriteStream('test.txt',{encoding:'utf-8'});
//writing to the object
wstream.write('\nThis is the addon to just check wethere the writeStream is working properly or not');
//after end of writing if we want to write at the end 
//this actually close the stream 
wstream.end('\nThis is to just check end event emitter');
//this is event emitter is used to write after finish or end
wstream.on('finish',()=>{
    console.log("Successfuly written through stream");
})

