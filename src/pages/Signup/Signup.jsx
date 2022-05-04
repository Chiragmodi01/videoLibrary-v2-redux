import React from 'react'
import {StyledForm} from '../../styledComps/index';
import './Signup.css';
import {Link} from 'react-router-dom';

function Signup() {
  return (
    <div className="Signup flex-centered">
        <StyledForm className="signup-form">
            <h2 className="form-title">Signup</h2>
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
            <button type="submit" className="form-submit">Sign Up</button>
            <h3 className="change-form-text">Already have an account? <Link className="form-login-btn" to="/login" replace >Login</Link></h3>
        </StyledForm>
    </div>
  )
}

export {Signup}