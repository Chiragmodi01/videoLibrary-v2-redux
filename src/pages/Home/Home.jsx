import React, { useEffect } from 'react'
import { useMain } from '../../helpers/context/main-context'
import {TempCard, Video} from '../../comps/index'
import './Home.css'

function Home() {
  const {loading, state} = useMain();

  console.log(state.filteredVideos);
  console.log(loading, 'loading');


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
      {state.filteredVideos.length !== 0 && state.filteredVideos.map((video) => {
        return (
          <Video video={video} channelImg={video.channelImg} key={video._id} views={video.views} title={video.title} channel={video.channel} timesAgo={video.timesAgo} timeLength={video.timeLength}/>
        )
        }) 
      }
      {!loading && state.filteredVideos.length === 0 && state.videos.map((video) => {
          return (
            <Video video={video} channelImg={video.channelImg} key={video._id} views={video.views} title={video.title} channel={video.channel} timesAgo={video.timesAgo} timeLength={video.timeLength}/>
          )
        })
      }
      </div>
    </div>
  )
}

export {Home}