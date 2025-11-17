import { Transform } from 'stream';
import fs from 'fs';

const upperCaserTransform = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  }
});

const writeStream = fs.createWriteStream("transformed.txt");

process.stdin
  .pipe(upperCaserTransform)
  .pipe(writeStream);
