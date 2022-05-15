import React, { useRef } from 'react'
import './PlaylistsModal.css';
import {IoMdClose, IoMdAdd} from '../../utils/getIcons'
import { useMain } from '../../helpers/context/main-context';
import {createNewPlaylistService} from '../../helpers/services/createNewPlaylistService';
import {addVideoToPlaylistService} from '../../helpers/services/addVideoToPlaylistService';
import {removeVideoFromPlaylistService} from '../../helpers/services/removeVideoFromPlaylistService';
import { toast } from 'react-toastify';
import {findVideoInPlaylist} from '../../utils/findVideo';

function PlaylistsModal({video, hideMenu}) {
    const { state, dispatch, showPlaylistModal, setShowPlaylistModal, addPlaylistInput, setAddPlaylistInput} = useMain();
    const playlistModalRef = useRef(null)

    const closePlaylistModal = (e) => {
    if(showPlaylistModal && (!playlistModalRef.current.contains(e.target))) {
        setShowPlaylistModal(false);
        }
    }

    const addPlaylistHandler = () => {
        addPlaylistInput.length === 0 ? 
        toast.warning('Playlist name cannot be empty') :
        createNewPlaylistService(dispatch, addPlaylistInput);
        setAddPlaylistInput('');
    }

    const createPlaylistHandler = (e) => {
        setAddPlaylistInput(e.target.value);
    }

    const playlistCheckHandler = (e, playlist) => {
        e.target.checked ? 
        addVideoToPlaylistService(dispatch, playlist._id, video) :
        removeVideoFromPlaylistService(dispatch, playlist._id, video._id);
    }

  return (
    <div className='PlaylistsModal flex-centered' onClick={(e) => closePlaylistModal(e)}>
        <div className="modal-wrapper flex-centered flex-col" ref={playlistModalRef}>
            <div className='modal-top flex-centered'>
                <h2 className="modal-top-title">Add Playlist</h2>
                <IoMdClose size="1em" className='icon-close cursor-pointer' onClick={() => setShowPlaylistModal(prev => !prev)}/>
            </div>
            <div className="modal-main flex-centered">
                <input value={addPlaylistInput} type="text" className='modal-input' placeholder='Create New Playlist' onChange={(e) => createPlaylistHandler(e)} />
                <IoMdAdd size="1.1em" className='icon-add cursor-pointer' onClick={addPlaylistHandler}/>
            </div>
            <div className='modal-bottom playlist-items'>
            {!hideMenu && state.playlists?.map((playlist) => {
                    return (
                        <div className="playlist-item flex-centered justify-start" key={playlist._id} >
                            <label htmlFor={playlist._id} className="flex-centered col-gap-1">
                                <input checked={findVideoInPlaylist(playlist.videos, video?._id)} type="checkbox" name="playlist-modal-item" id={playlist?._id} onChange={(e) => playlistCheckHandler(e, playlist)}/>
                                {playlist.title}
                            </label>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export {PlaylistsModal}