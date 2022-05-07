import { createContext, useContext, useEffect, useReducer, useState } from "react";
import axios from 'axios';
import { videoReducer } from "../reducer/videoReducer";

const MainContext = createContext();

function MainProvider({ children }) {
    const [hideMenu, setHideMenu] = useState(false);
    const [loading, setLoading] = useState(false);
    const [onMobile, setOnMobile] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [lightTheme, setLightTheme] = useState(false);
    const [toastDelay, setToastDelay] = useState(2500);
    const [userSignedIn, setUserSignedIn] = useState(false);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [incognito, setIncognito] = useState(false);
    const [showPlaylistModal, setShowPlaylistModal] = useState(false);

    window.addEventListener('resize', MatchMedia);

    function MatchMedia () {
        if (window.matchMedia("(min-width: 700px) and (max-width: 1000px)").matches) {  
            setHideMenu(true);
            setOnMobile(false);
        } else if (window.matchMedia("(max-width: 700px)").matches) {  
            setHideMenu(false);
            setOnMobile(true);
        } else {
            setHideMenu(false);
            setOnMobile(false);
        }
    }

    useEffect(() => {
        MatchMedia()
    }, [])

    const fetchData = async ()=> {
        try {
            setLoading(true);
            const res = await axios.get('/api/videos')
            dispatch({ type: 'FETCH_DATA', payload: res.data.videos})
        } catch (e) {
            console.error(e);
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 1500)
        }
    }
    
    useEffect(() => {
        fetchData();
    }, []);

    
    const [state, dispatch] = useReducer(videoReducer, {
        videos: [],
        filteredVideos: [],
        history: [],
        playlists: [],
        watchlater: []
    })    

    return (
        <MainContext.Provider value={{hideMenu, setHideMenu, loading, state, dispatch, onMobile, showDropdown, setShowDropdown, lightTheme, setLightTheme, toastDelay, setToastDelay, userSignedIn, setUserSignedIn, userLoggedIn, setUserLoggedIn, incognito, setIncognito, showPlaylistModal, setShowPlaylistModal}}>
            {children}
        </MainContext.Provider>
    )
}

const useMain = () => useContext(MainContext);

export { MainProvider, useMain };