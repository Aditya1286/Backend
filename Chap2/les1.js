import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.get('/',(req,res)=>{
  const file = fs.readFileSync(path.join(__dirname, "les1.html"), "utf8");
  res.send(file);
});
app.listen(port, () => console.log(`Server at http://localhost:${port}`));
