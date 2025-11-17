import express from 'express';
const app = express();

// Basic route
app.get('/', (req, res) => {
  res.status(200).set('Custom-Header', 'HelloHeader').send('<h1>Home Page</h1>');
});

// JSON route
app.get('/json', (req, res) => {
  res.status(200).json({ message: "Hello JSON!" });
});

// 404 route
app.use((req, res) => {
  res.status(404).send('404 - Page Not Found');
});

app.listen(3000, () => console.log('Express server running on http://localhost:3000'));
