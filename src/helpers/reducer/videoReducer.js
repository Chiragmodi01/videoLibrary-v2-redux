const videoReducer = (state, action) => {

    switch (action.type) {
        case 'FETCH_DATA':
            return { ...state, videos: action.payload }
    }
}

export { videoReducer };