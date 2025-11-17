import * as fs from "fs";
//either we  use callback
fs.readFile("d1.txt", "utf8", (err, data) => {
    if (err) {
        console.log("Error:", err.message);
    } else {
        console.log("File content:", data);
    }
});
