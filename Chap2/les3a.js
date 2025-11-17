//JSON Parser
import express from 'express';
const app = express();
app.use(express.json());

app.post('/details', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.listen(4002, () => {
  console.log('Server running on port 4002');
});
