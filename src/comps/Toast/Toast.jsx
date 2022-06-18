import React from 'react'
import { ToastContainer, Slide, Zoom, Flip, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useMain} from '../../helpers/context/main-context';

function Toast() {
    const {utilsState: {lightTheme, toastDelay}} = useMain();

  return (
     <ToastContainer
        position="bottom-right"
        autoClose={toastDelay}
        hideProgressBar={false}
        transition={Bounce}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        limit={2}
        theme='theme'
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastClassName={lightTheme ? "light-toast" : "dark-toast"}
    />
  )
}

export default Toast