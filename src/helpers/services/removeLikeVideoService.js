import axios from 'axios';

const removeLikeVideoService = async(dispatch, video) => {
    const encodedToken = localStorage.getItem("token");

    const Headers = { authorization: encodedToken}

    try {
        const res = await axios.delete(`/api/user/likes/${video._id}`, {headers: Headers});
        dispatch({ type: "SET_LIKED_ARRAY", payload: res.data.watchllikedater})
    } catch(e) {
        console.log(e.message)
    }
}

export { removeLikeVideoService };