import React from 'react';
import '../sidebar/sidebar.css';

const SidebarComponent = (props) => {
    return(
        <div className = 'sideBar'>
            
            <div className = 'sideBar-image-container'>
                <img src = {props.ImageURL}></img>
            </div>
            <div className = 'sideBar-username'> 
                <p>{props.UserName}</p>
            </div>
            <div className = 'sideBar-following'>
                <p>{props.following}</p>
            </div>
            <div className = 'sideBar-location'>
                <p>{props.location}</p>
            </div>
            <div className = 'sideBar-occupation'>
                <p>{props.occupation}</p>
            </div>
            <div className = 'sideBar-genre'>
                <p>{props.genre}</p>
            </div>
        </div>);
}

export default SidebarComponent