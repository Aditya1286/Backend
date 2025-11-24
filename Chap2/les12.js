import express from "express";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Home Page (Set Cookies Form)
app.get("/", (req, res) => {
  res.send(`
    <h2>Set Cookies Example</h2>
    <form action="/set" method="POST">
      Course: <input type="text" name="course"><br><br>
      User: <input type="text" name="user"><br><br>
      <button type="submit">Set Cookies</button>
    </form>
    <br>
    <a href="/clear">Clear Cookies</a>
  `);
});

// Set Cookies Route
app.post("/set", (req, res) => {
  const { course, user } = req.body;
  res.cookie("course", course, { maxAge: 60000 });
  res.cookie("user", user, { maxAge: 60000 });

  res.send(`
    <h2>Cookies have been set for 1 minute!</h2>
    <p>Course: ${course}</p>
    <p>User: ${user}</p>
    <br>
    <a href="/">Go Back</a>
  `);
});

// Clear Cookies
app.get("/clear", (req, res) => {
  res.clearCookie("course");
  res.clearCookie("user");
  res.send(`
    <h3>Cookies Cleared Successfully!</h3>
    <a href="/">Go Back</a>
  `);
});

// Start Server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
