import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="nav-container">
      <nav>
        <div className="navlink">
          <Link to="/">Naada</Link>
        </div>
        <div className="spacer"></div>
        <div className="navlink">
          <Link to="/chat">chat</Link>
        </div>
        <div className="navlink">
          <Link to="/artist">Artist</Link>
        </div>
        <div className="navlink">
          <Link to="/login">Login</Link>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
