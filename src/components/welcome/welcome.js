import React from 'react';
import './welcome.css'


const Welcome = (props) => {
    return (
       <div className = "welcome-banner">
          <p class = "welcomeName">{props.welcomeTag}</p>
          <p class = "welcomeDesc">{props.descTag}</p>
          <p class = "welcomeNaada">{props.naadaTag}</p>
       </div> 
        )
}

export default Welcome;

