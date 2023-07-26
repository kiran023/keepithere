import React from 'react'
import { GoogleButton } from 'react-google-button'
import {
  Link
} from "react-router-dom";
// import { UserAuth} from './context/AuthContext';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate, } from 'react-router-dom';
import { useEffect } from 'react';


export const Signin = () => {
// const {googleSignIn,user}= UserAuth();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const navigate= useNavigate()

provider.setCustomParameters({
  prompt: 'select_account'
});
  const handleGoogleSignIn=()=>{
    signInWithPopup(auth, provider)
    .then((response) => {
      console.log(response.user);
      console.log(response.user.displayName);
      localStorage.setItem("name",JSON.stringify(response.user.displayName));
      localStorage.setItem("email",JSON.stringify(response.user.email));
      // clearData();
      navigate('/account')
    })
    .catch((error) => {
      alert(error.message);
    });

  };

  // useEffect(()=>{
  //   if(user!=null)
  //   navigate('/account');

  // },[user]);


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
