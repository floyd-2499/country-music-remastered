import React from "react";
import logo from "../Images/logo.svg";
import { Link } from "react-router-dom";
import "./style.css";

const Footer = () => {
  return (
    <div className="f-con">
      <div className="footer">
        <div className="foot">
          <div className="f-logo ">
            <Link to="/">
              <img src={logo} alt="logo" className="logo-img" />
            </Link>
          </div>
          <div className="address">
            <p>+91 9740 250 911</p>
            <p> instrumental@countrymusic.com </p>
            <p> Mangalore, India </p>
          </div>
        </div>
        <div className="social-media">
          <p>CONNECT WITH US</p>
          <div className="icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin-in"></i>
          </div>
        </div>

      </div>
      <div className="f-text">
          © Country Music 2021 | Designed by Floyd Manuel
        </div>
    </div>
  );
};

export default Footer;
