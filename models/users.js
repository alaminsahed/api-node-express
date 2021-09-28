const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const usersSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 5, maxlength: 10 },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Add a valid email",
    ],
  },
  password: { type: String, required: true, minlength: 5 },
});

// we can create schema method
// generate jwt token for signup and login
//access schema.methods and write your property
//don't use arrow function-> this point current object in normal function
// this point current function in arrow function

usersSchema.methods.genJWT = function () {
  const token = jwt.sign({ _id: this._id, email: this.email }, process.env.key);
  return token;
};

const User = mongoose.model("User", usersSchema);
module.exports.User = User;
