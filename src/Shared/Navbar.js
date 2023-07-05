import React, { useState } from "react";
import "./Navbar.css";

import { FaBox } from "react-icons/fa";
import { AiFillCaretRight, AiFillHome,AiFillCaretLeft } from "react-icons/ai";
const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const toggle = () => {
    setSidebar(!sidebar);
  };
  return (
    <div style={{width:sidebar?"15%":"4%"}} className="navbar">
      <div className="navbar__head">
        <FaBox className="navbar__logo" />
        <h1 className="navbar__title" style={{display:sidebar?"block":"none"}}>Stock</h1>
      </div>
      <div className="toggle" onClick={toggle}>
        {sidebar ? <AiFillCaretRight className="arrow-toggle"/>:<AiFillCaretLeft className="arrow-toggle"/>}
      </div>
      <div className="menu-bar">
        <ul className="menu-link">
          <li className="nav-link">
            <a href="#">
              <AiFillHome className="icon" />
              <span style={{display:sidebar?"block":"none"}}>Home</span>
            </a>
          </li>
          <li className="nav-link">
            <a href="#">
              <AiFillHome className="icon" />
              <span style={{display:sidebar?"block":"none"}}>Home</span>
            </a>
          </li>
          <li className="nav-link">
            <a href="#">
              <AiFillHome className="icon" />
              <span style={{display:sidebar?"block":"none"}}>Home</span>
            </a>
          </li>
          <li className="nav-link">
            <a href="#">
              <AiFillHome className="icon" />
              <span style={{display:sidebar?"block":"none"}}>Home</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
