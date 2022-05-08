const videoReducer = (state, action) => {

    switch (action.type) {
        case 'FETCH_DATA':
            return { ...state, videos: action.payload }
        case 'SET_HISTORY_ARRAY':
            return { ...state, history: action.payload }
        case 'SET_WATCHLATER_ARRAY':
            return { ...state, watchlater: action.payload }
    }
}

export { videoReducer };