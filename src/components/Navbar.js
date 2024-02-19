import React, { useState } from "react";
import Logo from "../assets/pds_logo.svg";
import Menu from "../assets/menu.svg";
import Close from "../assets/close.svg";
import { HashLink as Link } from "react-router-hash-link"; // This will need to be installed
import "../styles/Navbar.css"; // Make sure you have the correct path to your CSS file

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <div className="leftSide">
        <img src={Logo} alt="PDS Logo" />
      </div>
      <div className="menu">
        <img src={Menu} onClick={() => setShowMenu(true)} />
      </div>
      <div className="rightSide">
        <Link smooth to="#about">
          About
        </Link>
        <Link smooth to="#prizes">
          Prizes
        </Link>
        <Link smooth to="#partners">
          Partners
        </Link>
        <Link smooth to="#faq">
          FAQ
        </Link>
        <Link className="button" smooth to="https://forms.gle/naFRnnEqMeDTCf6P7">
          Apply Now!
        </Link>
      </div>
      {showMenu && (
        <div className="menu-list">
          <img src={Close} onClick={() => setShowMenu(false)} />
          <Link smooth to="#about">
            About
          </Link>
          <Link smooth to="#prizes">
            Prizes
          </Link>
          <Link smooth to="#partners">
            Partners
          </Link>
          <Link smooth to="#faq">
            FAQ
          </Link>
          <Link className="button" smooth to="https://forms.gle/naFRnnEqMeDTCf6P7">
            Apply Now!
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
