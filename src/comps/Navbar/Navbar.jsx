import React from 'react'
import './Navbar.css'
import {useMain} from '../../helpers/context/main-context';
import {IoIosMenu, IoSearchOutline} from '../../utils/getIcons';

function Navbar() {
  const { setHideMenu, onMobile } = useMain();

  return (
    <div className='Navbar'>
      <div className="nav-left flex-centered">
        <IoIosMenu className={onMobile ? "no-display" : "ham-icon"} size='2em' onClick={(() => setHideMenu(prev => !prev))}/>
        <div className="brand">YouTube</div>
      </div>
      <div className="nav-mid flex-centered">
        <div className="searchbar flex-centered">
          <input type="text" placeholder='Search' className='search-input' />
          <span className="search-icon-wrapper flex-centered" title="Search">
            <IoSearchOutline size='1.3em'/>
          </span>
        </div>
      </div>
      <div className="nav-right flex-centered">
        <div className="image-wrapper">
          <img className='user-img' src="https://i.pravatar.cc/32?img=3" alt="user-image" title="Profile"/>
        </div>
      </div>
    </div>
  )
}

export default Navbar