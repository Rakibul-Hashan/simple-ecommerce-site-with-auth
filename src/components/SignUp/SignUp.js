import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()

    // All Handles
    const handleEmailBlur = e => {
        setEmail(e.target.value)
    }
    const handlePasswordBlur = e => {
        setPassword(e.target.value)
    }
    const handleConfirmPasswordBlur = e => {
        setConfirmPassword(e.target.value)
    }
    if(user){
        navigate('/shop')
        // redirect('/shop')
    }
    const handleCreateUser = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Password did not match!')
            return
        }
        setError('')
        createUserWithEmailAndPassword(email, password)
    }
    
console.log(user);
    return (
        <form action="action_page.php" onSubmit={handleCreateUser}>
            <div className="container">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr />
                <label htmlFor="email"><b>Email</b></label>
                <input onBlur={handleEmailBlur} type="text" placeholder="Enter Email" name="email" id="email" required />
                <label htmlFor="psw"><b>Password</b></label>
                <input onBlur={handlePasswordBlur} type="password" placeholder="Enter Password" name="psw" id="psw" required />
                <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                <input onBlur={handleConfirmPasswordBlur} type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />
                <p className='error-message'>{error}</p>
                <hr />
                <p>Already have an account? <Link to="/login">Login</Link>.</p>
                <button type="submit" className="registerbtn">Sign Up</button>
            </div>
            <div className="container">
                <div className='g-sign-in-button'>
                    <div className="content-wrapper">
                        <div className='logo-wrapper'>
                            <img src='https://developers.google.com/identity/images/g-logo.png' />
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

export default SignUp
