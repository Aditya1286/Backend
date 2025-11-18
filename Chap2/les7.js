import express from 'express';
import cookieSession from 'cookie-session';
const app=express();
app.use(cookieSession({
    name:'session',
    keys: ['secretKey123'],
    maxAge: 24*60*60*1000
}));
app.get('/',(req,res)=>{
    res.send("Hey!!! this is cookie-session Middleware Practice Server");
});
app.get('/session-set',(req,res)=>{
    req.session.user={name: "Aditya",role: "Student"};
    res.send("Session data saved inside the cookie!!");
});
app.get('/session-get',(req,res)=>{
    res.send(JSON.stringify(req.session));

})
app.listen(3000,()=>{
    console.log('Server live at port 3000');
})