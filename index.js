const express = require("express");
const app = express();
const studentRouters = require('./routers/studentRouter.js');
const morgan = require('morgan');
const mongoose = require('mongoose');
const userRouter = require('./routers/userRouter');

//builtin middleware
// middleware is object. 3 parts -> req ,res, next
// middleware maintain sequence
app.use(express.json()) // Put/post/patch -> json object saves in req.body

mongoose.connect('mongodb://localhost:27017/college',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log("database connected"))
.catch((err)=>console.log(err))



//third party middleware
// morgan -> console the api

app.use(morgan('dev'));

app.get("/", (req,res)=>{
    res.send('hello world')
})

app.use("/api/student", studentRouters);

app.use("/api/user",userRouter);


const port = 3000;

app.listen(port, ()=>{
   console.log(`listing port no ${port}`) 
});
