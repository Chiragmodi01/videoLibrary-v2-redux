import React from 'react'
import './PlaylistCard.css';
import {RiPlayList2Fill, FaRegTrashAlt} from '../../utils/getIcons'
import { useMain } from '../../helpers/context/main-context';
import { deletePlaylistService } from '../../helpers/services/deletePlaylistService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function PlaylistCard({playlistId, playlistTitle, videosInPlaylist}) {

  const {dispatch} = useMain();
  let navigate = useNavigate()

  const deletePlaylistHandler = () => {
    window.confirm('Are you sure? this playlist will be deleted forever!') && deletePlaylistService(dispatch, playlistId);
  }

  const playlistCardClickHandler = () => {
    videosInPlaylist.length !== 0 ?
    navigate(`/playlist/${playlistId}`) : 
    toast.warning('Playlist is empty!');
  }

  return (
    <div className='PlaylistCard'>
        <div className="playlist-img-wrapper flex-centered">
            <img src="https://picsum.photos/id/237/320/208" alt="playlist-cover" className='playlist-cover cursor-pointer' onClick={playlistCardClickHandler}/>
        </div>
        <div className="playlist-right-wrapper flex-centered flex-col">
          <RiPlayList2Fill className='playlist-card-icon' size='2em' />
          <h3 className="video-nums-in-playlist">{videosInPlaylist.length}</h3>
        </div>
        <div className="playlist-bottom-wrapper flex-centered">
            <h3 className='playlist-name'>{playlistTitle}</h3>
            <FaRegTrashAlt size="1.3em" title="Delete playlist" className='icon-delete-playlist cursor-pointer' onClick={deletePlaylistHandler} />
        </div>
    </div>
  )
}

export {PlaylistCard}