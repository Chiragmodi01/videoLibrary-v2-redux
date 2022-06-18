import { createContext, useContext, useEffect, useReducer, useState } from "react";
import axios from 'axios';
import { videoReducer } from "../reducer/videoReducer";
import { utilsReducer } from "../reducer/utilsReducer";

const MainContext = createContext();

function MainProvider({ children }) {

    window.addEventListener('resize', MatchMedia);

    function MatchMedia () {
        if (window.matchMedia("(min-width: 700px) and (max-width: 1000px)").matches) {  
            utilsDispatch({type: 'HIDE_MENU', payload: true});
            utilsDispatch({type: 'MOBILE_VIEW', payload: false});
        } else if (window.matchMedia("(max-width: 700px)").matches) {  
            utilsDispatch({type: 'HIDE_MENU', payload: false});
            utilsDispatch({type: 'MOBILE_VIEW', payload: true});
        } else {
            utilsDispatch({type: 'HIDE_MENU', payload: false});
            utilsDispatch({type: 'MOBILE_VIEW', payload: false});
        }
    }

    useEffect(() => {
        MatchMedia()
    }, [])

    const fetchData = async ()=> {
        try {
            dispatch({ type: 'LOADING', payload: true})
            const res = await axios.get('/api/videos')
            dispatch({ type: 'FETCH_DATA', payload: res.data.videos})
        } catch (e) {
            console.error(e);
        } finally {
            setTimeout(() => {
                utilsDispatch({type: 'LOADING', payload: false});
            }, 1500)
        }
    }

    const fetchCategories = async ()=> {
        try {
            utilsDispatch({type: 'LOADING', payload: true});
            const res = await axios.get('/api/categories')
            dispatch({ type: 'FETCH_CATEGORIES', payload: res.data.categories})
        } catch (e) {
            console.error(e);
        } finally {
            setTimeout(() => {
                utilsDispatch({type: 'LOADING', payload: false});
            }, 1500)
        }
    }
    
    useEffect(() => {
        fetchData();
        fetchCategories();
    }, []);

    const [utilsState, utilsDispatch] = useReducer(utilsReducer, {
        hideMenu: false,
        loading: false,
        onMobile: false,
        showDropdown: false,
        lightTheme: false,
        toastDelay: 2500,
        userSignedIn: false,
        userLoggedIn: false,
        incognito: false,
        showPlaylistModal: false,
        showPassword: false,
        addPlaylistInput :'',
        searchQuery :'',
    })    

    
    const [state, dispatch] = useReducer(videoReducer, {
        videos: [],
        filteredVideos: [],
        history: [],
        playlists: [],
        watchlater: [],
        liked: [],
        categories: [],
        searchSuggestions: []
    })    

    return (
        <MainContext.Provider value={{state, dispatch, utilsState, utilsDispatch}}>
            {children}
        </MainContext.Provider>
    )
}

const useMain = () => useContext(MainContext);

export { MainProvider, useMain };