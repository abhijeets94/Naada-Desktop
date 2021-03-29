import React from "react";
import "../sidebar/sidebar.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const SidebarComponent = (props) => {
  const myUser = useSelector((state) => state.user.customer);

  return (
    <div className="sideBar">
      <div className="sideBar-image-container">
        <img src={props.ImageURL}></img>
      </div>
      <div className="sideBar-username">
        <p>{myUser.firstName}</p>
      </div>
      <div className="sideBar-following">
        <p>{myUser.followers}</p>
      </div>
      {/* <div className = 'sideBar-location'>
                <p>{props.location}</p>
            </div>
            <div className = 'sideBar-occupation'>
                <p>{props.occupation}</p>
            </div>
            <div className = 'sideBar-genre'>
                <p>{props.genre}</p>
            </div> */}
      <div className="sidebar-mydashboard">
        <Link to="/userprofile">
          <p>DashBoard</p>
        </Link>
      </div>
      <div className="sidebar-topics">
        <Link to="/merchandise">Merch</Link>
      </div>
      <div className="sidebar-topics">
        <Link to="/orders">Orders</Link>
      </div>
      <div className="sidebar-topics">
        <Link to="/events">Events</Link>
      </div>
    </div>
  );
};

export default SidebarComponent;
