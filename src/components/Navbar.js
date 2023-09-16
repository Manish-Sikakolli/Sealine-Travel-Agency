import React, { useState } from "react";
import Logo from "../assets/logo.PNG";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <b>Sealine <sup><mark>FREE</mark></sup></b>
      </div>
      <div className="rightSide">
        <Link to="/"> HOME </Link>
        <Link to="/aboutus"> ABOUT US </Link>
        <Link to="/contacts"> CONTACTS </Link>
        <Link to="/contact"> TYPOGRAPHY </Link>
      </div>
      <div className="btn">
        <button>
          BOOK A TOUR NOW
        </button>
      </div>
    </div>
  );
}

export default Navbar;
