import React from "react";
import "../pageStyling.css";
import '../page-phone.css'
import Header from "../header&footer/Header";
import Footer from "../header&footer/Footer";
import Part1 from "./Part1";
import Part3 from "./Part3";
import Part2 from "./Part2";
import Part4 from "./Part4";

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
