import React , { useState } from 'react'
import './Sidebar.css'

import {AiFillHome, AiOutlineHome, AiFillClockCircle, AiOutlineClockCircle, AiOutlineHistory, RiThumbUpFill, RiThumbUpLine, MdVideoLibrary, MdOutlineVideoLibrary} from '../../utils/getIcons';
import { useMain } from '../../helpers/context/main-context';
import { NavLink, useLocation } from "react-router-dom";

function Sidebar() {
  const { hideMenu, onMobile } = useMain();
  const {pathname} = useLocation();
  const IconHome = pathname === "/" ? AiFillHome : AiOutlineHome;
  const IconPlaylist = pathname === "/playlist" ? MdVideoLibrary : MdOutlineVideoLibrary;
  const IconWatchlater = pathname === "/watchlater" ? AiFillClockCircle : AiOutlineClockCircle;
  const IconLike = pathname === "/liked" ? RiThumbUpFill : RiThumbUpLine;

  return (
    <div className={`Sidebar ${hideMenu && 'short'} ${onMobile && 'tiny'}`}>
      <div className="sidebar-container">
        <NavLink to="/" className={hideMenu ? "sidebar-menu short cursor-pointer" : " cursor-pointer sidebar-menu flex"}>
          <IconHome className='menu-icon' size='1.5em'/>
          <h4 className="sidebar-menu-title">Home</h4>
        </NavLink>
        <NavLink to="/playlist" className={hideMenu ? "sidebar-menu short cursor-pointer" : " cursor-pointer sidebar-menu flex"}>
          <IconPlaylist className='menu-icon' size='1.5em'/>
          <h4 className="sidebar-menu-title">Playlists</h4>
        </NavLink>
        <NavLink to="/watchlater" className={hideMenu ? "sidebar-menu short cursor-pointer" : " cursor-pointer sidebar-menu flex"}>
          <IconWatchlater className='menu-icon' size='1.5em'/>
          <h4 className="sidebar-menu-title">Watch Later</h4>
        </NavLink>
        <NavLink to="/liked" className={hideMenu ? "sidebar-menu short cursor-pointer" : " cursor-pointer sidebar-menu flex"}>
          <IconLike className='menu-icon' size='1.5em'/>
          <h4 className="sidebar-menu-title">Liked</h4>
        </NavLink>
        <NavLink to="/history" className={hideMenu ? "sidebar-menu short cursor-pointer" : " cursor-pointer sidebar-menu flex"}>
          <AiOutlineHistory className={pathname === "/history" ? 'menu-icon active-history' : 'menu-icon'} size='1.5em'/>
          <h4 className="sidebar-menu-title">History</h4>
        </NavLink>
      </div>
    </div>
  )
}

export {Sidebar}