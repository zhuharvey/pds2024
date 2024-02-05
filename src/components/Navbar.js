import React from 'react';
import Logo from "../assets/pdsLogo.png";
import { HashLink as Link } from 'react-router-hash-link'; // This will need to be installed
import "../styles/Navbar.css"; // Make sure you have the correct path to your CSS file

function Navbar() {
  return (
    <nav className="navbar">
        <div className="leftSide">
            <img src={Logo} alt="PDS Logo" />
        </div>
        <div className="rightSide">
            <Link smooth to="#about">About</Link>
            <Link smooth to="#partners">Partners</Link>
            <Link smooth to="#faq">FAQ</Link>
            <Link smooth to="#contact">Contact Us</Link>
        </div>
    </nav>
  )
}

export default Navbar;
