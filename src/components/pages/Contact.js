import React from "react";
import "./pageStyling.css";
import './page-phone.css'
import Header from "./contents/Header";
import Footer from "./contents/Footer";
import contact from './Images/contact.svg'

const Contact = () => {
  return (
    <div className="contact page">
      <Header />
      <h1>CONTACT US</h1>
      <div className="contact-container">
        <div className="part-1">
            <img src={contact} alt="contact page" />
        </div>
        <div className="part-2">
            <h2>Drop a message</h2>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Phone" />
            <input type="text" placeholder="Subject"  />
            <textarea name="Message"  cols="30" rows="4" placeholder="Message"></textarea>
            <div className="submit">
                <p>Submit</p>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
