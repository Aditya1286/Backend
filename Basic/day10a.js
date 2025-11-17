import express from 'express'
import fs from 'fs'
const app = express()
app.use(express.urlencoded({extended: true}))
app.get('/showform',(req,res)=>{
  res.send(`<form action="/submitform" method="post">
  Username: <input type="text" name="username"><br>
  Email: <input type='email' name="email"><br>
  <input type="submit" value="Store data">
  </form>`)
})

app.post('/submitform', (req, res) => {
  const { username, email } = req.body
  res.send(`<h2>Details submitted<br>Username: ${username}<br>Email: ${email}</h2>`)
  fs.appendFile("Store.txt",JSON.stringify(req.body,null,2),(err)=>{
    if(err)return console.log(err)
      console.log("User has submitted the data")
  })
  console.log(req.body)
})


app.listen(3000, () => {
  console.log("✅ Server is running at 3000")
})
