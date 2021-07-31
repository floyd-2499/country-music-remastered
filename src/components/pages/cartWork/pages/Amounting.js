import React from "react";
import { Link } from "react-router-dom";
import "./item.css";

const Amounting = () => {
  return (
    <div className="amounting-box">
      <h1>SubTotal</h1>
      <div className="box-content">
        <div className="box-a">
          <h2>Items : </h2>
          <h2>Amount: </h2>
        </div>
        <div className="box-b">
          <h2>25 </h2>
          <h2>500000</h2>
        </div>
      </div>
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
