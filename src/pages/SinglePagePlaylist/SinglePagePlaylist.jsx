import React from 'react'
import './SinglePagePlaylist.css';
import { Video } from '../../comps';
import { useNavigate, useParams } from 'react-router-dom';
import { useMain } from '../../helpers/context/main-context';
import { deletePlaylistService } from '../../helpers/services/deletePlaylistService';
import {FaRegTrashAlt} from '../../utils/getIcons';

function SinglePagePlaylist( ) {

  const {playlistId} = useParams();
  let navigate = useNavigate();

  const {state: {playlists}, dispatch} = useMain();

  const videoInPlaylist = playlists.find((playlist) => playlist._id === playlistId);

  const deleteCurrentPlaylist = () => {
    if(window.confirm('Are you sure? this playlist will be deleted forever!')) {
      deletePlaylistService(dispatch, playlistId);
      navigate('/playlist');
    }
  }

  return (
    <div className='SinglePagePlaylist'>
      <div className="history-header">
        <h2 className='history-header-title'>{videoInPlaylist.title} ({videoInPlaylist.videos.length})</h2>
        <div className='history-header-right flex-centered gap-3 cursor-pointer' onClick={deleteCurrentPlaylist}>
          <FaRegTrashAlt size="1.5em" />
          <h2 className="history-clear-text">Delete Playlist</h2>
        </div>
      </div>
      <div className="videos-container">
        {
          videoInPlaylist.length === 0 ? 
          <h1>No Video In this Playlist</h1> :
          videoInPlaylist.videos.map((video) => {
            return <Video video={video} channelImg={video.channelImg} key={video._id} views={video.views} title={video.title} channel={video.channel} timesAgo={video.timesAgo} timeLength={video.timeLength}/>
          })
        }
      </div>
    </div>
  )
}

export {SinglePagePlaylist}