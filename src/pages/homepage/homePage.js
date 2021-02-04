import React from 'react';
import Feed from '../../components/feedComponent/feed'

const FeedData = [{
    name: 'Niharika',
    band: 'Beetles',
    artist: 'Arijit Singh'
},
{
    name: 'Bharath',
    band: 'RamSetu',
    artist: 'Anuv Jain'
},
{
    name: 'Abhijeet',
    band: 'Queens',
    artist: 'Dhinchak Pooja'
}

]

const HomePage = ()=>{
    return(
        <div className = 'homepage-container'>
            <h1>HOMEPAGE</h1>

            <div className = 'feedContainer'>
            {
                FeedData.map((oneFeed) => <Feed
                name = {oneFeed.name}
                band = {oneFeed.band}
                artist = {oneFeed.artist}/>)
            }
            </div>
        </div>
    )

}

export default HomePage;