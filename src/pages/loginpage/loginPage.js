import reactDom from "react-dom";
import React from 'react';
import './loginPage.css';
import Welcome from '../../components/welcome/welcome.js'

const LoginPage = () => {
    return(
        <div class = "welcomehome">

            <div id = "left-side">
                <Welcome welcomeTag = "Welcome" descTag = "to live streaming app" naadaTag = "Naada"/>          
    
            </div>

            <div id = "right-side">

            </div>
        </div>
            )
}

export default LoginPage
