import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./signup.module.css";

export const Signup = () => {
  
    const[name,setname]=useState();
    const[email,setemail] =useState();
    const[password,setpassword] =useState();


    const onSubmit = async(e)=>{
      e.preventDefault();
    

  try{
    const sendSign=await fetch(`http://localhost:3000/user/signup`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },

      body:JSON.stringify({name,email,password})
    });

    const response = await sendSign.json();

    if(sendSign.ok){
      alert("registration successfull");
    }
    else{
      alert("registration fail");
    } 
  }

  catch(error){
    console.log(error);
  }
};
  
  return (
    <div className={style.full}>
      <div>
        <h1 className={style.hi}>Signup</h1>
        <div>
          <input type="text" name="Name" placeholder="Name" onChange={(e)=>setname(e.target.value)} />
          <br />
          <br />

          <input type="email" name="Email"  placeholder="Email"  onChange={(e)=>setemail(e.target.value)}/>
          <br />
          <br />

          <input type="password" name="password" placeholder="password"  onChange={(e)=>setpassword(e.target.value)}/>
          <br />
          <br />

          <button onClick={onSubmit}type ="submit">Submit</button>
          <div>
            <p>
              don't have an account ? <Link to="/">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;