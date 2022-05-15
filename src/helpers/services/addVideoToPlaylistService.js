import axios from 'axios';

const addVideoToPlaylistService = async(dispatch, playlistId, video) => {
    const encodedToken = localStorage.getItem("token");

    const Headers = { authorization: encodedToken}

    const videoToSend = {video : video}

    try {
        const res = await axios.post(`/api/user/playlists/${playlistId}`, videoToSend, {headers: Headers});
        dispatch({type: 'SET_VIDEOS_IN_PLAYLISTS_ARRAY', payload: res.data.playlist})
    } catch(e) {
        console.log(e.message)
    }
}

export { addVideoToPlaylistService };