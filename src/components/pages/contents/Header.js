import React, { useState } from "react";
import { Link } from "react-router-dom";
import Google from "../Auth/Google";
import logo from "../Images/logo.svg";
import "./style.css";
import "./style-mobile.css";

const Header = () => {

  const [display, setDisplay] = useState("none");


  return (
    <div>
      <div className="header">
        <div className="h-logo">
          <Link to="/">
            <img src={logo} alt="logo" className="main-logo" />
          </Link>
        </div>

        <div className="mob-nav">
          <div className="rs-one" onClick={() => {setDisplay("flex")}}>
            <i className="fas fa-directions"></i>
          </div>
          <div className="nav-links-mob" style={{display:`${display}`}} onClick={() => {setDisplay("none")}}>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
          <div className="right-end">
            <div className="cart">
              <Link to="/cart">
                <i className="fas fa-shopping-cart"></i>
              </Link>
            </div>
            <Google />
          </div>
        </div>
        </div>

        <div className="nav-links">
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
          <div className="right-end">
            <div className="cart">
              <Link to="/cart">
                <i className="fas fa-shopping-cart"></i>
              </Link>
            </div>
            <Google />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
