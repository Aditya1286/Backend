import express from "express";
const app = express();

app.all("/test", (req, res) => {
  res.send(`This route handles all HTTP methods. You used: ${req.method}`);
});

app.listen(3000, () => console.log("Server running on port 3000"));
