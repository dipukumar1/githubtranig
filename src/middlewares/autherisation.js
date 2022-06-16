const jwt =require("jsonwebtoken")

const mid =async function (req, res, next){

     let token = req.headers["x-Auth-token"];
     if (!token) token = req.headers["x-auth-token"];

     let decodedToken = jwt.verify(token, "functionup-radon");
   if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });

