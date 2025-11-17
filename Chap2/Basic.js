import express from "express";

const app = express();
const port = 4000;

// Middleware to parse JSON (important for POST/PUT)
app.use(express.json());

// Requests ki kahaani

// GET request
app.get("/", (req, res) => {
  res.send("Got a Get Request");
});

// POST request
app.post("/items", (req, res) => {
  res.send("Got a POST Request");
});

// PUT request
app.put("/items/:id", (req, res) => {
  res.send(`Got a PUT Request for item with id ${req.params.id}`);
});

// DELETE request
app.delete("/items/:id", (req, res) => {
  res.send(`Got a DELETE Request for item with id ${req.params.id}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Adi app listening on port ${port}`);
});
