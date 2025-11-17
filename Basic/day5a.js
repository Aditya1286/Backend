import express from 'express'; 
// express is a variable and aso stores a function 
// thats why we call the function to give all the power fucntion to the constant app
const app = express();

//way of writing middleware
app.use((req,res,next)=>{
    console.log("It parsed through middleware");
    next();//this is used to tell that move forward
});
//route 
//requestHandler is also a middleware
//app.get(route,requestHandler)
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.get('/about',(req, res)=>{
    res.send('This is an Practice express server !!!')
});

// server where to listen 

app.listen(3000, () => {
    console.log('Express server started on port 3000');
});
