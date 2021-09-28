const mongoose = require('mongoose');


const connectDB=async()=>{
    
const connection = await mongoose.connect('mongodb://localhost:27017/college',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log("database connected"))
.catch((err)=>console.log(err))

}

module.exports = connectDB;



