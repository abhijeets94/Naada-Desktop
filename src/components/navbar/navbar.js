import React,{useState} from "react";
import { Link } from "react-router-dom";
import homeIcon from "../../assets/DesktopIconsSVG/DesktopIconsSVG/Icon material-home.svg"
import msgIcon from "../../assets/DesktopIconsSVG/DesktopIconsSVG/Icon ionic-ios-chatboxes.svg"
import notifIcon from "../../assets/DesktopIconsSVG/DesktopIconsSVG/Icon ionic-ios-notifications.svg"
import giftIcon from "../../assets/DesktopIconsSVG/DesktopIconsSVG/Icon ionic-ios-gift.svg"
import profilePic from "../../assets/DesktopIconsSVG/DesktopIconsSVG/Icon material-people.svg"
import {DropDown} from '../../StyledComponents/Styles'

import "./navbar.css";
const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);

  return (
    <div className="nav-container">
      <nav>
        <div className="navlink naada">
          <Link to="/">Naada</Link>
        </div>
        <div className="spacer"></div>
        <div className="navlink">
          <Link to="/">
            <img src={homeIcon}></img>
          </Link>
        </div>
        <div className="navlink">
          <Link to="/chat">
            <img src={msgIcon}></img>
          </Link>
        </div>
        <div className="navlink">
          <Link to="/merchandise">
            <img src={giftIcon}></img>
          </Link>
        </div>
        <div className="navlink">
          <Link to="/notification">
            <img src={notifIcon}></img>
          </Link>
        </div>
        <div className="navlink">
          <Link onMouseEnter={() => setDropDown(!dropDown)} to="/userprofile">
            <img src={profilePic}></img>
          </Link>
        </div>
      </nav>
      {dropDown ? (
        <DropDown onMouseLeave={() => setDropDown(!dropDown)}>
          <p>
            <Link to="/editprofile">Edit Profile</Link>
          </p>
          <p>Booking History</p>
          <p>Add Bank </p>
          <p>Go Live!! </p>
          <p>Change Password</p>
          <p>Help/Support</p>
          <p> 
            <Link to = "/login">Logout</Link>
            </p>
        </DropDown>
      ) : null}
    </div>
  );
};
export default Navbar;
