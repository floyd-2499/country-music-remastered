import React from "react";
import { Link } from "react-router-dom";

import Footer from "./contents/Footer";
import logo from "./Images/logo.svg";
import "./pageStyling.css";

const Address = () => {
  return (
    <div className="address-page page">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div className="ad-page-content">
        <h1>DELIVERY ADDRESS</h1>
        <label for="name"> Name (First and Last Name) </label>
        <input type="text" id="name" />
        <label for="number"> Mobile Number </label>
        <input type="text"  id="number" />
        <label for="t1">
          {" "}
          Flat, House Number, Building, Company, Apartment
        </label>
        <input type="text" id="t1" />
        <label for="t2"> Area, Colony, Street, Sector, Village</label>
        <input type="text" id="t2" />
        <label for="landmark"> Landmark </label>
        <input type="text" id="landmark" />
        <label for="t3"> Additional Info on Address </label>
        <input type="text" id="t3" />
        <label for="t4">Town/City </label>
        <input type="text" id="t4" />
        <label for="t5">STATE </label>
        <input type="text" id="t5" />
        <label for="t6">PIN </label>
        <input type="text" id="t6" />

        <div className="ad-btn">SUBMIT AND PROCEED</div>
        <Link to="/cart">
          <div className="cart-btn">BACK TO CART</div>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Address;
