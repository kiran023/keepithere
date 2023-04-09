import React from 'react'
import { GoogleButton } from 'react-google-button'
import {
    Link
} from "react-router-dom";

export const Homepage = () => {
    return (
        <>
            <div className="signin-box">

                <div style={{ width: "30%" }} className="inner-box">
                    <div>
                        <p>Name</p>
                        <input style={{ width: "100%", padding: "8px" }} type="text" name="" id="" placeholder='Full name'/>
                    </div>
                    <div>
                        <p>Email</p>
                        <input style={{ width: "100%", padding: "8px" }} type="email" placeholder='name@email.com' />
                    </div>
                    <div>
                        <p>Password</p>
                        <input style={{ width: "100%", padding: "8px" }} type="password" placeholder='Create password' />
                    </div>
                    <button style={{ width: "100%", padding: "8px" }} className="mybtn" >Sign up</button>
                    <legend className='or'>or</legend>
                    <GoogleButton style={{ width: "100%", fill: "white" }} />
                    <div style={{ textAlign: "center", marginTop: "4px" }}>already registered ? <Link to="/signin">Sign in</Link> </div>
                </div>

            </div>
        </>
    )
}
