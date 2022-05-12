import axios from 'axios';

const likeVideoService = async(dispatch, video) => {
    const encodedToken = localStorage.getItem("token");

    const Headers = { authorization: encodedToken}

    const videoToSend = {video : video}

    try {
        const res = await axios.post(`/api/user/likes`, videoToSend, {headers: Headers});
        dispatch({ type: "SET_LIKED_ARRAY", payload: res.data.likes})
    } catch(e) {
        console.log(e.message)
    }
}

export { likeVideoService };