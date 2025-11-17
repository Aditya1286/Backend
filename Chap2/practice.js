import express from 'express'
const app = express();

function authentication(req, res, next) {
  const isAdmin = req.query.admin === 'true';
  
  if (isAdmin && req.path === '/user') {
    console.log('Welcome, Admin!');
    res.send('welcome admin');
  } else {
    console.log('You are not authenticated.');
  }
  
  next();
}

app.use(authentication);

app.get('/user', (req, res) => {
  console.log('User route accessed');
  res.send('User page');
});

const PORT =  3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});