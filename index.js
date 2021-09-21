const express = require("express");
const app = express();
const studentRouters = require('./routers/studentRouter.js');
const morgan = require('morgan');

//builtin middleware
// middleware is object. 3 parts -> req ,res, next
// middleware maintain sequence
app.use(express.json()) // Put/post/patch -> json object saves in req.body

app.use(express.urlencoded({extended:true})); //When send not json data //data-> id=1&&name = something.

app.use(express.static('public')); //access file http://localhost:3000/demo.txt

//third party middleware
// morgan -> console the api

app.use(morgan('dev'));

app.get("/", (req,res)=>{
    res.send('hello world')
})

app.use("/api/student", studentRouters)




const port = 3000;

app.listen(port, ()=>{
   console.log(`listing port no ${port}`) 
});
