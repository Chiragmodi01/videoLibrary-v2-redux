import React, { useState } from 'react'
import './VideoOptions.css';
import {AiOutlineClockCircle, CgPlayListAdd, BiShare, AiOutlineHistory, RiThumbUpLine} from '../../utils/getIcons';
import { useLocation, useNavigate } from 'react-router-dom';
import { watchLaterService } from '../../helpers/services/watchLaterService';
import { deleteWatchlaterVideo } from '../../helpers/services/deleteWatchlaterVideo';
import { deleteFromHistoryService } from '../../helpers/services/deleteFromHistoryService';
import { useMain } from '../../helpers/context/main-context';
import { findVideo } from '../../utils/findVideo';
import {PlaylistsModal} from '../../comps';
import { removeLikeVideoService } from '../../helpers/services/removeLikeVideoService';
import { toast } from 'react-toastify';

function VideoOptions({video}) {
    const {state, dispatch, utilsState: {userLoggedIn, showPlaylistModal}, utilsDispatch} = useMain();
    let {pathname} = useLocation();
    let navigate = useNavigate();

    const isVideoInWatchlater = findVideo(video._id, state.watchlater) ? true : false;

    const saveToWatchlater = () => {
       if(userLoggedIn) {
        watchLaterService(dispatch, video)
       } else {
        navigate('/signup');
       }
    }

    const deleteFromWatchlater = () => {
        deleteWatchlaterVideo(dispatch, video)
    }

    const deleteFromHistory = () => {
        deleteFromHistoryService(dispatch, video)
    }

    const deleteFromLiked = () => {
        removeLikeVideoService(dispatch, video);
        toast.success('Video remove from liked');
    }

    const playlistOptionHandler = () => {
        userLoggedIn ? utilsDispatch({type: "SHOW_PLAYLIST_MODAL", payload: !showPlaylistModal}) : navigate("/signup")
    }

    
    const copyCurrentHref = () => {
        navigator.clipboard.writeText(`${window.location.href}${video._id}`);
        toast.success('Link copied to clipboard!');
        utilsDispatch({type: "TOAST_DELAY", payload: 1500 });
    }
    

  return (
    <div className='videoOptions'>
       { pathname === "/history" && <ul className="videoOptions-menu cursor-pointer" onClick={deleteFromHistory}>
            <AiOutlineHistory className='icon-share-flip' size="1.5em" />
            <li className="videoOptions-menu-item">Remove from history</li>
        </ul>}
        { pathname === "/liked" && <ul className="videoOptions-menu cursor-pointer" onClick={deleteFromLiked}>
            <RiThumbUpLine className='icon-like' size="1.5em" />
            <li className="videoOptions-menu-item">Remove from liked</li>
        </ul>}
        <ul className="videoOptions-menu cursor-pointer" onClick={isVideoInWatchlater ? deleteFromWatchlater : saveToWatchlater}>
            <AiOutlineClockCircle size="1.5em" />
            <li className="videoOptions-menu-item">{isVideoInWatchlater ? 'Remove from Watch later' : 'Add to Watch later'}</li>
        </ul>
        <ul className="videoOptions-menu cursor-pointer" onClick={() => playlistOptionHandler()}>
            <CgPlayListAdd size="1.5em" />
            <li className="videoOptions-menu-item">Save to playlist</li>
        </ul>
        <ul className="videoOptions-menu cursor-pointer" onClick={copyCurrentHref}>
            <BiShare className='icon-share-flip' size="1.5em" />
            <li className="videoOptions-menu-item">Share</li>
        </ul>
        { showPlaylistModal && <PlaylistsModal video={video} /> }
    </div>
  )
}

export {VideoOptions}