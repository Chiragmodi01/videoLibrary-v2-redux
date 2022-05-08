import React  from 'react'
import './Login.css'
import {StyledForm} from '../../styledComps/index';
import {Link} from 'react-router-dom';
import verifyForm from '../../utils/verifyForm';
import { useMain } from '../../helpers/context/main-context';
import {BsEyeFill, BsEyeSlashFill} from '../../utils/getIcons'

function Login() {
  const { userData, setUserData, rePassword, setRePassword, submitUserData, guestLogin } = verifyForm();
  const {userSignedIn, userLoggedIn, showPassword, setShowPassword} = useMain();

  const IconShowPass = showPassword ? BsEyeFill : BsEyeSlashFill;

  return (
    <div className="Login">
      <div className="Login flex-centered">
        <StyledForm className="login-form" onSubmit={(e) => submitUserData(e)}>
            <h2 className="form-title">Login</h2>
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
            <div className="login_buttons flex-centered flex-col gap-3">
              <button type="button" className="form-submit" onClick={guestLogin}>Guest Log In</button>
              <input disabled={!userSignedIn || userLoggedIn ? true : false} type="submit" className="form-submit" value='Log In'/>
            </div>
            <h3 className="change-form-text">Don't have an account yet? <Link className="form-login-btn" to="/signup" replace >Signup</Link></h3>
        </StyledForm>
    </div>
    </div>
  )
}

export {Login}