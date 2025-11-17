import fs from 'fs';
//using try catch 
try {
    fs.writeFileSync("test.txt", "Hello there", "utf8");
    console.log("Data written successfully");

    fs.renameSync("test.txt", "newdata.txt");
    console.log("File renamed successfully");
} catch (err) {
    console.log("Error:", err);
}
