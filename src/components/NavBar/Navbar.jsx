import React, { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [activeHam, setActiveHam] = useState(false);
  const menuItems = (
    <>
      <a href="#AboutMe">About Me</a>
      <a href="#MyProjects">Projects</a>
      <a href="#Contact">Contact</a>
    </>
  );
  return (
    <div className="navbar-container">
      <nav>
        <div className="nav-container">
          <div className="menu">{menuItems}</div>
          <button
            className={activeHam ? "hamburger active-hamburger" : "hamburger"}
            onClick={() => setActiveHam(!activeHam)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
      {activeHam && <div className="nav-dropdown">{menuItems}</div>}
    </div>
  );
};

export default NavBar;
