import React from 'react'
import './Playlist.css'
import {CgPlayListAdd, RiPlayList2Fill} from '../../utils/getIcons';
import { useMain } from '../../helpers/context/main-context';
import {PlaylistsModal} from '../../comps';

function Playlist() {
  const {state, showPlaylistModal, setShowPlaylistModal} = useMain();

  return (
    <div className="Playlist">
      <div className="history-header">
        <h2 className='history-header-title'>Playlists</h2>
        <div className='history-header-right flex-centered gap-3 cursor-pointer' onClick={() => setShowPlaylistModal(prev => !prev)}>
          <CgPlayListAdd size="1.5em" />
          <h2 className="history-clear-text">Create Playlist</h2>
        </div>
      </div>

      <div className="videos-container">
        {
        state.playlists.length === 0 &&
        <div className='empty-page-placeholder flex-centered flex-col gap-4'>
          <RiPlayList2Fill size="10em" className='page-placeholder icon'/>
          <h1 className='page-placeholder text'>You've no Playlists</h1>
        </div>
        // :
        // <>
        // <div className="history-current-day">{currentDate} {currentDay}</div>
        // {state.playlists.map((video) => {
        //   return (
        //     <Video video={video} key={video._id} views={video.views} thumbnail={video.thumbnail} title={video.title} channel={video.channel} timesAgo={video.timesAgo} timeLength={video.timeLength}/>
        //   )
        // })}
        // </>
        }
      </div>
      {showPlaylistModal && <PlaylistsModal />}
    </div>
  )
}

export {Playlist}