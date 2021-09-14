const express = require("express");
const fs = require('fs');
const app = express();

app.get("/", (req,res)=>{
    res.send('hello world')
})

app.get("/api/v1/student",(res,req)=>{
    res.send()
})

const port = 3000;

app.listen(port, ()=>{
   console.log(`listing port no ${port}`) 
});
