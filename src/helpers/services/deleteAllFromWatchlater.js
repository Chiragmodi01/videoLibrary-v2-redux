import axios from 'axios';

const deleteAllFromWatchlater = async(dispatch) => {
    const encodedToken = localStorage.getItem("token");

    const Headers = { authorization: encodedToken}

    try {
        const res = await axios.delete(`/api/user/watchlater/all`, {headers: Headers});
        dispatch({ type: "SET_WATCHLATER_ARRAY", payload: res.data.watchlater})
    } catch(e) {
        console.log(e.message)
    }
}

export { deleteAllFromWatchlater };