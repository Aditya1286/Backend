import zlib from 'zlib';  // Correct import

const input = "Hey, I just want to compress data";

// Compression
//here buffer store the compress data 
// we cant store the data in other constant
zlib.gzip(input, (err, buffer) => {
    if (err) {
        console.error(err.message);
        return;
    }
    console.log("Compressed Data: ", buffer);
    console.log("Compressed Data Size: ",buffer.length);

// Decompression
// here is buffer the object which stored the compressed data 
//If there is any other variable so we can that also
    zlib.gunzip(buffer, (err, result) => {
        if (err) {
            console.error(err.message);
            return;
        }
        console.log("Decompressed Data:", result.toString());
    });
});
