const express = require('express');
const router = express.Router();
const {User} = require('../models/users');
const bcrypt = require('bcrypt');

const getUser= async(req,res)=>{
    const user = await User.findOne({email:req.body.email});
    // console.log(user.genJWT());
    if(!user) res.status(404).send("Please Register");

    //compare sequence should be as it is
    const passwordMatch = await bcrypt.compare(req.body.password,user.password);

    if(!passwordMatch) {
        res.send("password not matched")
    }
    else{
        
        res.send("Password match")
    }
    
}

router.route('/').post(getUser);

module.exports = router;