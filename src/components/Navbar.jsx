import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/mmlogo2.png";

function Navbar() {
  const [clicked, setClicked] = useState(true);
  const [navbar, setNavbar] = useState(true);

  const handleClick = () => setClicked(!clicked)

  const handleNavbar = ()=>{
    if(window.scrollY>0){
      setNavbar(false)
    }else{
      setNavbar(true)
    }
  }

  window.addEventListener('scroll',handleNavbar);

  return (
    <nav className={navbar?"navbar":'navbar sticky'}>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logoimage"/>
        </Link>
      </div>
      <div className={clicked ? "menu active" : "menu"}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/photoshootservices">Photo-shoot Services</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/getquote">Getquote</NavLink>
          </li>
        </ul>
      </div>
      <div className="mobile" onClick={() => handleClick()}>
        <i className={clicked ? "fas fa-bars" : "fas fa-times"}></i>
      </div>
    </nav>
  );
}

export default Navbar;
