import { React, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import imgUrl from "../images/mmlogo2.png";

function Navbar() {
  const [wrapopen, setWrapopen] = useState(false);
  return (
    <nav>
        <div className="mmlogo">
          <Link to="/">
            <img src={imgUrl} alt="mmlogo" />
          </Link>
        </div>
        <div className="header">
          <div className="headerwrap" onClick={() => setWrapopen(!wrapopen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={wrapopen ? "headerlist" : ""}>
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
              <NavLink to="/photoshootservices">photo-shoot services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/getquote">GetQuote</NavLink>
            </li>
          </ul>
        </div>
    </nav>
  );
}

export default Navbar;

//* <Link><img src="../public/mmlogo2.png" alt="" /></Link> */
// <ul>
//     <li>
//         <NavLink>Home</NavLink>
//         <NavLink>About</NavLink>
//         <NavLink>Services</NavLink>
//         <NavLink>photo-shoot services</NavLink>
//         <NavLink>Contact</NavLink>
//         <NavLink>Getuote</NavLink>
//     </li>
// </ul>
