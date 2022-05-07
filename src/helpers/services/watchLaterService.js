import axios from 'axios';

const watchLaterService = async(dispatch, video) => {
    const encodedToken = localStorage.getItem("token");

    const Headers = { authorization: encodedToken}

    const videoToSend = {video : video}

    try {
        const res = await axios.post(`/api/user/watchlater`, videoToSend, {headers: Headers});
        dispatch({ type: "WATCHLATER_VIDEO", payload: res.data.watchlater})
    } catch(e) {
        console.log(e.message)
    }
}

export { watchLaterService };