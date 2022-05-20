import React from 'react'
import './FooterNav.css'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import {AiFillHome, AiOutlineHome, AiFillClockCircle, AiOutlineHistory, AiOutlineClockCircle, MdVideoLibrary, MdOutlineVideoLibrary,  RiThumbUpFill, RiThumbUpLine} from '../../utils/getIcons';
import { useMain } from '../../helpers/context/main-context';

function FooterNav() {
  const {onMobile, userLoggedIn} = useMain()
  let {pathname} = useLocation();
  let navigate = useNavigate();

  const IconHome = pathname === "/" ? AiFillHome : AiOutlineHome;
  const IconPlaylist = pathname === "/playlist" ? MdVideoLibrary : MdOutlineVideoLibrary;
  const IconWatchlater = pathname === "/watchlater" ? AiFillClockCircle : AiOutlineClockCircle;
  const IconLike = pathname === "/liked" ? RiThumbUpFill : RiThumbUpLine;

  const navigateToSignup = () => {
    setTimeout(() => {
      !userLoggedIn && navigate("/signup")
    }, 0)
  }

  
  return (
    <div className={onMobile ? 'FooterNav' : 'no-display'}>
      <div className="footerNav-container">
        <NavLink to="/" className="footerNav-menu flex">
          <IconHome className='menu-icon' size='1.8em'/>
        </NavLink>
        <NavLink onClick={navigateToSignup} to="/playlist" className="footerNav-menu flex">
          <IconPlaylist className='menu-icon' size='1.8em'/>
        </NavLink>
        <NavLink onClick={navigateToSignup} to="/watchlater" className="footerNav-menu flex">
          <IconWatchlater className='menu-icon' size='1.8em'/>
        </NavLink>
        <NavLink onClick={navigateToSignup} to="/liked" className="footerNav-menu flex">
          <IconLike className='menu-icon' size='1.8em'/>
        </NavLink>
        <NavLink onClick={navigateToSignup} to="/history" className="footerNav-menu flex">
          <AiOutlineHistory className='menu-icon' size='1.8em'/>
        </NavLink>
      </div>
    </div>
  )
}

export {FooterNav}