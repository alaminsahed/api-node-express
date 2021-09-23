const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/students')
.then(()=>console.log("mongodb connected"))
.catch((err)=>console.error("database failed"));