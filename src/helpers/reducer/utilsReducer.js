const utilsReducer = (utilsState, action) => {

    switch (action.type) {
        case 'HIDE_MENU':
            return { ...utilsState, hideMenu: action.payload }
        case 'MOBILE_VIEW':
            return { ...utilsState, onMobile: action.payload}
        case 'LOADING':
            return { ...utilsState, loading: action.payload}
        case 'SEARCH_QUERY':
            return { ...utilsState, searchQuery: action.payload}
        case "SHOW_DROPDOWN":
            return { ...utilsState, showDropdown: action.payload}
        case "LIGHT_THEME":
            return { ...utilsState, lightTheme: action.payload}
        case "INCOGNITO":
            return { ...utilsState, incognito: action.payload}
        case "TOAST_DELAY":
            return { ...utilsState, toastDelay: action.payload}
        case "SHOW_PLAYLIST_MODAL":
            return { ...utilsState, playlistModal: action.payload}
        case "ADD_PLAYLIST_INPUT":
            return { ...utilsState, addPlaylistInput: action.payload}
        case "SHOW_PASSWORD":
            return { ...utilsState, showPassword: action.payload}
        case "USER_SIGNED_IN":
            return { ...utilsState, userSignedIn: action.payload}
        case "USER_LOGGED_IN":
            return { ...utilsState, userLoggedIn: action.payload}
    }
}

export { utilsReducer };