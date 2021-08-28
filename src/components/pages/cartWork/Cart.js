import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../pageStyling.css";
import "../page-phone.css";
import Footer from "../header&footer/Footer";
import Header from "../header&footer/Header";
import ItemDisplay from "./page-parts/ItemDisplay";
import Amounting from "./page-parts/Amounting";
import Google from "../Auth/Google";

const Cart = () => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart-item"))
  );






  const onRemove = (payload) => {
    let newCartitems = cartItems.filter((item) => item.id !== payload.id);
    // console.log(newCartitems);
    localStorage.setItem("cart-item", JSON.stringify(newCartitems));
    setCartItems(newCartitems);
  };

  // window.localStorage.clear();



  function cartLength() {
    let length = cartItems.length;
    if (length !== 0 || length === null) {
      
      return (
        <div>
          <p>You have {cartItems.length} item(s) in the cart</p>
        </div>
      );
    } else if(length === 0) {
      return <p>Cart is Empty</p>;
      
    }
  }
  function render() {
    if (localStorage.getItem("signIn") === "true") {
      return (
        <div>
          <div className="cart-top">
            <div className="count-display">{cartLength()}</div>
            <div className="link">
              <Link to="/products">
                <div className="btn-b btn">Continue Shopping</div>
              </Link>
            </div>
          </div>
          <div className="cart-page-content" id="load">
            <div className="cart-item-display">
              {cartItems.map((product) => {
                return (
                  <ItemDisplay
                    product={product}
                    key={product.id}
                    remove={onRemove}

                    // count={count}
                    // amount={amount}
                    // onDecrease={onDecrease}
                    // onIncrease={onIncrease}
                  >
                    {" "}
                  </ItemDisplay>
                );
              })}
            </div>
            <div className="amount-display" >
              <Amounting cartItems={cartItems} />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="googleAuth">
          <h1>-- PLEASE LOGIN --</h1>
          <div className="g-btn">
            <Google />
          </div>
        </div>
      );
    }
  }



  return (
    <div className="cart-content">
      <Header />
      {render()}
      {/* <div className="cart-top">
        <div className="count-display">{cartLength()}</div>
        <div className="link">
          <Link to="/products">
            <div className="btn-b btn">Continue Shopping</div>
          </Link>
        </div>
      </div>
      <div className="cart-page-content" id="load">
        <div className="cart-item-display">
          {cartItems.map((product) => {
            return (
              <ItemDisplay  
                product={product}
                key={product.id}
                remove={onRemove}
                
                
                // count={count}
                // amount={amount}
                // onDecrease={onDecrease}
                // onIncrease={onIncrease}
              >
                {" "}
              </ItemDisplay>
            );
          })}
        </div>
        <div className="amount-display">
          <Amounting cartItems={cartItems} />
        </div>
      </div> */}
      <Footer />
    </div>
  );
};

export default Cart;
