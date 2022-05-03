import React from 'react'
import Video from '../../comps/Video/Video';
import { useMain } from '../../helpers/context/main-context'
import TempCard from '../../comps/TempCard/TempCard'
import './Home.css'

function Home() {
  const {loading, state} = useMain();

  return (
    <div className='Home'>
      <div className='videos-container'>
      { loading &&
        [...Array(20)].map((x, idx) => {
          return (
            <TempCard key={idx}/>
          )
        })
      }
      {!loading && state.videos.map((video) => {
        return (
          <Video key={video._id} views={video.views} thumbnail={video.thumbnail} title={video.title} channel={video.channel} timesAgo={video.timesAgo} timeLength={video.timeLength}/>
        )
      })}
      </div>
    </div>
  )
}

export default Home