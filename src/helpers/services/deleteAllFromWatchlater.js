import axios from 'axios';

const deleteAllFromWatchlater = async(dispatch) => {
    const encodedToken = localStorage.getItem("token");

    const Headers = { authorization: encodedToken}

    try {
        const res = await axios.delete(`/api/user/watchlater/all`, {headers: Headers});
        dispatch({ type: "DELETE_ALL_FROM_WATCHLATER", payload: res.data.watchlater})
    } catch(e) {
        console.log(e.message)
    }
}

export { deleteAllFromWatchlater };