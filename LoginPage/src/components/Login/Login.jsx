import React from 'react';
import './Login.css';
import GitHub from '../../assets/github.svg';
import Linkedin from '../../assets/linkedin.svg';
import Google from '../../assets/google.svg';
import Facebook from '../../assets/facebook.svg';


function Login() {
    return (
        <div className='app-login'>
            <h1>Sign In</h1>
            <div className="btn-social">
                <button className='btn-links'><img src={GitHub} alt="" /></button>
                <button className='btn-links'><img src={Linkedin} alt="" /></button>
                <button className='btn-links'><img src={Google} alt="" /></button>
                <button className='btn-links'><img src={Facebook} alt="" /></button>
            </div>
            <p>Or Use Your Email Password</p>

            <form action="">
                <label htmlFor="email"></label>
                <input type="email" id="email" placeholder='Email' />
                <label htmlFor="pass"></label>
                <input type="password" id="pass" placeholder='Password' />

                <a href="">Forget Your Password?</a>

                <button className="btn-default">Sign in</button>
            </form>

        </div>
    )
}

export default Login
