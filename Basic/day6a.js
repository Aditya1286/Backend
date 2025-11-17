import fs from 'fs';
//writing object into text file using JSON stringify 
const content = {
    name: "Manoj",
    marks: 88
}

fs.writeFile('test.txt', JSON.stringify(content,null,2), 'utf8', (err) => {
    if (err) return console.log(err);
    console.log("The data has been stored.");

    fs.readFile('test.txt', 'utf8', (err, data) => {
        if (err) return console.log(err);
        console.log("File content:", data);
    });
});
