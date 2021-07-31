import React from "react";
import "./Part.css";
import img from "../Images/subscription.svg";

const Part3 = () => {
  return (
    <div className="subscription">
      <div className="sub-container">
        <div className="sub-part1">
          <h1 className="h1-part3">SUBSCRIBE TO OUR</h1>
          <h2>NEWSLETTER</h2>
        </div>
        <div className="sub-part2">
          <div className="sub-part2-a">
            <p>
              Stay updated with all the latest News & Products from COUNTRY
              MUSIC .
            </p>
            <div className="sub-part2-a-input">
              <input type="email" placeholder="Enter Your Email" />  
              <button> Submit</button>
            </div>
          </div>
          <div className="sub-part2-b">
            <img src={img} alt="subscribe" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;
