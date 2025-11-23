import express from 'express';
import ani from './rout/ani.js';
const app=express();
app.use('/animal',ani);
app.get('/',(req,res)=>{
    res.send("Hi this is a practice server");
});
app.get('/about',(req,res)=>{
    res.send("Hi this server is created by naaz");
});
app.listen(3000,()=>{
    console.log('Server is live at port 3000');
});
