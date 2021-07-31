import React from "react";
import "./pageStyling.css";
import './page-phone.css'
import Header from "./contents/Header";
import Footer from "./contents/Footer";
import Part1 from "./homepage-contents/Part1";
import Part3 from "./homepage-contents/Part3";
import Part2 from "./homepage-contents/Part2";
import Part4 from "./homepage-contents/Part4";

const Home = () => {
  return (
    <div className="page">
      <div className="h">
        <Header />
      </div>
      <div className="page-content">
        <Part1 />
        <Part2 />
        <Part4 />
        <Part3 />

      </div>
      <div className="f">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
