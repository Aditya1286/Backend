import express from 'express';
import cookieParser from 'cookie-parser';
const app=express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.cookie("name","Aditya",{
        maxAge: 24*60*60*1000,
    });
    res.send("Cookie set");
});
app.get('/get',(req,res)=>{
    res.send(JSON.stringify(req.cookies))
});
app.listen(3000,()=>{
    console.log("server is live at 3000");
})