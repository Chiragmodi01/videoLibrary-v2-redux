import React, { useRef } from 'react'
import './PlaylistsModal.css';
import {GrClose, GrAdd} from '../../utils/getIcons'
import { useMain } from '../../helpers/context/main-context';

function PlaylistsModal() {
    const { showPlaylistModal, setShowPlaylistModal} = useMain();
    const playlistModalRef = useRef(null)

    const closePlaylistModal = (e) => {
    if(showPlaylistModal && (!playlistModalRef.current.contains(e.target))) {
        setShowPlaylistModal(false);
        }
    }

  return (
    <div className='PlaylistsModal flex-centered' onClick={(e) => closePlaylistModal(e)}>
        <div className="modal-wrapper flex-centered flex-col" ref={playlistModalRef}>
            <div className='modal-top flex-centered'>
                <h2 className="modal-top-title">Add Playlist</h2>
                <GrClose color="white" size="1em" className='icon-close cursor-pointer' onClick={() => setShowPlaylistModal(prev => !prev)}/>
            </div>
            <div className="modal-main flex-centered">
                <input type="text" className='modal-input' placeholder='Create New Playlist' />
                <GrAdd color="white" size="1.1em" className='icon-add cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}

export default PlaylistsModal