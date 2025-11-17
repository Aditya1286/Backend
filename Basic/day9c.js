import express from 'express';
const app = express();

app.use(express.json()); // parse JSON
app.use(express.urlencoded({ extended: false })); // parse form data

// GET routes
app.get('/', (req, res) => res.send('<h1>Home Page</h1>'));
app.get('/about', (req, res) => res.send('<h1>About Page</h1>'));
app.get('/user/:id', (req, res) => res.send(`User ID: ${req.params.id}`));
app.get('/search', (req, res) => res.send(`You searched: ${req.query.term}`));


// 404 route
app.use((req, res) => res.status(404).send('404 - Page Not Found'));

// Start server
app.listen(3000, () => console.log('Server running at http://localhost:3000'));
