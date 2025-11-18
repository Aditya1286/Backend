import express from "express";
import session from "express-session";

const app = express();

app.use(session({
  secret: "verySecretKey123",
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 } // Cookie expires in 1 min
}));
app.get('/',(req,res)=>{
    res.send("This is the practice repo for the Express-session")
})
app.get("/set-session", (req, res) => {
  req.session.user = { name: "Aditya", course: "Backend Dev" };
  res.send("Session saved on server!");
});

app.get("/get-session", (req, res) => {
  res.send(req.session);
});

app.get("/destroy-session", (req, res) => {
  req.session.destroy();
  res.send("Session destroyed!");
});

app.listen(3000, () => console.log("Server running on port 3000"));
