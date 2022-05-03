import React from 'react'
import './TempCard.css';
               
function Video() {
  return (
    <div className='tempCard-container flex-centered'>
        <div className="tempCard-header"></div>
        <div className="tempCard-footer">
            <div className="tempCard-footer-top flex-centered">
                <div className="tempCard-image"></div>
                <div className="tempCard-title"></div>
            </div>
            <div className="tempCard-footer-bottom flex-centered"> </div>
        </div>
    </div>
  )
}

export default Video