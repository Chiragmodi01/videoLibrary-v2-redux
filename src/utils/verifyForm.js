import { useMain } from "../helpers/context/main-context";
import { toast } from 'react-toastify';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function verifyForm() {
    const {setToastDelay, userSignedIn, setUserSignedIn, setUserLoggedIn} = useMain();
    let navigate = useNavigate();
    const getLocalToken = localStorage.getItem("token");

    const defaultUserData = {
        "email": "chrisbrown@gmail.com",
        "password": "Chris@123"
      }

    const [userData, setUserData] = useState({
        "email": "",
        "password": ""
    })
    const [rePassword, setRePassword] = useState('');


    const signupSubmitHandler = async() => {

        if(!getLocalToken) {
            try {
                const res = await axios.post("/api/auth/signup", userData);
                localStorage.setItem("token", res.data.encodedToken);
                navigate("/login", {replace: true})
                setUserSignedIn(true);
                toast.success('User successfully Signed In')
              } catch(e) {
                console.log(e.message);
                toast.error('Error occured! try submitting correct details again...')
              }
        }
    }

      const loginSubmitHandler = async() => {
            try {
                const res = await axios.post("/api/auth/login", userData);
                navigate("/", {replace: true})
                setUserLoggedIn(true);
                toast.success('User successfully Logged In')
              } catch(e) {
                console.log(e.message);
                toast.error('Error occured! try submitting again after some time...')
              } 
    }
    
      const guestLogin = async() => {
        setUserData({...userData, email: defaultUserData.email, password: defaultUserData.password});
        setRePassword(defaultUserData.password);
        try {
            const res = await axios.post("/api/auth/login", defaultUserData);
            navigate("/", {replace: true})
            setUserLoggedIn(true);
            localStorage.setItem("token", res.data.encodedToken);
            toast.success('Guest User successfully Logged In')
          } catch(e) {
            console.log(e.message);
            toast.error('Error occured! try submitting correct details again and make sure you have Signed In...')
          } 
      }

      const logoutSubmitHandler = async() => {
        localStorage.clear();
        setUserLoggedIn(false);
        toast.success('User successfully Logged Out')
    }


    const submitUserData = (e) => {
        e.preventDefault();
        const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+-]).{6,20}$/;
        const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

        if (!userData.email.match(emailRegex)) {
            toast.error('Invalid Email!')
            setToastDelay(2500);
            setUserData({...userData, email: ""});
        }
        else if(!userData.password.match(passRegex)) {
            toast.error('Password should be 6-20 characters long and contain at least one numeric digit, one special characters, one uppercase and one lowercase letter ');
            setToastDelay(5000);
            setUserData({...userData, password: ""});
            setRePassword('');
        }
        else if(userData.password !== rePassword) {
            toast.error('Password is not matching');
            setToastDelay(2500);
        } else {
            {userSignedIn ? loginSubmitHandler() : signupSubmitHandler()}
            setUserData({...userData, email: "", password: ""});
            setRePassword('');
        }
    }

    return { userData, setUserData, rePassword, setRePassword, submitUserData, guestLogin, logoutSubmitHandler };

}

export default verifyForm