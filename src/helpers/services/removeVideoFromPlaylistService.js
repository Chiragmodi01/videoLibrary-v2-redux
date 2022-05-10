import axios from 'axios';

const removeVideoFromPlaylistService = async(dispatch, playlistId, videoId) => {
    const encodedToken = localStorage.getItem("token");

    const Headers = { authorization: encodedToken}

    try {
        const res = await axios.delete(`/api/user/playlists/${playlistId}/${videoId}`, {headers: Headers});
        dispatch({ type: "SET_VIDEOS_IN_PLAYLISTS_ARRAY", payload: res.data.playlist})
        console.log(res.data.playlist)
    } catch(e) {
        console.log(e.message)
    }
}

export { removeVideoFromPlaylistService };