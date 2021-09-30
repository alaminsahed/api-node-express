const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  let token = req.header("Authorization");
  
  if (!token) res.status(401).send("Token not found");

  //split returns array ["Bearer", "token"]

  token = token.split(" ")[1].trim();

  try {
    const decode = jwt.verify(token, process.env.key);

    //send decode info in the req property.can use "user" or anything 
    req.user = decode;
    //we access bola from any where when hit the api.
    // req.bola = "22";
    next();

  } catch (error) {
        res.status(400).send("Invalid Token");
  }

 
};
