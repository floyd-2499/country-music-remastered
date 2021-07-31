import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./pageStyling.css";
import "./page-phone.css";
import Footer from "./contents/Footer";
import Header from "./contents/Header";
import ItemDisplay from "./cartWork/pages/ItemDisplay";
import Amounting from "./cartWork/pages/Amounting";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem("cart-items")));
  }, []);

  // console.log(cartItems);

  return (
    <div>
      <Header />
      <div className="cart-top">
        <div className="count-display">
          {cartItems.length !== 0 ? (
            <div>
              {" "}
              <p>You have {cartItems.length} item(s) in the cart</p>
            </div>
          ) : (
            <div>
              <p>Cart is Empty</p>
            </div>
          )}
        </div>
        <div className="link">
          <Link to="/products">
            <div className="btn-b btn">Continue Shopping</div>
          </Link>
        </div>
      </div>
      <div className="cart-page-content">
        <div className="cart-item-display">
          {cartItems?.map((product) => {
            return <ItemDisplay product={product} key={product.id} />;
          })}
        </div>
        <div className="amount-display">
          <Amounting cartItems={cartItems} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
