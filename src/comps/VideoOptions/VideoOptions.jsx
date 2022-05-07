import React from 'react'
import './VideoOptions.css';
import {AiOutlineClockCircle, CgPlayListAdd, BiShare, AiOutlineHistory} from '../../utils/getIcons';
import { useLocation } from 'react-router-dom';

function VideoOptions() {
    let {pathname} = useLocation();

  return (
    <div className='videoOptions'>
       { pathname === "/history" && <ul className="videoOptions-menu">
            <AiOutlineHistory className='icon-share-flip' size="2em" />
            <li className="videoOptions menu-item cursor-pointer">Remove from history</li>
        </ul>}
        <ul className="videoOptions-menu">
            <AiOutlineClockCircle size="2em" />
            <li className="videoOptions-menu-item cursor-pointer">Save to Watch later</li>
        </ul>
        <ul className="videoOptions-menu">
            <CgPlayListAdd size="2em" />
            <li className="videoOptions-menu-item cursor-pointer">Save to playlist</li>
        </ul>
        <ul className="videoOptions-menu">
            <BiShare className='icon-share-flip' size="2em" />
            <li className="videoOptions-menu-item cursor-pointer">Share</li>
        </ul>
    </div>
  )
}

export {VideoOptions}