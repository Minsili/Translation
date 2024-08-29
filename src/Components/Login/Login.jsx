import React, { useState } from 'react';
import './login.css';

import user_icon from '../Assets/person.png'
import password_icon from '../Assets/password.png'
import google from '../Assets/google.png'
import facebook from '../Assets/facebook.png'
import insta from '../Assets/instagram.png'

const Login = () => {
    return(
        <div className='body'>
            <div className='form-container'>
            <div className="logo">
                <h2>MA'A</h2>
            </div>
            <div className="login">
                <div className="header">
                    <h2>Login</h2>
                    <p>Happy to see you again!</p>
                </div>
                <div className="inputs">
                    <div className="input">
                        <img src={user_icon} alt="" />
                        <input type="text" name='username' placeholder='Enter your username' />
                    </div>
                    <div className="input">
                        <img src={password_icon} alt="" />
                        <input type="password" name='password' placeholder='Enter your password' />
                    </div>
                </div>
                
                <div className="forgetPwd">
                    <p>Forget password? <a href="#">Click here!</a></p>
                </div>

                <div className="submit">
                    <button className='btn'>Login</button>
                </div>

                <div className="socialMedia">
                    <div className="row">
                       <div className="line"></div>
                       <span>Or continue with</span>
                       <div className="line"></div>
                    </div>
                    <div className="row">
                        <img src={google} alt="" />
                        <img src={insta} alt="" />
                        <img src={facebook} alt="" />
                    </div>
                </div>

            </div>
            </div>
        </div>
    )
}

export default Login;