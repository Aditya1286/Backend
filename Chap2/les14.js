import express from "express";
import session from "express-session";

const app = express();

app.use(
  session({
    secret: "mySecretKey",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/", (req, res) => {
  if (req.session.views) {
    req.session.views++;
    res.send(`You have visited this page ${req.session.views} times`);
  } else {
    req.session.views = 1;
    res.send("Welcome! First visit");
  }
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
