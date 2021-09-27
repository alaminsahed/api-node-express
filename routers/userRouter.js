const express = require('express');
const router = express.Router();
const {User} = require('../models/users');
const bcrypt = require('bcrypt');


const addUser= async(req,res)=>{
    // console.log(req.body.email);
    const prevUser = await User.findOne({email: req.body.email});
    if(prevUser) return res.status(404).send("email already registered")
    
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

  
    //hashing password
    const getSlat = await bcrypt.genSalt(10); 
    newUser.password = await bcrypt.hash(newUser.password,getSlat);

   try {
       const saveNewUser = await newUser.save();
       res.send({
           name: saveNewUser.name,
           email: saveNewUser.email
       });
       
   } catch (error) {
    //    console.log(error);
       const errMsg= [];
       for(filed in error.errors){
           errMsg.push(error.errors[filed].message)
       }
       res.status(404).send(errMsg);
       
   }



}

router.route('/').post(addUser);

module.exports = router;