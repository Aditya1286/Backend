//Pipe concept
import fs from 'fs';
const fstream = fs.createReadStream('test.txt',{encoding:'utf-8'});
const wstream = fs.createWriteStream('text.txt',{encoding:'utf-8'});
//pipe data from readable to write  readable to writable
//It mean it read data from test.txt and add on text.txt
//It override the data of text.txt if there and data exist
fstream.pipe(wstream);
wstream.on('finish', () => {
    console.log('File copied successfully!');
});