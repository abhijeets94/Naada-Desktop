import React from "react";
import { Link } from "react-router-dom";
import homeIcon from "../../assets/Home icon.jpg"
import msgIcon from "../../assets/Chatbox icon.jpg"
import notifIcon from "../../assets/Notification icon.jpg"
import profilePic from "../../assets/bruce-mars-DBGwy-2.jpg"


import "./navbar.css";
const Navbar = () => {
  return (
    <div className="nav-container">
      <nav>
        <div className="navlink naada">
          <Link to="/">Naada</Link>
        </div>
        <div className="spacer"></div>
        <div className="navlink">
          <Link to="/"><img src = {homeIcon}></img></Link>
        </div>
        <div className="navlink">
          <Link to="/chat"><img src = {msgIcon}></img></Link>
        </div>
        <div className="navlink">
          <Link to="/merchandise">Merchandise</Link>
        </div>
        <div className="navlink">
          <Link to="/notification"><img src = {notifIcon}></img></Link>
        </div>
        <div className="navlink">
          <Link to="/login"><img src = {profilePic}></img></Link>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
