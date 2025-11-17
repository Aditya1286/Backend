import express from 'express';
const app=express();
app.use(express.urlencoded({extended:false}));
app.use((req,res,next)=>{
    console.log("the code is checked through middleware 1");
    req.UserID='12345';
    next();
});
app.get('/',(req,res)=>{
    res.send("This is the Practice on Middleware for UserId: "+req.UserID);
})
app.listen(4000,()=>{
    console.log("Server Started at port 4000");
})
