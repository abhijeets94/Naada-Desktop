import React from 'react'
import './bottomFeed.css'  
import MessageIcon from '../../assets/DesktopIconsSVG/DesktopIconsSVG/Icon feather-message-circle.svg'


const BottomFeed = (props) => {


    return(
        <div className = 'comment-sec'>

            <div className = 'comment'>
                {props.comments.length}<img src = {MessageIcon}></img>
            </div>
            <div className = 'attending'>
                <button>Attending</button>
            </div>
            <div className = 'interested'>
                <button>Interested</button>
            </div>

          
            <div className = 'cost'>
                <p>{props.price}</p>
            </div>
            <div className = 'buyTickets'>
                <button>Buy Tickets</button>
            </div>

        </div>

    )
}

export default BottomFeed