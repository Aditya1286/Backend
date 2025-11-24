import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'les3.html'));
});

app.post('/register', (req, res) => {
  console.log(req.body);
  res.send(`User received: ${req.body.name}, Age: ${req.body.age}`);
});

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
