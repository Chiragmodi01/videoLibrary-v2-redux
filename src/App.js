import './App.css';
import React, {useRef} from 'react';
import {FooterNav, Navbar, Navpills, Sidebar} from './comps/index'
import {Home, Playlist, Liked, Watchlater, History, Signup, Login} from './pages/index';
import { useMain } from './helpers/context/main-context';

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
  
  return (
    <div className={lightTheme ? "App light" : "App"} onClick={closeDropdown}>
      <Navbar toggleDropdownRef={toggleDropdownRef}/>
      <Sidebar />
      {pathname === '/' &&<Navpills />}
      <FooterNav />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/playlist" element={<Playlist />}/>
        <Route path="/liked" element={<Liked />}/>
        <Route path="/watchlater" element={<Watchlater />}/>
        <Route path="/history" element={<History />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        {/* <Route path="/settings" element={<Settings />}/> */}
      </Routes>
    </div>
  );
}

export default App;
