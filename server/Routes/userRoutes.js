const express = require("express")
const{Signups}=require("../controllers/signupcontrollers")

//importing the router to export the path
const router = express.Router()


router.post('/signup',Signups);


module.exports = router;