const express = require("express")
const app = express()
const port = 3000

app.get('/',(req,res)=>{
      res.send("THIS IS HOME PAGE!!!")
})
app.get('/login',(req,res)=>{
res.send("<h1> welcome to login page</h1>")
})
app.listen(port,()=>{
    console.log(`APP LISTENING ON PORT ${port}.`)
})