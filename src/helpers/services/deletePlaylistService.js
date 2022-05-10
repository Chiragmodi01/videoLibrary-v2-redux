import axios from 'axios';

const deletePlaylistService = async(dispatch, playlistId) => {
    const encodedToken = localStorage.getItem("token");

    const Headers = { authorization: encodedToken}

    try {
        const res = await axios.delete(`/api/user/playlists/${playlistId}`, {headers: Headers});
        dispatch({ type: "SET_PLAYLISTS_ARRAY", payload: res.data.playlists})
    } catch(e) {
        console.log(e.message)
    }
}

export { deletePlaylistService };