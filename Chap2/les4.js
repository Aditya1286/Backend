import express from 'express';
const app = express();
const myLogger = (req, res, next) => {
    console.log("Before Logging");
    next();
    console.log("After Logging");
}
app.use(myLogger);
app.get('/', (req, res) => {
    res.send('Welcome to the homepage!');
});
app.get('/home',(req, res)=>{
    res.send()
    console.log("Welcome to terminal through the home page");
})
app.get('/products',(req,res)=>{
    res.send()
    console.log("Welcome to terminal through the products page");
}
)
app.listen(3000, () => {
    console.log("Server is running on port 3000 http://localhost:3000/")
})