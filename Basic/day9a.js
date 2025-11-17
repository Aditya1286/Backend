// basic-node-routing.js
import * as http from 'http';

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  // Home route
  if (url === '/' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Welcome to Home Page!</h1>');
  }
  // About route
  else if (url === '/about' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>About Us</h1>');
  }
  // Contact route
  else if (url === '/contact' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Contact Page</h1>');
  }
  // 404 Not Found
  else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 - Page Not Found</h1>');
  }
});

server.listen(3000, () => console.log('Server running at http://localhost:3000'));
