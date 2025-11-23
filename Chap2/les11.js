import express, { urlencoded } from 'express';
import session from 'express-session';
const app=express();
app.use(express.urlencoded({extended:true}));
app.use(session({
    secret:"mysecretkey",
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge:5*60*1000},
}));
app.get('/sign',(req,res)=>{
    res.send(`
        <h2>Login Form</h2>
        <form action="/login" method="POST">
          Username: <input type="text" name="username" required /><br><br>
          Password: <input type="password" name="password" required /><br><br>
          <button type="submit">Login</button>
        </form>
      `);
});
app.post('/login',(req,res)=>{
    const {username,password}=req.body;
    if(username=== "admin" && password == "123"){
        req.session.username = username; 
    res.send(`
      <h3>Login successful!</h3>
      <p>Welcome ${username} 😊</p>
      <a href="/profile">Go to Profile</a><br>
      <a href="/logout">Logout</a>
    `);
    }else{
        res.send("❌ Invalid login credentials.<br><a href='/login'>Try again</a>");
    }
});

function authClient(req,res,next){
    if(req.session.username==="admin"){
        next();
    }
    else{
        res.send(`⛔ Unauthorized! Please <a href="/login">login first</a>.`);
    }
}

app.get('/profile',authClient,(req,res)=>{
    res.send(`
        <h2>Welcome to your Profile, ${req.session.username} 👤</h2>
        <p>This is a protected page.</p>
        <a href="/logout">Logout</a>
      `);    
});
app.get("/logout", (req, res) => {
    req.session.destroy(() => {
      res.send(`
        <h3>You have been logged out successfully.</h3>
        <a href="/login">Login Again</a>
      `);
    });
  });
  
  // Home Page
  app.get("/", (req, res) => {
    res.send(`
      <h2>Hello! Welcome to Express Session Example</h2>
      <a href="/sign">Go to Login</a>
    `);
  });
  
  app.listen(3000, () => {
    console.log(`Server running on 3000`);
  });