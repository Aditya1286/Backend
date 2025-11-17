import fs from 'fs';

const content = "Some Data";

fs.writeFile('test.txt', content, 'utf8', (err) => {
    if (err) return console.log(err);
    console.log("The data has been stored.");

    fs.readFile('test.txt', 'utf8', (err, data) => {
        if (err) return console.log(err);
        console.log("File content:", data);
    });
});
