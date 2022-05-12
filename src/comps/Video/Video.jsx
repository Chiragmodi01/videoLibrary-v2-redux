import React, { useState } from 'react'
import { useMain } from '../../helpers/context/main-context';
import './Video.css';
import {BiDotsVerticalRounded} from '../../utils/getIcons';
import {VideoOptions} from '../../comps/index';
import { historyVideoService } from '../../helpers/services/historyVideoService';
import { useLocation, useNavigate } from 'react-router-dom';

               
function Video({channelImg, video, title, channel, timesAgo, timeLength, views}) {
    const {hideMenu, dispatch, userLoggedIn, incognito, setHideMenu} = useMain();
    const [showOptions, setShowOptions] = useState(false);

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

  return (
    <div className={hideMenu ? 'video-container big flex-centered' : 'video-container flex-centered'}>
        <div className="video-header cursor-pointer" onClick={videoHandler}>
            <img src={`https://i.ytimg.com/vi/${video._id}/mqdefault.jpg`} className="video-thumbnail" alt="video-thumbnail" />
            <span className="time-length">{timeLength}</span>
        </div>
        <div className="video-footer">
            <div className="video-footer-top flex-centered">
                <img src={`https://yt3.ggpht.com/ytc/${channelImg}=s48-c-k-c0x00ffffff-no-rj`} className="channel-image" alt="creator-image" />
                <h4 className="video-title flex-centered">{title}</h4>
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