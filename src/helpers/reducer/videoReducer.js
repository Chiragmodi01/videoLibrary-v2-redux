const videoReducer = (state, action) => {

    switch (action.type) {
        case 'FETCH_DATA':
            return { ...state, videos: action.payload }
        case 'SET_HISTORY_ARRAY':
            return { ...state, history: action.payload }
        case 'SET_WATCHLATER_ARRAY':
            return { ...state, watchlater: action.payload }
        case 'SET_PLAYLISTS_ARRAY':
            return { ...state, playlists: action.payload }
        case 'SET_VIDEOS_IN_PLAYLISTS_ARRAY':
            return {
                ...state, 
                playlists: state.playlists.map((playlist) => {
                    return playlist._id === action.payload._id ? { ...playlist, videos: [...action.payload.videos]} : playlist
                })
            }
    }
}

export { videoReducer };