const express = require('express');
const router = express.Router();
const {User} = require('../models/users');


const addUser= async(req,res)=>{
    console.log(req.body.email);
    const prevUser = await User.findOne({email: req.body.email});
    if(prevUser) return res.status(404).send("email already registered")
    
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
   
   try {
       const saveNewUser = await newUser.save();
       res.send(saveNewUser);
       
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