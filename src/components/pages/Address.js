import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Footer from "./header&footer/Footer";
import logo from "./Images/logo.svg";
import "./pageStyling.css";

const Address = () => {
  const [display, setDisplay] = useState("none");
  const [txt, setTxt] = useState(" ");

  function clearInput() {
    if (
      document.getElementById("name").value === "" ||
      document.getElementById("mail").value === "" ||
      document.getElementById("t1").value === "" ||
      document.getElementById("t4").value === "" ||
      document.getElementById("t5").value === "" 
    ) {
      setTxt("Please Enter All Fields!!");
    } else {
      setDisplay("flex");
      document.getElementById("name").value = "";
      document.getElementById("number").value = "";
      document.getElementById("mail").value = "";
      document.getElementById("landmark").value = "";
      document.getElementById("t1").value = "";
      document.getElementById("t2").value = "";
      document.getElementById("t3").value = "";
      document.getElementById("t4").value = "";
      document.getElementById("t5").value = "";
      document.getElementById("t6").value = "";
    }
  }

  return (
    <div className="address-page page">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div
        // action="https://formspree.io/f/xpzkkazz"
        // method="POST"
        className="ad-page-content"
      >
        <h1>DELIVERY ADDRESS</h1>
        <label htmlFor="name"> Name (First and Last Name) </label>
        <input type="text" id="name" name="message" />
        <label htmlFor="number"> Mobile Number </label>
        <input type="tel" id="number" name="message" />
        <label htmlFor="number"> Email </label>
        <input type="email" id="mail" name="message" />
        <label htmlFor="t1">
          {" "}
          Flat, House Number, Building, Company, Apartment
        </label>
        <input type="text" id="t1" name="message" />
        <label htmlFor="t2"> Area, Colony, Street, Sector, Village</label>
        <input type="text" id="t2" name="message" />

        <label htmlFor="landmark"> Landmark </label>
        <input type="text" id="landmark" />

        <label htmlFor="t3"> Additional Info on Address </label>
        <input type="text" id="t3" name="message" />

        <label htmlFor="t4">Town/City </label>
        <input type="text" id="t4" name="message" />
        <label htmlFor="t5">STATE </label>
        <input type="text" id="t5" name="message" />
        <label htmlFor="t6">PIN </label>
        <input type="text" id="t6" name="message" />


        <h1>{txt}</h1>

        <button type="submit" className="ad-btn" onClick={() => clearInput()}>
          SUBMIT AND PROCEED
        </button>
        <Link to="/cart">
          <div className="cart-btn">BACK TO CART</div>
        </Link>
      </div>

      <Link to="/cart">
        <div
          className="thank"
          style={{ display: `${display}` }}
          onClick={() => {
            setDisplay("none");
          }}
        >
          <h1>Thank You</h1>
          <i className="fas fa-thumbs-up"></i>
        </div>
      </Link>

      <Footer />
    </div>
  );
};

export default Address;
