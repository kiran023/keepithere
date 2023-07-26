import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Createpage = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [checkpassword, setcheckpassword] = useState('');
    const [firstName, setfirstName] = useState('');
    const navigate = useNavigate()
    let auth = getAuth();

    const submit = () => {

        createUserWithEmailAndPassword(auth, email, password)
            .then((response) => {
                console.log(response.user);
                localStorage.setItem("name", JSON.stringify(firstName));
                localStorage.setItem("email", JSON.stringify(email));
                alert("account have been created")
                navigate('/account')

            })
            .catch((err) => {
                alert(err.message);

            })


    }
    return (
        <div className='form-content'>
            <div className='form'>
                <div className='form-item'>
                    <h1>Create account</h1>
                    <div >
                        <div className='fill'>
                            <div >User Name</div>
                            <input type="text" value={firstName} onChange={(e) => { setfirstName(e.target.value) }} />
                        </div>

                        <div className='fill'>
                            <div >Email  </div>
                            <input type="email" value={email} onChange={(e) => { setemail(e.target.value) }} />
                        </div>

                        <div className='fill'>
                            <div>New password</div>
                            <input type="password" value={password} onChange={(e) => { setpassword(e.target.value) }} />
                        </div>


                        <div className='fill'>
                            <div > Confirm password  </div>
                            <input type="password" value={checkpassword} onChange={(e) => { setcheckpassword(e.target.value) }} />
                        </div>

                    </div>
                    <button onClick={submit} className='submit-btn'>Create</button>
                    <div style={{ display: "flex" }}>
                        <div>already have an account ?</div>
                        <Link to='/'><div className='alter'>Login</div></Link>
                    </div>


                </div>

            </div>

        </div>
    )
}
