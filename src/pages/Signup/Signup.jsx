import React from 'react'
import {StyledForm} from '../../styledComps/index';
import './Signup.css';
import {Link} from 'react-router-dom';
import verifyForm from '../../utils/verifyForm';
import { useMain } from '../../helpers/context/main-context';
import {BsEyeFill, BsEyeSlashFill} from '../../utils/getIcons'

function Signup() {
    const { userData, setUserData, rePassword, setRePassword, submitUserData, onMobile } = verifyForm();

    const {showPassword, setShowPassword} = useMain();
    const IconShowPass = showPassword ? BsEyeFill : BsEyeSlashFill;

  return (
    <div className="Signup flex-centered">
        <StyledForm className="signup-form" onSubmit={(e) => submitUserData(e)}>
            <h2 className="form-title">Signup</h2>
            <div className="form-fields flex-centered">
                <label htmlFor="email" className="form-label">
                    <span className="form-label-span">Email</span>
                    <input required value={userData.email} autoComplete="on" type="email" className="form-input" id="email" onChange={(e) => setUserData({...userData, email: e.target.value})} />
                </label>
                <label htmlFor="password" className="form-label">
                    <span className="form-label-span">Pasword</span>
                    <input required value={userData.password} autoComplete="on" type={showPassword ? "text" : "password"} className="form-input" id="password" onChange={(e) => setUserData({...userData, password: e.target.value})} />
                    <IconShowPass title={showPassword ? "Hide password" : "Show password"} className='icon-pass cursor-pointer' size="1.3em" onClick={() => setShowPassword(prev => !prev)}/>
                </label>
                <label htmlFor="re-password" className="form-label">
                    <span className="form-label-span">Confirm Pasword</span>
                    <input required value={rePassword} autoComplete="on" type="password" className="form-input" id="re-password" onChange={(e) => setRePassword(e.target.value)} />
                </label>
            </div>
            <input type="submit" className="form-submit" value='Sign In'/>
            <h3 className="change-form-text">Already have an account? <Link className="form-login-btn" to="/login" replace >Login</Link></h3>
        </StyledForm>
    </div>
  )
}

export {Signup}