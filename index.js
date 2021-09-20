const express = require("express");
const app = express();
const data = require('./data');

app.use(express.json())

app.get("/", (req,res)=>{
    res.send('hello world')
})

app.get("/api/student")

app.post('/api/student')


app.put('/api/student/:id')


const port = 3000;

app.listen(port, ()=>{
   console.log(`listing port no ${port}`) 
});
