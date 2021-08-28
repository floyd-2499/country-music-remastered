import React from "react";
import { Link } from "react-router-dom";
import "./item.css";

const Amounting = (props) => {


  return (
    <div className="amounting-box">
      <Link to="/payment-proceeds">
        <div className="btn">Proceed To Pay</div>
      </Link>
      <Link to="/products">
        <div className="btn-b btn">Continue Shopping</div>
      </Link>      
    </div>
  );
};

export default Amounting;
