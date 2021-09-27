const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    name: {type:String, required: true, minlength: 5, maxlength:10},
    email: {type:String, required:true, unique: true,   match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Add a valid email']},
    password:{type:String, required:true, minlength:5}
})

const User = mongoose.model('User',usersSchema);
exports.User = User;