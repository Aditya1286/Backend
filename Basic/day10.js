import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware for req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use((req,res,next)=>{
  const name=req.body.username;
  const pwd=req.body.password;
  if(name=="admin" && pwd=="admin"){
    console.log("Authenticated user");
    res.send("Hi admin");
  }
  else{
    console.log("Unauthenticated User");
    res.send("Unauthenticaed user");
  }
});

// Handle form POST
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  res.send(`Logged in as ${username} - ${password}`); 
  
});

app.listen(3000, () => console.log('Server running on port 3000'));
