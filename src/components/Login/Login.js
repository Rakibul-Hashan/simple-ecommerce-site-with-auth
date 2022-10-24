import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, redirect } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';



function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading, error
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = e => {
        setEmail(e.target.value)
    }
    const handlePasswordBlur = e => {
        setPassword(e.target.value)
    }
    const handleConfirmPasswordBlur = e => {
        setConfirmPassword(e.target.value)
    }
    const handleUserSignIn = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)

    }
    console.log(user);
    if (user) {
        redirect('/shop')
    }


    //  loading 
    if (loading) {
        return <p className='loading'>Loading...</p>;
    }
    else {
        return (
            <form action="action_page.php" onSubmit={handleUserSignIn}>

                <div className="container">
                    <h1>Login</h1>
                    <p>Please fill in this form to login.</p>
                    <hr />
                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" id="email" required />
                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" id="psw" required />
                    <hr />
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    <p>New to Ema-John? <Link to="/signup">Create an account</Link>.</p>
                    <button type="submit" className="loginbtn">Login</button>
                </div>
                <div className="container">
                    <div className='g-sign-in-button'>
                        <div className="content-wrapper">
                            <div className='logo-wrapper'>
                                <img src='https://developers.google.com/identity/images/g-logo.png' alt='image' />
                            </div>
                            <span className='text-container'>
                                <span>Sign in with Google</span>
                            </span>
                        </div>
                    </div>
                </div>

            </form>
        )
    }
}
    export default Login
