import './App.css';
import React, {useEffect, useRef} from 'react';
import {FooterNav, Navbar, Navpills, Sidebar} from './comps/index'
import {Home, Playlist, Liked, Watchlater, History, Signup, Login, PageNotFound, SinglePagePlaylist, SinglePageVideo} from './pages/index';
import { useMain } from './helpers/context/main-context';
import Toast from './comps/Toast/Toast';

import { Routes, Route } from "react-router-dom";
import { useLocation } from 'react-router-dom';

function App() {
  const {utilsState: {lightTheme, showDropdown, onMobile}, utilsDispatch} = useMain();
  const toggleDropdownRef = useRef(null);
  const {pathname} = useLocation();

  const closeDropdown = (e) => {
    if(showDropdown && (!toggleDropdownRef.current.contains(e.target))) {
      utilsDispatch({type: "SHOW_DROPDOWN", payload: false});
    }
  }

    useEffect(() => {
      localStorage.clear()
    }, [])
  
  return (
    <>
    <Toast />
      <div className={lightTheme ? `App light ${onMobile && 'onMobile'}` : `App ${onMobile && 'onMobile'}`} onClick={closeDropdown}>
        
        <Navbar toggleDropdownRef={toggleDropdownRef}/>
        <Sidebar />
        {pathname === '/' &&<Navpills />}

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
          <Route path = '*' element={<PageNotFound />} />
        </Routes>
        
      <FooterNav />
      </div>
    </>
  );
}

export default App;
