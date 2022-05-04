import React from 'react'
import './FooterNav.css'

import {AiFillHome, AiOutlineHome, AiFillClockCircle, AiOutlineUser, AiOutlineHistory} from 'react-icons/ai';
import {MdVideoLibrary, MdOutlineVideoLibrary} from 'react-icons/md'
import { useMain } from '../../helpers/context/main-context';

function FooterNav() {
  const {onMobile} = useMain()

  return (
    <div className={onMobile ? 'FooterNav' : 'no-display'}>
      <div className="footerNav-container">
        <div className="footerNav-menu flex">
          <AiOutlineHome className='menu-icon' size='1.5em'/>
          <h4 className="footerNav-menu-title">Home</h4>
        </div>
        <div className="footerNav-menu flex">
          <MdOutlineVideoLibrary className='menu-icon' size='1.5em'/>
          <h4 className="footerNav-menu-title">Playlists</h4>
        </div>
        <div className="footerNav-menu flex">
          <AiOutlineUser className='menu-icon' size='1.5em'/>
          <h4 className="footerNav-menu-title">Profile</h4>
        </div>
      </div>
    </div>
  )
}

export {FooterNav}