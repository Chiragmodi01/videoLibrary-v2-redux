import axios from 'axios';

const historyVideoService = async(dispatch, video) => {
    const encodedToken = localStorage.getItem("token");

    const Headers = { authorization: encodedToken}

    const videoToSend = {video : video}

    try {
        const res = await axios.post(`/api/user/history/`, videoToSend, {headers: Headers});
        dispatch({ type: "HISTORY_VIDEO", payload: res.data.history})
    } catch(e) {
        console.log(e.message)
    }
}

export { historyVideoService };