const videoReducer = (state, action) => {

    switch (action.type) {
        case 'FETCH_DATA':
            return { ...state, videos: action.payload }
        case 'FETCH_CATEGORIES':
            return { ...state, categories: action.payload }
        case 'SET_HISTORY_ARRAY':
            return { ...state, history: action.payload }
        case 'SET_WATCHLATER_ARRAY':
            return { ...state, watchlater: action.payload }
        case 'SET_PLAYLISTS_ARRAY':
            return { ...state, playlists: action.payload }
        case 'SET_LIKED_ARRAY':
            return { ...state, liked: action.payload }
        case 'SET_VIDEOS_IN_PLAYLISTS_ARRAY':
            return {
                ...state, 
                playlists: state.playlists.map((playlist) => {
                    return playlist._id === action.payload._id ? { ...playlist, videos: [...action.payload.videos]} : playlist
                })
            }
        case 'FILTER_CATEGORY':
            return {
                ...state,
                filteredVideos: state.videos.filter((video) => video.category === action.payload)
            }
        case 'EMPTY_FILTERED_ARRAY':
            return { ...state, filteredVideos: []};
        case 'FILTER_BY_SEARCH': 
            return {
                ...state,
                filteredVideos: state.videos.filter((video) => 
                video.title.toLowerCase().includes(action.payload.toLowerCase()) ||
                video.title.toLowerCase().includes(action.payload.toLowerCase())
            )}
        case 'SEARCH_SUGGESTIONS' : {
            return { 
                ...state,
                searchSuggestions: state.videos.filter((video) => 
                video.title.toLowerCase().includes(action.payload.toLowerCase()) ||
                video.title.toLowerCase().includes(action.payload.toLowerCase())
            )}
        }
        case 'EMPTY_SEARCH_SUGGESTIONS' : {
            return { ...state, searchSuggestions: []}
        }

        }
}

export { videoReducer };