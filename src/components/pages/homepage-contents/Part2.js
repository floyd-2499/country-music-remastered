import React from "react";
import { Link } from "react-router-dom";
import "./Part.css";

const Part2 = () => {
  return (
    <div className="slide">
      <div className="slide-con">
        <h1>Feel the Moment,</h1>
        <h2>Play Music</h2>
        <p>
          Music is your own experience, your thoughts, your wisdom. If you don’t
          live it, it won’t come out of your horn.
        </p>
        <Link to="/products">
          <div className="pro-page2-link">Shop Now</div>
        </Link>
      </div>
    </div>
  );
};

export default Part2;
