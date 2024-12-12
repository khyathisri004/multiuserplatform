const mongoose = require("mongoose")  //importing the mongoose in mongoose variable

//used to create structure for the database in json

const SignupSchema = new mongoose.Schema({  
          
name:{
    type:String,
    required:true,
},
email:{
    type:String,
    required:true,
},
password:{
    type:String,
    required:true,
},

});

//model refers table

const SignupModel = mongoose.model("Signup",SignupSchema);

module.exports = SignupModel;//used to export to check the data