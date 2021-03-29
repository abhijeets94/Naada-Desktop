import React from "react";
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import profilePic from "../../assets/DesktopIconsJPG/bruce-mars-DBGwy-1.jpg"
import "./userprofilecomponent.css";
const UserProfileComponent = () => {
  const myUser = useSelector((state) => state.user.customer);
  return (
    <div className="usrprofilecomp-container">
      <div className="upperContainer">
        <div className="imageContainerProfile">
          <img src={profilePic}></img>
        </div>
        <div className="userdescriptionContainer">
          <div className="userName">{myUser.firstName}</div>
          <div className="userDescription">
            lorem lorem ipsum ipsum lorem lorem ipsum ipsumlorem lorem ipsum
            ipsumlorem lorem ipsum ipsum lorem lorem ipsum ipsum.
          </div>
          <div className="userFollowers">
            {myUser.followers} Followers
          </div>
          <div className="userLocation">
            <p>Bangalore</p>
          </div>
          <div className="userProfes">
            <p>DJ</p>
          </div>
          <div className="userGenre">
            <p>ROCK</p>
          </div>
          <div className="editProfileBtn">
            <button className="editProfile">
              <Link to="/editprofile">Edit Profile</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="lowerContainer">
        <div className="firstPost">
          <p>ELECTRIFIED HORSE - Fusion Music and Rock</p>
          <p>Going Live on 15 Aug | 06:00PM</p>
          <p>Artist: Natasha Taylor, Monica</p>
        </div>

        <div className="secondPost">
          <p>Cover on cheap thrills</p>
          <p>Going Live on 15 Aug | 06:00PM</p>
          <p>Artist: Natasha Taylor, Monica</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfileComponent;

