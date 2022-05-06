const videoReducer = (state, action) => {

    switch (action.type) {
        case 'FETCH_DATA':
            return { ...state, videos: action.payload }
        case 'HISTORY_VIDEO':
            return { ...state, history: action.payload }
        case'DELETE_ALL_FROM_HISTORY':
            return { ...state, history: action.payload }
    }
}

export { videoReducer };