import React from 'react'
import './feed.css';
import bandPic from '../../assets/DesktopIconsJPG/alex-zamora-FU-1.jpg';



const Feed = (props) => {
    return (
        <div className = 'feed-container'>
            <div className = 'profile-container'>
                <img></img>
                <h3>{props.name} </h3>
            </div>
            <div className = 'feed-info'>
                <p className = 'bandName'>
                    {props.band}                        
                </p>
                <p className= 'livetime'>
                    going live on 15
                </p>
                <p className = 'artistName'>
                    {props.artist}
                </p>
            </div>
            <div className = 'feedImage'>
                <h3> <img 
                        height = '400px'
                        width = '800px'
                        src = {bandPic} alt= 'not available'>
                    </img> 
                </h3>
            </div>
            <p>COMMENT COMPONENT TBM</p>
        </div>)
}

export default Feed