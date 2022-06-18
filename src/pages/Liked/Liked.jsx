import React from 'react'
import './Liked.css'
import {RiThumbUpLine} from '../../utils/getIcons';
import { useMain } from '../../helpers/context/main-context';
import {PlaylistsModal, Video} from '../../comps';

function Liked() {
  const {state, utilsState: {showPlaylistModal}} = useMain();

  let dateString = new Date().toDateString();    
  const currentDate = dateString.split(' ').slice(0, 2).join(', ');
  const currentDay = dateString = dateString.split(' ').slice(2, 3).join(' ');



  return (
    <div className="Liked">
      <div className="history-header">
        <h2 className='liked-title'>Liked ({state.liked.length})</h2>
      </div>

        <div className="history-current-day">{currentDate} {currentDay}</div>
      <div className="videos-container">
        {
        state.liked.length === 0 ?
        <div className='empty-page-placeholder flex-centered flex-col gap-4'>
          <RiThumbUpLine size="10em" className='page-placeholder icon'/>
          <h1 className='page-placeholder text'>You've no Liked videos</h1>
        </div>
        :
        <>
        {state.liked.map((video) => {
          return (
            <Video video={video} channelImg={video.channelImg} key={video._id} views={video.views} title={video.title} channel={video.channel} timesAgo={video.timesAgo} timeLength={video.timeLength}/>
          )
        })}
        </>
        }
      </div>
      {showPlaylistModal && <PlaylistsModal />}
    </div>
  )
}

export {Liked}