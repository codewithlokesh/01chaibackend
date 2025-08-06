const express = require("express")
require('dotenv').config()

const app = express()

const port = process.env.PORT || 3000
app.get("/",(req, res)=>{
    res.send("<h2>hello express users</h2>")
})

app.get("/login",(req, res)=>{
    res.send("login page")
})
app.get("/admin",(req, res)=>{
    res.send("<h2>Admin here</h2>")
})
app.listen(port, ()=>{
    console.log(`server startED on port ${process.env.PORT}`)
})