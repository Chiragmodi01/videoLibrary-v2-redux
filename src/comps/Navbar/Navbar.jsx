import React, { useState }  from 'react'
import './Navbar.css'
import {useMain} from '../../helpers/context/main-context';
import {MdOutlineFlipCameraIos, IoIosMenu, IoSearchOutline, CgProfile, BiDotsVerticalRounded, BsMoon, BsSun, IoIosArrowForward, AiOutlineLogout, MdFaceRetouchingOff, MdFace, IoMdClose} from '../../utils/getIcons';
import {StyledButton, StyledDropdown} from '../../styledComps/index';
import { Link } from "react-router-dom";
import {VoiceSearch} from '../../comps'
import verifyForm from '../../utils/verifyForm';
import {toast} from 'react-toastify';
import {incognitoFace} from '../../assets/svgs';
import { useOnClickOutside } from '../../utils/onClickOutside';
import { useLocation, useNavigate } from 'react-router-dom';

function Navbar({toggleDropdownRef}) {
  const { state, dispatch,
    utilsState:{searchQuery, setHideMenu, onMobile, showDropdown, lightTheme, userSignedIn, userLoggedIn, incognito},
    utilsDispatch} = useMain();

  const {logoutSubmitHandler} = verifyForm();
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchSuggestionsRef = useOnClickOutside(() => setShowSuggestions(false), showSuggestions)

  let {pathname} = useLocation();

  let navigate = useNavigate();

  const [changeAvatar, setChangeAvatar] = useState(false);
  
  const setIncognitoMode = () => {
    if(incognito) {
      utilsDispatch({type:"TOAST_DELAY", payload: 2500});
      toast.info("Incognito mode turned off! Your history will be tracked!");
      utilsDispatch({type:"INCOGNITO", payload: !incognito});
    } else {
      utilsDispatch({type:"TOAST_DELAY", payload: 3700});
      toast.info("You are browsing in Incognito mode now! Your history won't be tracked!");
      utilsDispatch({type:"INCOGNITO", payload: !incognito});
    }
  }

  const IconIncognito = incognito ? MdFace : MdFaceRetouchingOff

  const searchHandler = (e) => {
    e.preventDefault();
    setShowSuggestions(false);
    if(searchQuery === '' || searchQuery.length === 0) {
      dispatch({type: 'EMPTY_FILTERED_ARRAY', payload: searchQuery});
      toast.warning('Searchbox is empty!');
      utilsDispatch({type:"TOAST_DELAY", payload: 1000});
    } else {
      dispatch({type: 'FILTER_BY_SEARCH', payload: searchQuery});
      pathname !== "/" && navigate("/");
    }
  }

  const searchOnChangeHandler = (e) => {
    utilsDispatch({type:"SEARCH_QUERY", payload: e.target.value});
    if(searchQuery === '') {
      dispatch({type: 'EMPTY_SEARCH_SUGGESTIONS', payload: searchQuery});
      setShowSuggestions(false);
    } else {
      setShowSuggestions(true);
      dispatch({type: 'SEARCH_SUGGESTIONS', payload: searchQuery});
    }
  }

  const searchSuggestionClickHandler = (suggestion) => {
    utilsDispatch({type:"SEARCH_QUERY", payload: suggestion.title});
    setShowSuggestions(false);
    dispatch({type: 'EMPTY_FILTERED_ARRAY', payload: searchQuery});
  }

  const clearForm = () => {
    utilsDispatch({type:"SEARCH_QUERY", payload: ''});
    dispatch({type: 'EMPTY_FILTERED_ARRAY', payload: searchQuery});
  }

  return (
    <div className='Navbar'>
      <div className="nav-left flex-centered">
        <IoIosMenu className={onMobile ? "no-display" : "ham-icon"} size='1.8em' onClick={(() => setHideMenu(prev => !prev))}/>
        <Link to="/" className="brand flex-centered gap-1">
          <span className="brand-logo">
            <img src="/assets/brand-logo.png" alt="brand-logo" className="brand-logo-img" />
          </span>
          <span className="brand-name">Playway</span>
        </Link>
      </div>
      {!onMobile && <div className="nav-mid flex-centered">
        <form className="searchbar flex-centered" onSubmit={(e) => searchHandler(e)} ref={searchSuggestionsRef}>
          <input type="text" placeholder='Search' className='search-input' value={searchQuery} onChange={(e) => searchOnChangeHandler(e)}/>
          <button type="submit" className="search-icon-wrapper flex-centered" title="Search">
            <IoSearchOutline className="icon-search" size='1.5em' title="Search"/>
            {searchQuery && <IoMdClose type="reset" onClick={clearForm} className='icon-close-search' size="1em"/>}
          </button>
          <VoiceSearch />
          {showSuggestions && <div className="search-suggestion-wrapper flex-centered flex-col">
            <ul>
              {
                 state.searchSuggestions.map((suggestion, idx) => {
                  return (
                      <li key={idx} className='flex-centered gap-2' onClick={() => searchSuggestionClickHandler(suggestion)}>
                        <IoSearchOutline size="1.2em"/>
                        <p>{suggestion.title}</p>
                      </li>
                    )
                })
              }
            </ul>
          </div>}
        </form>
      </div>}
      <div className="nav-right flex-centered">
          <BiDotsVerticalRounded className="icon-dots cursor-pointer" size="1.5em" title="Settings" onClick={() => utilsDispatch({type:"SHOW_DROPDOWN", payload: !showDropdown})} />
          <StyledDropdown ref={toggleDropdownRef} className={showDropdown ? 'flex settings-dropdown' : 'no-display'}>
            <ul className="dropdown-menu">
              <li className="menu-item flex-centered cursor-pointer" onClick={() => utilsDispatch({type:"LIGHT_THEME", payload: lightTheme})}>
                <span className="menu-item-icon">
                 {!lightTheme ? <BsSun size="1.3em" /> : <BsMoon size="1.3em" />}
                </span>
                <span className="menu-item-content flex-centered justify-space-between">
                  <p className="item-title">Appearance: {!lightTheme ? 'Light' : 'Dark'} theme</p>
                  <IoIosArrowForward size="1.3em" />
                </span>
              </li>
              {userLoggedIn && <li className="menu-item cursor-pointer flex-centered justify-start" onClick={setIncognitoMode}>
                <span className="menu-item-icon">
                  <IconIncognito size="1.4em" />
                </span>
                <span className="menu-item-content flex-centered justify-space-between">
                <p className="item-title">{incognito ? 'Turn off Incognito' : 'Turn on Incognito'}</p>
                <IoIosArrowForward size="1.3em" />
                </span>
              </li>}
              {userLoggedIn && <li className="menu-item cursor-pointer flex-centered justify-start" onClick={logoutSubmitHandler}>
                <AiOutlineLogout size="1.4em" />
                <p className="item-title">Logout</p>
              </li>}
            </ul>
          </StyledDropdown>
        <div className="image-wrapper">
          {
            userLoggedIn ? 
            <span className='image-circle-wrapper'>
             <img onClick={() => setChangeAvatar(prev => !prev)} className='user-img cursor-pointer' src={incognito ? incognitoFace : `https://i.pravatar.cc/42?img=${changeAvatar ? 5 : 13}`} alt="user-image" title="Profile"/>
             <MdOutlineFlipCameraIos onClick={() => setChangeAvatar(prev => !prev)} size="1.6em" className='icon-switch-img'/>
             </span> :
             <Link to={userSignedIn ? "login" : "signup"}>
              <StyledButton className="cursor-pointer">
                <CgProfile size='1.6em' />
                <h3>{userSignedIn ? "Log In" : "Sign In"}</h3>
              </StyledButton>
            </Link>
          }
        </div>
      </div>
      {
        onMobile && <div className="nav-mid onMobile flex-centered">
        <form className="searchbar flex-centered" onSubmit={(e) => searchHandler(e)} ref={searchSuggestionsRef}>
          <input type="text" placeholder='Search' className='search-input onMobile' value={searchQuery} onChange={(e) => searchOnChangeHandler(e)}/>
          <button type="submit" className="search-icon-wrapper flex-centered" title="Search">
            <IoSearchOutline className="icon-search" size='1.5em' title="Search"/>
          </button>
          {showSuggestions && <div className="search-suggestion-wrapper flex-centered flex-col">
            <ul>
              {
                 state.searchSuggestions.map((suggestion, idx) => {
                  return (
                      <li key={idx} className='flex-centered gap-2' onClick={() => searchSuggestionClickHandler(suggestion)}>
                        <IoSearchOutline size="1.2em"/>
                        <p>{suggestion.title}</p>
                      </li>
                    )
                })
              }
            </ul>
          </div>}
        </form>
      </div>
      }
    </div>
  )
}

export {Navbar}