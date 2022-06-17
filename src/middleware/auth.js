const jwt = require("jsonwebtoken")

const authenticate = function (req, res, next) {
    console.log(req.headers)
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.send({ status: false, msg: "token must be present" });


    let decodedToken = jwt.verify(token, "functionup-thorium");
    if (!decodedToken)
        return res.send({ status: false, msg: "token is invalid" });

    next()

}

const authorise = function (req, res, next) {

     let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];

     let decodedToken = jwt.verify(token, "functionup-thorium");
    if (!decodedToken)
        return res.send({ status: false, msg: "token is invalid" });

     let userModified = req.params.userModified
     let userLoggedIn = decodedToken.userLoggedIn

    if (userModified != userLoggedIn) {
        return res.send({ status: false, msg: "user logged is not allowed to modify the requested users data" })


    } else {
        next()
    }
};

module.exports.authenticate = authenticate;
module.exports.authorise = authorise



