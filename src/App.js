import './App.css';
import React, {useEffect, useRef} from 'react';
import {FooterNav, Navbar, Navpills, Sidebar} from './comps/index'
import {Home, Playlist, Liked, Watchlater, History, Signup, Login, PageNotFound, SinglePagePlaylist, SinglePageVideo} from './pages/index';
import { useMain } from './helpers/context/main-context';
import Mockman from 'mockman-js';
import Toast from './comps/Toast/Toast';

import { Routes, Route } from "react-router-dom";
import { useLocation } from 'react-router-dom';

function App() {
  const {lightTheme, showDropdown, setShowDropdown} = useMain();
  const toggleDropdownRef = useRef(null);
  const {pathname} = useLocation();

  const closeDropdown = (e) => {
    if(showDropdown && (!toggleDropdownRef.current.contains(e.target))) {
      setShowDropdown(false);
    }
  }

    useEffect(() => {
      localStorage.clear()
    }, [])
  
  return (
    <>
    <Toast />
      <div className={lightTheme ? "App light" : "App"} onClick={closeDropdown}>
        
        <Navbar toggleDropdownRef={toggleDropdownRef}/>
        <Sidebar />
        {pathname === '/' &&<Navpills />}
        <FooterNav />

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/video/:videoId" element={<SinglePageVideo />} />
          <Route path="/playlist" element={<Playlist />}/>
          <Route path="/playlist/:playlistId" element={<SinglePagePlaylist />} />
          <Route path="/liked" element={<Liked />}/>
          <Route path="/watchlater" element={<Watchlater />}/>
          <Route path="/history" element={<History />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/mock" element={<Mockman />} />
          <Route path = '*' element={<PageNotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
