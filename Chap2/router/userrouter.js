import express from 'express';
const router = express.Router();
router.get('/',(req,res)=>{
    res.send("Hi user this is a routing root page");
});
router.get('/name',(req,res)=>{
    res.send('User name Aditya');
});
export default router;