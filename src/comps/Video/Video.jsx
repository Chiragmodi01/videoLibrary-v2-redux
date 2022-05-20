import React, { useState, useRef } from 'react'
import { useMain } from '../../helpers/context/main-context';
import './Video.css';
import {BiDotsVerticalRounded} from '../../utils/getIcons';
import {VideoOptions} from '../../comps/index';
import { historyVideoService } from '../../helpers/services/historyVideoService';
import { useLocation, useNavigate } from 'react-router-dom';
import {useOnClickOutside} from '../../utils/onClickOutside';

               
function Video({channelImg, video, title, channel, timesAgo, timeLength, views}) {
    const {hideMenu, dispatch, userLoggedIn, incognito, setHideMenu} = useMain();
    const [showOptions, setShowOptions] = useState(false);
    const [isHoverVideoPlaying, setIsHoverVideoPlaying] = useState(false);
    const [changeTextOnHover, setChangeTextOnHover] = useState(false);

    const videoOptionsRef = useOnClickOutside(() => setShowOptions(prev => !prev), showOptions)
    const videoHoverRef = useRef(null);

    let {pathname} = useLocation();
    let navigate = useNavigate();

    const videoHandler = () => {
        navigate(`/video/${video._id}`);
        setHideMenu(true);
        if(userLoggedIn) {
          if(!incognito) {
              pathname === "/" && historyVideoService(dispatch, video);
          }
       }
    }

    const playVideoOnHover = () => {
        setChangeTextOnHover(true);
        videoHoverRef.current = setTimeout(() => {
            setIsHoverVideoPlaying(true)
        }, 2000)
    }
    const stopHoverPlayingVideo = () => {
        setChangeTextOnHover(false);
        setIsHoverVideoPlaying(false);
        clearTimeout(videoHoverRef.current)
    }

  return (
    <div className={hideMenu ? 'video-container big flex-centered' : 'video-container flex-centered'} ref={videoOptionsRef}>
        <div className="video-header cursor-pointer" onClick={videoHandler} onMouseEnter={playVideoOnHover} onMouseLeave={stopHoverPlayingVideo}>
            {!isHoverVideoPlaying ? 
            <div className='video-box'>
                <img src={`https://i.ytimg.com/vi/${video._id}/mqdefault.jpg`} className="video-thumbnail" alt="video-thumbnail" />
                <span className="video-box-border-top"></span>
                <span className="video-box-border-right"></span>
                <span className="video-box-border-bottom"></span>
                <span className="video-box-border-left"></span>
            {!changeTextOnHover ? <span className="time-length">{timeLength}</span> :
                <span className="hover-text">Keep hovering to play</span> }
            </div>:
            <span className="iframe-wrapper flex-centered">
                <span className="layer-iframe-short" onMouseLeave={stopHoverPlayingVideo}></span>
                <iframe className="video-iframe-short" src={`https://www.youtube-nocookie.com/embed/${video._id}?autoplay=1&mute=1&modestbranding=1&fs=0&showinfo=0`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </span>
            }
        </div>
        <div className="video-footer">
            <div className="video-footer-top flex-centered">
                <img src={`https://yt3.ggpht.com/ytc/${channelImg}=s48-c-k-c0x00ffffff-no-rj`} className="channel-image" alt="creator-image" />
                <h4 className="video-title flex-centered cursor-pointer" onClick={videoHandler}>{title}</h4>
                <BiDotsVerticalRounded className='video-icon-dots cursor-pointer' size="1.5em"onClick={() => setShowOptions(prev => !prev)}/>
            </div>
            <div className="video-footer-bottom flex-centered">
                <p className="channel-name">{channel}</p>
                <p className="video-views">{views} • {timesAgo}</p>
            </div>
        </div>
        {showOptions && <VideoOptions video={video} />}
    </div>
  )
}

export {Video}