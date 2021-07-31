import React from "react";
import { Link } from "react-router-dom";
import "./Part.css";
import "./Part-mobile.css";
import introImg from "../Images/intro.svg";

const Part1 = () => {
  return (
    <div className="intro">      
      <div className="i-page">
        <div className="intro-part1">
          <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h5>
            <div className="h1">
            <h1>GO </h1>
            <h1>BEYOND  </h1>
            <h1>MUSIC. </h1>
            </div>
            <p>Music is your own experience, your thoughts, your wisdom. If you don’t live it, it won’t come out of your horn.</p>
           <Link to="/products">
           <div className="pro-page-link">
             Shop Instruments
           </div>
           </Link>
        </div>
        <div className="intro-part2">
          <img src={introImg} alt="intro" />
        </div>
      </div>
    </div>
  );
};

export default Part1;
