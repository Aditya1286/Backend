//There is deflate and inflate 
//Basically gzip is deflate+extra header and footer
//deflate store less data 
import zlib from 'zlib';

const input = "Hey, I just want to compress data";

// Compress using deflate
    zlib.deflate(input, (err, compressedBuffer) => {
    if (err) {
        console.error(err.message);
        return;
    }

    console.log("Compressed Data (deflate):", compressedBuffer);
    console.log("Compressed Data Size: ",buffer.length);

    // Decompress using inflate
    zlib.inflate(compressedBuffer, (err, decompressedBuffer) => {
        if (err) {
            console.error(err.message);
            return;
        }

        console.log("Decompressed Data (inflate):", decompressedBuffer.toString());
    });
});
