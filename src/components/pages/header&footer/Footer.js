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
            <a href="https://www.facebook.com/">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com/home?lang=en">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/">
              <i className="fab fa-linkedin-in"></i>
            </a>
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
