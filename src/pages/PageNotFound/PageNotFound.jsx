import React from 'react'
import { useNavigate } from 'react-router-dom';
import './PageNotFound.css';
import {pagenotfound} from '../../assets/gif/index'

function PageNotFound() {
    let navigate = useNavigate();

  return (
    <div className='PageNotFound flex-centered gap-6 flex-col'>
        <div className="flex-centered gap-4 flex-col">
            <img src={pagenotfound} alt="page-not-found-gif" />
            <h3 className="PageNotFound-text">This page isn't available. Sorry about that.</h3>
        </div>
        <button className='return-home-btn cursor-pointer' onClick={() => navigate("/")}>Return to Homepage</button>
    </div>
  )
}

export {PageNotFound}