import React from 'react'
import './VideoOptions.css';
import {AiOutlineClockCircle, CgPlayListAdd, BiShare, AiOutlineHistory} from '../../utils/getIcons';
import { useLocation, useNavigate } from 'react-router-dom';
import { watchLaterService } from '../../helpers/services/watchLaterService';
import { deleteWatchlaterVideo } from '../../helpers/services/deleteWatchlaterVideo';
import { useMain } from '../../helpers/context/main-context';

function VideoOptions({video}) {
    let {pathname} = useLocation();
    let navigate = useNavigate();
    const {dispatch, userLoggedIn} = useMain();

    const saveToWatchlater = () => {
       {userLoggedIn ?  watchLaterService(dispatch, video) : navigate('/signup')};
    }

    const deleteFromWatchlater = () => {
        deleteWatchlaterVideo(dispatch, video)
    }

  return (
    <div className='videoOptions'>
       { pathname === "/history" && <ul className="videoOptions-menu cursor-pointer">
            <AiOutlineHistory className='icon-share-flip' size="1.5em" />
            <li className="videoOptions menu-item">Remove from history</li>
        </ul>}
        <ul className="videoOptions-menu cursor-pointer" onClick={pathname === "/watchlater" ? deleteFromWatchlater : saveToWatchlater}>
            <AiOutlineClockCircle size="1.5em" />
            <li className="videoOptions-menu-item">{pathname === "/watchlater" ? 'Remove from Watch later' : 'Save to Watch later'}</li>
        </ul>
        <ul className="videoOptions-menu cursor-pointer">
            <CgPlayListAdd size="1.5em" />
            <li className="videoOptions-menu-item">Save to playlist</li>
        </ul>
        <ul className="videoOptions-menu cursor-pointer">
            <BiShare className='icon-share-flip' size="1.5em" />
            <li className="videoOptions-menu-item">Share</li>
        </ul>
    </div>
  )
}

export {VideoOptions}