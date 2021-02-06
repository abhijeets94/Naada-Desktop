import React from 'react';
import Feed from '../../components/feedComponent/feed'
import SidebarComponent  from '../../components/sidebar/sidebar'
import '../homepage/homepage.css'
import userImage from '../../assets/DesktopIconsJPG/bruce-mars-DBGwy-1.jpg'

const FeedData = [{
    name: 'Niharika',
    band: 'Beetles',
    artist: 'Arijit Singh',
    comments : ['lots of fun', 'amazing', 'wow'],
    price: 2000   
},
{
    name: 'Bharath',
    band: 'RamSetu',
    artist: 'Anuv Jain',
    comments : ['lots of fun', 'wow'],
    price: 1500   
},
{
    name: 'Abhijeet',
    band: 'Queens',
    artist: 'Dhinchak Pooja',
    comments : ['lots of lots', 'amazing', 'wow'],
    price: 20000   
}

]

const HomePage = ()=>{
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

            <div className = 'feedContainer'>
            {
                FeedData.map((oneFeed) => <Feed
                name = {oneFeed.name}
                band = {oneFeed.band}
                artist = {oneFeed.artist}
                comments= {oneFeed.comments}
                price= {oneFeed.price}/>)
                
            }

            </div>
        </div>
    )

}

export default HomePage;