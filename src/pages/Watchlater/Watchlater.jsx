import React from 'react'
import { Video } from '../../comps'
import { useMain } from '../../helpers/context/main-context'
import './Watchlater.css'
import {FaRegTrashAlt, AiOutlineClockCircle} from '../../utils/getIcons';
import {toast} from 'react-toastify';
import {deleteAllFromWatchlater} from '../../helpers/services/deleteAllFromWatchlater';

function Watchlater() {
  const {state, dispatch} = useMain();

  let dateString = new Date().toDateString();    
  const currentDate = dateString.split(' ').slice(0, 2).join(', ');
  const currentDay = dateString = dateString.split(' ').slice(2, 3).join(' ');

  const clearWatchlater = () => {
    if(state.watchlater.length !== 0) {
      if(window.confirm("Are you sure? Watch later will be cleared forever!")) {
        deleteAllFromWatchlater(dispatch);
        toast.success('Watch later cleared successfully!');
      }
    }
  }

  return (
    <div className="Watchlater">
      <div className="history-header">
        <h2 className='history-header-title'>Watch Later</h2>
        <div className='history-header-right flex-centered gap-3 cursor-pointer' onClick={clearWatchlater}>
          <FaRegTrashAlt size="1.5em" />
          <h2 className="history-clear-text">Clear All Watch Later</h2>
        </div>
      </div>
      <div className="videos-container">
        {
        state.watchlater.length === 0 ? 
        <div className='empty-page-placeholder flex-centered flex-col gap-4'>
          <AiOutlineClockCircle size="10em" className='page-placeholder icon'/>
          <h1 className='page-placeholder text'>Nothing in Watch later Yet</h1>
        </div> :
        <>
        <div className="history-current-day">{currentDate} {currentDay}</div>
        {state.watchlater.map((video) => {
          return (
            <Video video={video} key={video._id} views={video.views} thumbnail={video.thumbnail} title={video.title} channel={video.channel} timesAgo={video.timesAgo} timeLength={video.timeLength}/>
          )
        })}
        </>
        }
      </div>
    </div>
  )
}

export {Watchlater}