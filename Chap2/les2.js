import express from 'express';
import userrouter from './router/userrouter.js'
const app = express();


app.use('/users',userrouter);
app.get('/',(req,res)=>{
    res.send("Hi this Page to check the Routing in Express");
})
app.listen(3000,()=>{
    console.log("Server Started at port 3000");
});
