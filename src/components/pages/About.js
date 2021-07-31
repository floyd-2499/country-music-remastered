import React from "react";
import Header from "./contents/Header";
import Footer from "./contents/Footer";
import about from "./Images/about.svg";
import abt from "./Images/abt.svg";
import { useState } from "react";
import './page-phone.css'
import "./pageStyling.css";

const About = () => {
  const [displayMission, setDisplayMission] = useState("block");
  const [displayValue, setDisplayValue] = useState("none");

  return (
    <div className="about-page">
      <Header />
      <h1>ABOUT US</h1>
      <div className="image-container">
        <p className="about-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde,
          ratione aliquam. Molestiae at sit ad accusantium. Suscipit in illum,
          nihil aliquam eaque sint officia, possimus fugit perferendis numquam
          distinctio eum. <br />
           Neque maxime sapiente praesentium dolor hic eos
          molestiae odit voluptas, cum perferendis facilis voluptatibus, beatae
          in minus doloribus, quam architecto eaque? Sed nobis, dolore excepturi
          voluptas distinctio odit nihil voluptates.
        </p>
        <img src={about} alt=" about us" className="first-img" />
      </div>
      <div className="about-mission">
        <div className="tabs">
          <h2
            onClick={() => {
              setDisplayMission("block");
              setDisplayValue("none");
            }}
          >
            MISSION
          </h2>
          <h2
            onClick={() => {
              setDisplayMission("none");
              setDisplayValue("block");
            }}
          >
            VALUE
          </h2>
        </div>
        <div className="mission content" style={{ display: `${displayMission}` }}>
          A mission statement is a short summary of an organization’s core
          purpose, focus, and aims. This usually includes a brief description of
          what the organization does and its key objectives.
          <br />
          <br />
          <small>-- MISSION --</small>
        </div>
        <div className="values content" style={{ display: `${displayValue}` }}>
          A vision statement is a short description of an organization’s
          aspirations and the wider impact it aims to create. It should be a
          guiding beacon to everyone within the organization and something which
          underpins internal decision-making and determines the intended
          direction of the organization.
          <br />
          <br />
          <small>-- VALUE --</small>
        </div>
      </div>

      <div className="image-container-bottom">
        <img src={abt} alt="about part 2" />
      </div>
      <Footer />
    </div>
  );
};

export default About;
