import React, { useState } from "react";
import "./Part.css";
import img from "../Images/subscription.svg";

const Part3 = () => {
  const [email, setEmail] = useState("");
  const [display, setDisplsy] = useState("none");
  const [txt, setTxt] = useState("Please enter valid email")

  function resetInput(e) {
    e.preventDefault();
    setEmail("");
    if (email === "") {
      setDisplsy("none");
    } else if(email.includes("@") && email.includes(".com")) {
      setDisplsy("flex");
      setTxt("Thank You")
    }else{
      setDisplsy("flex");
      setTxt("Please enter valid email")
    }
  }

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
            <form className="sub-part2-a-input" onClick={resetInput}>
              <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button onClick={resetInput}> Submit</button>
            </form>
            <div className="txt" style={{ display: `${display}` }}>
              <h3>{txt}</h3>
              <i className="fas fa-times" onClick={() => setDisplsy("none")}></i>
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
