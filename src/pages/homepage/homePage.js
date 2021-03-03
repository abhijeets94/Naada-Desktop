import React from 'react';
import Feed from '../../components/feedComponent/feed'
import SidebarComponent  from '../../components/sidebar/sidebar'
import '../homepage/homepage.css'
import userImage from '../../assets/DesktopIconsJPG/bruce-mars-DBGwy-1.jpg'
import { useSelector } from 'react-redux';

 

const HomePage = () => {
    const Merch = useSelector((state) => state.merch);
    console.log(Merch)
    return(
        <div className = 'homepage-container'>
            <div className = "sidebar-container">
                <SidebarComponent
                        ImageURL = {userImage}
                        UserName = "Niharika"
                        following = "2K"
                        location = "Bangalore"
                        occupation = "DJ"
                        genre = "sufi"
                />
            </div>

            {/* <div className = 'feedContainer'>
            {
                FeedData.map((oneFeed) => <Feed
                name = {oneFeed.name}
                band = {oneFeed.band}
                artist = {oneFeed.artist}
                comments= {oneFeed.comments}
                price= {oneFeed.price}/>)
                
            }

            </div> */}
        </div>
    )

}

export default HomePage;