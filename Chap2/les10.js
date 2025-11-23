import express from 'express';
const app = express();

// Custom Middleware
function myLogger(req, res, next) {
  console.log(`Request Method: ${req.method} | URL: ${req.url}`);
  next(); // Pass control to next middleware or route
}

app.use(myLogger); // Register middleware globally

app.get('/', (req, res) => {
  res.send('Hello from Home!');
});

app.get('/about', (req, res) => {
  res.send('Hello from About!');
});

app.listen(3000, () => console.log('Server running on port 3000'));
