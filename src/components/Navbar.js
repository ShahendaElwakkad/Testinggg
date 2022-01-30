import React, { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import image from "../images/logo.JPG";
import DropDownTrackingShipment from "./DropButton";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          {" "}
          <img src={image}></img>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <DropDownTrackingShipment />
          </li>
          <li className="nav-item">
            <Link to="/Pricing" className="nav-links" onClick={closeMobileMenu}>
              Pricing
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/ContactSales"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact Sales
            </Link>
          </li>
          <li>
            <Link
              to="/SignIn"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Sign In
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
