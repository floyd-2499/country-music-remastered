import React from "react";
import "./pageStyling.css";
import "./page-phone.css";
import Header from "./header&footer/Header";
import Footer from "./header&footer/Footer";
import contact from "./Images/contact.svg";

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
          <form action="https://formspree.io/f/mdoyppgj"  method="POST">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="tel" placeholder="Phone" />
            <input type="text" placeholder="Subject" />
            <textarea
              name="Message"
              cols="30"
              rows="4"
              placeholder="Message"
            ></textarea>
            <button type="submit" className="submit">
              <p>Submit</p>
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
