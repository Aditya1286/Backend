import express from "express";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());

// Home Route
app.get("/", (req, res) => {
  const theme = req.cookies.theme || "light";

  const background = theme === "dark" ? "black" : "white";
  const textColor = theme === "dark" ? "white" : "black";

  res.send(`
    <body style="background-color:${background}; color:${textColor}; font-family:Arial; padding:20px;">
      <h1>Welcome to Themed Page</h1>
      <p>Theme set is <strong>${theme}</strong></p>
      <a href="/set-theme?theme=light">Set Light Theme</a> 
      &nbsp;&nbsp;
      <a href="/set-theme?theme=dark">Set Dark Theme</a>
    </body>
  `);
});

// Route to Set Theme
app.get("/set-theme", (req, res) => {
  const { theme } = req.query;
  res.cookie("theme", theme, { maxAge: 1000 * 60 * 5 }); // 5 min cookie
  res.redirect("/");
});

// Start Server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
