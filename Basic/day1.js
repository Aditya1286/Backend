//using file system Operation
const fs=require('fs');
//write or creating file
fs.writeFile("hey.txt","Learning node js",(err)=>{
    if(err)console.error(err);
    else console.log('done');
})
//appending the text at the end of a file 
fs.appendFile("hey.txt"," Day 1",(err)=>{
    if(err)console.error(err);
    else console.log('done appending the file');
})
//renaming the filename
fs.rename("hey.txt","d1.txt",(err)=>{
    if(err)console.error(err.message);
    else console.log("done renaming the file");
})
//deleting the file
fs.unlink("d2.txt",(err)=>{
    if(err)console.error(err.message);
    else console.log("done deleting the file")
})  