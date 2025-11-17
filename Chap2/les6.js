import express from "express";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Cookie parser example");
});

// create/set cookie
app.get("/set", (req, res) => {
  res.cookie("username", "Aditya", {
    maxAge: 1000 * 60 * 5, // 5 min
  });
  res.send("Cookie set!");
});

// read cookie
app.get("/get", (req, res) => {
  console.log(req.cookies);  
  res.send(req.cookies);
});

app.listen(3000, () => console.log("Server running"));
