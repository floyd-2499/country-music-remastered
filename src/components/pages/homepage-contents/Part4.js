import React from "react";
import { Link } from "react-router-dom";

const Part4 = () => {
  return (
    <div className="S-P">
      <div className="Partners">
        <h1>Top Brands</h1>
        <ul className="list">
          <li>YAMAHA</li>
          <li>Roland</li>
          <li>Casio</li>
          <li>Akai</li>
          <li>HAVANA</li>
          <li>Juarez</li>
          <li>KADENCE</li>
          <li>Pearl</li>
          <li>Behringer</li>
        </ul>
      </div>
      <div className="Service">
        <h1>Services</h1>
        <div className="S-info">
          <div className="S-info-item">
          <i className="fas fa-shipping-fast"></i>
            <p>Free shipping on all orders</p>
          </div>

          <div className="S-info-item">
          <i className="fas fa-tools"></i>
            <div className="repair">
              <p>Repairs and Maintainence</p>
              <Link to="/contact">
                <button>Contact Us</button>
              </Link>
            </div>
          </div>

          <div className="S-info-item">
          <i className="far fa-clock"></i>
            <p>On-time delivery</p>
          </div>

          <div className="S-info-item">
          <i className="fas fa-rupee-sign"></i>
            <p style={{textIndent:"10px"}}> Easy Payment options</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part4;
