import axios from 'axios';

const createNewPlaylistService = async(dispatch, addPlaylistInput) => {
    const encodedToken = localStorage.getItem("token");

    const Headers = { authorization: encodedToken}

    const dataToSend = {playlist : {title : addPlaylistInput, description: "deafult playlist description"}};

    try {
        const res = await axios.post(`/api/user/playlists`, dataToSend, {headers: Headers});
        dispatch({ type: "SET_PLAYLISTS_ARRAY", payload: res.data.playlists})
    } catch(e) {
        console.log(e.message)
    }
}

export { createNewPlaylistService };