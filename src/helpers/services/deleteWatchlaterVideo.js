import axios from 'axios';

const deleteWatchlaterVideo = async(dispatch, video) => {
    const encodedToken = localStorage.getItem("token");

    const Headers = { authorization: encodedToken}

    try {
        const res = await axios.delete(`/api/user/watchlater/${video._id}`, {headers: Headers});
        dispatch({ type: "DELETE_WATCHLATER_VIDEO", payload: res.data.watchlater})
    } catch(e) {
        console.log(e.message)
    }
}

export { deleteWatchlaterVideo };