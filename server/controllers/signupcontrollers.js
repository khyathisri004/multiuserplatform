const Signup = require("../model/signup")

const Signups = async(req,res)=>{
    const{name,email,password}=req.body;
    
try{
    const sign = await Signup.findOne({email:email});

    if(sign){
        res.status(400).json({message:"User already exists"})
    }
    else{
        const user = await Signup.create({
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
console.log(error);
}

};

const Signups























module.exports = {Signups};