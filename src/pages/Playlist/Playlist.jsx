import React from 'react'
import './Playlist.css'
import {CgPlayListAdd, RiPlayList2Fill} from '../../utils/getIcons';
import { useMain } from '../../helpers/context/main-context';
import {PlaylistsModal, PlaylistCard} from '../../comps';

function Playlist() {
  const {state, showPlaylistModal, setShowPlaylistModal} = useMain();

  let dateString = new Date().toDateString();    
  const currentDate = dateString.split(' ').slice(0, 2).join(', ');
  const currentDay = dateString = dateString.split(' ').slice(2, 3).join(' ');


  const createPlaylistService = () => {
    setShowPlaylistModal(prev => !prev);
  }

  return (
    <div className="Playlist">
      <div className="history-header">
        <h2 className='history-header-title'>Playlists ({state.playlists.length})</h2>
        <div className='history-header-right flex-centered gap-3 cursor-pointer' onClick={createPlaylistService}>
          <CgPlayListAdd size="1.5em" />
          <h2 className="history-clear-text">Create Playlist</h2>
        </div>
      </div>
        <div className="history-current-day">{currentDate} {currentDay}</div>

      <div className="videos-container">
        {
        state.playlists.length === 0 ?
        <div className='empty-page-placeholder flex-centered flex-col gap-4'>
          <RiPlayList2Fill size="10em" className='page-placeholder icon'/>
          <h1 className='page-placeholder text'>You've no Playlists</h1>
        </div>
        :
        <>
        {state.playlists.map((playlist) => {
          return (
            <PlaylistCard playlistTitle={playlist.title} key={playlist._id} playlistId={playlist._id} videosInPlaylist={playlist.videos}/>
          )
        })}
        </>
        }
      </div>
      {showPlaylistModal && <PlaylistsModal hideMenu />}
    </div>
  )
}

export {Playlist}