import React, { useState } from 'react';
import "./loginform.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; 
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons'; 
import exterior3 from '../image/inside service/exterior3.jpg';
import googlelogo from '../image/google png.png';
import fblogo from '../image/Facebook_Logo.png';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (username === 'admin' && password === 'password') {
            alert('Login successful!');
            // Redirect or perform other actions here
        } else {
            setErrorMessage('Invalid username or password');
        }
    };

    const handleGoogleLogin = () => {
        alert('Google login functionality goes here!');
        // Implement Google login logic
    };

    const handleFacebookLogin = () => {
        alert('Facebook login functionality goes here!');
        // Implement Facebook login logic
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login-container">
            <div className='flex-container'>
            <div className='lnsider-container1'>
                <h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="login-form-group">
                        <div className="input-icon-container">
                            <FontAwesomeIcon icon={faUser} className="input-icon" />
                            <input
                                type="text"
                                id="username"
                                placeholder="Type your username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="login-form-group">
                        <div className="input-icon-container">
                            <FontAwesomeIcon icon={faLock} className="input-icon" />
                            <input
                                type={showPassword ? 'text' : 'password'} 
                                id="password"
                                placeholder="Type your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <FontAwesomeIcon
                                icon={showPassword ? faEyeSlash : faEye}
                                className="eye-icon"
                                onClick={toggleShowPassword}
                            />
                        </div>
                        <div className='text-10'>
                            <input type='checkbox' id='rememberMe' />
                            <span style={{ fontFamily: '"Chakra Petch", sans-serif' }}>Remember</span>
                        </div>
                        <div className='forgot'style={{ fontFamily: '"Chakra Petch", sans-serif' }}>
                            <a href='/'>Forgot Password?</a>
                        </div>
                    </div>
                    <button type="submit">Login Now</button>
                </form>
                {errorMessage && <p id="error-message" className="error">{errorMessage}</p>}
                <p style={{color:'gray',marginLeft:'230px'}}><span className='boldtext'>Login</span> with</p>
                <div className="social-login-container">
                    <button className="social-button" onClick={handleGoogleLogin} style={{color:'gray'}}>
                    <img src={googlelogo} className="social-icon" /> Login with <span className='boldtext'> Google</span>
                    </button>
                    <button className="social-button" onClick={handleFacebookLogin} style={{color:'gray'}}>
                    <img src={fblogo} className="social-icon" /> Login with <span className='boldtext'> Facebook</span>
                    </button>
                </div>
                <p className='have-account'> Don't have an account? <a href=""> Sign Up</a></p>

            </div>
            <div className='lnsider-container2'>
                <div className='for-image-container'>
                <img src={exterior3} alt="Car" />
                </div>
            </div>
            </div>
        </div>
    );
};

export default LoginForm;
