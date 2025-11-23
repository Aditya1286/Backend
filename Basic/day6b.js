//This is not in Syllabus 
import fs from 'fs';
import { serialize, deserialize } from 'bson';

const obj = { name: "Aditya", age: 21 };

const binaryData = serialize(obj);

fs.writeFileSync('data.bson', binaryData);

const fileData = fs.readFileSync('data.bson');
const restored = deserialize(fileData);

console.log(restored); 