import { position } from "dom-helpers";
import React, { useEffect, useState } from "react";
import "./SignUp.css";

function SignUp(){
   const[username,setUsername]=useState("")
   const[password,setPassword]=useState("")
   const[pwverification, setpwVerification]=useState("")


  function handleSubmit(e){
  e.preventDefault()
  let data={
    username: username,
    password_digest: password,
    password_verification: pwverification,
    position: "manager"
  }
  console.log(data)
  }

    return<>
    <form onSubmit={handleSubmit} className="signupform">
  <div className="form-group">
    <h4>Register</h4>
    <label >Email address</label>
    <input type="name" value={username} className="form-control" onChange={(e) => setUsername(e.target.value)} aria-describedby="emailHelp" placeholder="Enter Your Username"/>
    <small  className="form-text text-muted">We'll never share your informations with anyone else.</small>
  </div>
  <div className="form-group">
    <label >Password</label>
    <input type="password" value={password} className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
  </div>
  <div className="form-group">
    <label >Password Verification</label>
    <input type="password" value={pwverification} className="form-control" onChange={(e) => setpwVerification(e.target.value)} placeholder="Password"/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" >I Agreed to terms and Conditions</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </>

    
}

export default SignUp