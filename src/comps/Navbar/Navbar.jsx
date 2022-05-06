import React  from 'react'
import './Navbar.css'
import {useMain} from '../../helpers/context/main-context';
import {IoIosMenu, IoSearchOutline, CgProfile, BiDotsVerticalRounded, BsMoon, BsSun, IoIosArrowForward, BiMask, AiOutlineLogout, MdFaceRetouchingOff, MdFace} from '../../utils/getIcons';
import {StyledButton, StyledDropdown} from '../../styledComps/index';
import { Link } from "react-router-dom";
import verifyForm from '../../utils/verifyForm';
import {toast} from 'react-toastify';

function Navbar({toggleDropdownRef}) {
  const { setHideMenu, onMobile, showDropdown, setShowDropdown, setLightTheme, lightTheme, userSignedIn, userLoggedIn, incognito, setIncognito } = useMain();
  const {logoutSubmitHandler} = verifyForm();

  const setIncognitoMode = () => {
    {incognito ? toast.info("Incognito mode turned off! Your history will be tracked!") : toast.info("You are browsing in Incognito mode now! Your history won't be tracked!") }
    setIncognito(prev => !prev)
  }

  const IconIncognito = incognito ? MdFace : MdFaceRetouchingOff

  return (
    <div className='Navbar'>
      <div className="nav-left flex-centered">
        <IoIosMenu className={onMobile ? "no-display" : "ham-icon"} size='1.8em' onClick={(() => setHideMenu(prev => !prev))}/>
        <Link to="/" className="brand">YouTube</Link>
      </div>
      <div className="nav-mid flex-centered">
        <div className="searchbar flex-centered">
          <input type="text" placeholder='Search' className='search-input' />
          <span className="search-icon-wrapper flex-centered" title="Search">
            <IoSearchOutline className="icon-search" size='1.3em' title="Search"/>
          </span>
        </div>
      </div>
      <div className="nav-right flex-centered">
          <BiDotsVerticalRounded className="icon-dots cursor-pointer" size="1.5em" title="Settings" onClick={() => setShowDropdown(prev => !prev)} />
          <StyledDropdown ref={toggleDropdownRef} className={showDropdown ? 'flex settings-dropdown' : 'no-display'}>
            <ul className="dropdown-menu">
              <li className="menu-item flex-centered cursor-pointer" onClick={() => setLightTheme(prev => !prev)}>
                <span className="menu-item-icon">
                 {lightTheme ? <BsSun size="1.3em" /> : <BsMoon size="1.3em" />}
                </span>
                <span className="menu-item-content flex-centered justify-space-between">
                  <p className="item-title">Appearance: {lightTheme ? 'Light' : 'Dark'} theme</p>
                  <IoIosArrowForward size="1.3em" />
                </span>
              </li>
              {userLoggedIn && <li className="menu-item cursor-pointer flex-centered justify-start" onClick={setIncognitoMode}>
                <span className="menu-item-icon">
                  <IconIncognito size="1.4em" />
                </span>
                <span className="menu-item-content flex-centered justify-space-between">
                <p className="item-title">{incognito ? 'Turn off Incognito' : 'Turn on Incognito'}</p>
                <IoIosArrowForward size="1.3em" />
                </span>
              </li>}
              {userLoggedIn && <li className="menu-item cursor-pointer flex-centered justify-start" onClick={logoutSubmitHandler}>
                <AiOutlineLogout size="1.4em" />
                <p className="item-title">Logout</p>
              </li>}
            </ul>
          </StyledDropdown>
        <div className="image-wrapper">
          {
            userLoggedIn ? 
             <img className='user-img cursor-pointer' src="https://i.pravatar.cc/32?img=3" alt="user-image" title="Profile"/> :
             <Link to={userSignedIn ? "login" : "signup"}>
              <StyledButton className="cursor-pointer">
                <CgProfile size='1.6em' />
                <h3>{userSignedIn ? "Log In" : "Sign In"}</h3>
              </StyledButton>
            </Link>
          }
        </div>
      </div>
    </div>
  )
}

export {Navbar}