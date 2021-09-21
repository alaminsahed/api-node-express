const express = require("express");
const app = express();
const studentRouters = require('./routers/studentRouter.js');

app.use(express.json())

app.get("/", (req,res)=>{
    res.send('hello world')
})

app.use("/api/student", studentRouters)




const port = 3000;

app.listen(port, ()=>{
   console.log(`listing port no ${port}`) 
});
