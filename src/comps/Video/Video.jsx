import React from 'react'
import { useMain } from '../../helpers/context/main-context';
import './Video.css';

               
function Video({thumbnail, title, channel, timesAgo, timeLength, views}) {
    const {hideMenu} = useMain();

  return (
    <div className={hideMenu ? 'video-container big flex-centered' : 'video-container flex-centered'}>
        <div className="video-header">
            <img src={thumbnail} className="video-thumbnail" alt="video-thumbnail" />
            <span className="time-length">{timeLength}</span>
        </div>
        <div className="video-footer">
            <div className="video-footer-top flex-centered">
                <img src='https://i.pravatar.cc/32?img=3' className="channel-image" alt="creator-image" />
                <h4 className="video-title flex-centered">{title}</h4>
            </div>
            <div className="video-footer-bottom flex-centered">
                <p className="channel-name">{channel}</p>
                <p className="video-views">{views} • {timesAgo}</p>
            </div>
        </div>
    </div>
  )
}

export default Video