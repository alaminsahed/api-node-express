const express = require("express");
const dotenv = require('dotenv');
const app = express();
const studentRouters = require('./routers/studentRouter.js');
const morgan = require('morgan');
const userRouter = require('./routers/userRouter');
const authRouter = require('./routers/outhRouter');
const connection = require('./conn');

dotenv.config({path:'./config.env'});

//call database file
connection();


app.use(express.json()) // Put/post/patch -> json object saves in req.body




if(process.env.NODE_ENV === 'development')
{
    app.use(morgan('dev'));
}



app.get("/", (req,res)=>{
    res.send('hello world')
})

app.use("/api/student", studentRouters);

app.use("/api/user",userRouter);

app.use("/api/auth",authRouter);


// port
const port = process.env.PORT || 5000

app.listen( port , ()=>{
   console.log(`listing port no ${port}`) 
});
