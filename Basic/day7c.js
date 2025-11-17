//Stream BackPressure 
//This happen when writtable buffer full then it stop and we run the drain function to know when the writable
//buffer is free then we start resuming the readable function 
import fs from 'fs';

const readable = fs.createReadStream('example.txt');
const writable = fs.createWriteStream('slowOutput.txt');

readable.on('data', (chunk) => {
  const canWrite = writable.write(chunk); 
  if (!canWrite) readable.pause(); // pause reading if buffer full
});

writable.on('drain', () => {
  readable.resume(); // resume when ready
});

readable.on('end', () => writable.end());
//Note using pipe it automatically handle the Stream Backpressure 