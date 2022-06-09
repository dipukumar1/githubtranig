const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
//const UserController= require("../controllers/userController")
//const BookController= require("../controllers/bookController")
const BookControllers= require("../controllers/bookControllers")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//router.post("/createUser", UserController.createUser  )

//router.get("/getUsersData", UserController.getUsersData)
 
//router.post("/createBook", BookController.createBook  )

//router.get("/getBooksData", BookController.getBooksData)

router.post("/createBook", BookControllers.createBook)
router.get("/allBooklist", BookControllers.allBooklist) 
router.post("/yearDetails", BookControllers.yearDetails)
router.post("/particularBooks", BookControllers.particularBooks)
router.get("/priceDetails", BookControllers.priceDetails)
router.post("/randomBooks", BookControllers.randomBooks)





module.exports = router;