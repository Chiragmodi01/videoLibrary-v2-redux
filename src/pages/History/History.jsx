import React from 'react'
import { Video } from '../../comps';
import { useMain } from '../../helpers/context/main-context'
import './History.css'
import {FaRegTrashAlt, RiFolderHistoryLine, MdFaceRetouchingOff} from '../../utils/getIcons'
import { deleteAllFromHistory } from '../../helpers/services/deleteAllFromHistory';
import { toast } from 'react-toastify';

function History() {
  const {state, dispatch, incognito} = useMain();

  const clearHistory = () => {
    if(state.history.length !== 0) {
      if(window.confirm("Are you sure? All Watch history will be cleared forever!")) {
        deleteAllFromHistory(dispatch);
        toast.success('All watch history cleared successfully!');
      }
    }
  }

  let dateString = new Date().toDateString();    
  const currentDate = dateString.split(' ').slice(0, 2).join(', ');
  const currentDay = dateString = dateString.split(' ').slice(2, 3).join(' ');

  const IconHistoryPlaceholder = incognito ? MdFaceRetouchingOff : RiFolderHistoryLine

  return (
    <div className="History">
      <div className="history-header">
        <h2 className='history-header-title'>Watch History</h2>
        <div className='history-header-right flex-centered gap-3 cursor-pointer' onClick={clearHistory}>
          <FaRegTrashAlt size="1.5em" />
          <h2 className="history-clear-text">Clear All Watch History</h2>
        </div>
      </div>
      <div className="videos-container">
        {
        state.history.length === 0 ? 
        <div className='empty-page-placeholder flex-centered flex-col gap-4'>
          <IconHistoryPlaceholder size="10em" className='page-placeholder icon'/>
          <h1 className='page-placeholder text'>{incognito ? 'You are browsing in Incognito mode' : 'Nothing in Watch history Yet'}</h1>
        </div> :
        <>
        <div className="history-current-day">{currentDate} {currentDay}</div>
        {state.history.map((video) => {
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

export {History}