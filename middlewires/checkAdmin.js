const jwt = require("jsonwebtoken");

module.exports = function(req,res,next){
    console.log(req.user.role);
    if(req.user.role !== "admin") res.status(403).send("Forbidden");
    next();

}