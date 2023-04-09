import React from 'react'
import { GoogleButton } from 'react-google-button'
import {
  Link
} from "react-router-dom";
import { UserAuth} from './context/AuthContext';
import { useNavigate, } from 'react-router-dom';
import { useEffect } from 'react';


export const Signin = () => {
const {googleSignIn,user}= UserAuth();
const navigate= useNavigate()

  const handleGoogleSignIn=async()=>{

    try{
      await googleSignIn();

    }
    catch{
      alert("error")
    }
  };

  useEffect(()=>{
    if(user!=null)
    navigate('/account');

  },[user]);


  return (
    <>
      <div className="signin-box">

        <div style={{width:"30%"}} className="inner-box">
          <div>
            <p>Email</p>
            <input style={{ width: "100%", padding: "8px" }} type="email" placeholder='name@email.com'/>
          </div>
          <div>
            <p>Password</p>
            <input style={{ width: "100%", padding: "8px" }} type="password" placeholder='Enter your password'/>
          </div>
          <button style={{ width: "100%", padding: "8px" }} className="mybtn">Sign in</button>
          <legend className='or'>or</legend>
          <GoogleButton style={{width: "100%",fill:"white"}}  onClick={handleGoogleSignIn}/>
          <div style={{textAlign:"center",marginTop:"4px"}}>haven't registered yet? <Link to="/">Sign up</Link> </div>
        </div>

      </div>
    </>
  );
}
