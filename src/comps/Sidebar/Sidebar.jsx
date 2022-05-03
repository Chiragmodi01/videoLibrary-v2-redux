import React from 'react'
import './Sidebar.css'

import {AiOutlineHome, AiOutlineClockCircle, AiOutlineHistory, RiThumbUpLine, MdOutlineVideoLibrary} from '../../utils/getIcons';
import { useMain } from '../../helpers/context/main-context';

function Sidebar() {
  const { hideMenu, onMobile } = useMain();

  return (
    <div className={`Sidebar ${hideMenu && 'short'} ${onMobile && 'tiny'}`}>
      <div className="sidebar-container">
        <div className={hideMenu ? "sidebar-menu short" : "sidebar-menu flex"}>
          <AiOutlineHome className='menu-icon' size='1.5em'/>
          <h4 className="sidebar-menu-title">Home</h4>
        </div>
        <div className={hideMenu ? "sidebar-menu short" : "sidebar-menu flex"}>
          <MdOutlineVideoLibrary className='menu-icon' size='1.5em'/>
          <h4 className="sidebar-menu-title">Playlists</h4>
        </div>
        <div className={hideMenu ? "sidebar-menu short" : "sidebar-menu flex"}>
          <AiOutlineClockCircle className='menu-icon' size='1.5em'/>
          <h4 className="sidebar-menu-title">Watch Later</h4>
        </div>
        <div className={hideMenu ? "sidebar-menu short" : "sidebar-menu flex"}>
          <RiThumbUpLine className='menu-icon' size='1.5em'/>
          <h4 className="sidebar-menu-title">Liked</h4>
        </div>
        <div className={hideMenu ? "sidebar-menu short" : "sidebar-menu flex"}>
          <AiOutlineHistory className='menu-icon' size='1.5em'/>
          <h4 className="sidebar-menu-title">History</h4>
        </div>
      </div>
    </div>
  )
}

export default Sidebar