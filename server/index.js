const express = require("express");
const cors = require("cors");//cors--crosss the origin used to move data from frontend to backend
const Signup = require("../server/model/signup");
const { default: mongoose } = require("mongoose");
const UserRoute= require("../server/Routes/userRoutes")


const app = express();
mongoose.connect("mongodb://0.0.0.0:27017")
.then(()=>console.log("mongodb connected succesfully"))
.catch((error)=>console.log(error));


app.use(express.json());
app.use(cors());


//API-appilication program interface
app.get('/',(req,res)=>{
    res.send("Hello world");
});

//async:it is like a protocol that allows the await code after executing the async operation
const Signups = async(req,res)=>{
    const{name,email,password}=req.body;
    
try{
    const sign = await Signup.findOne({email:email});

    if(sign){
        res.status(400).json({message:"User already exists"})
    }
    else{
        const user = new Signup.create({
         name,
         email,
         password
        })
        if(user){
            res.status(200).json({message:"User registered successfully"})
            console.log("registration success")
        }
        else{
            res.status(400).json({message:"Error while registering"})
        }
    }




}catch(error){
 console.log(error)
}
};



app.use("/user",UserRoute);

app.listen(3000,()=>{   //2000 represents port it is our choice
    console.log("server is running")
})


