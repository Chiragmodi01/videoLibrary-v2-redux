import React from 'react'
import './Login.css'
import {StyledForm} from '../../styledComps/index';
import {Link} from 'react-router-dom';

function Login() {
  return (
    <div className="Login">
      <div className="Login flex-centered">
        <StyledForm className="login-form">
            <h2 className="form-title">Login</h2>
            <div className="form-fields flex-centered">
                <label htmlFor="first-name" className="form-label">
                    <span className="form-label-span">Email</span>
                    <input type="email" className="first-name form-input" id="first-name" />
                </label>
                <label htmlFor="first-name" className="form-label">
                <span className="form-label-span">Pasword</span>
                    <input type="password" className="first-name form-input" id="first-name" />
                </label>
                <label htmlFor="first-name" className="form-label">
                <span className="form-label-span">Confirm Pasword</span>
                    <input type="password" className="first-name form-input" id="first-name" />
                </label>
            </div>
            <button type="submit" className="form-submit">Log In</button>
            <h3 className="change-form-text">Don't have an account yet? <Link className="form-login-btn" to="/signup" replace >Signup</Link></h3>
        </StyledForm>
    </div>
    </div>
  )
}

export {Login}