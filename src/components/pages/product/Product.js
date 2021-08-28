import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionTypes } from "../cartWork/addtocart/action";
import "./pro.css";

const Product = (props) => {
  const [txt, setTxt] = useState("Add To Cart")
  const { product } = props;
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch({ type: actionTypes.ADD_TO_CART_SUCCESS, payload: product });
    setTxt("Item Added");
  };

  return (
    <div className="card">
      <div className="image-con">
        <img src={product.img} alt="" />
      </div>
      <br />
      <h1> {product.item}</h1>
      <h5>-- by --</h5>
      <h3>{product.company}</h3>
      <br />

      <h1 className="price">
        ₹ {product.price} /-{" "}
        <br />
        <small>
          <del>₹ {product.mrp}</del>
        </small>
      </h1>
      <br />
      <div className="save">SAVE {product.discount}%</div>
      <br />
      <div className="cartpage-link" onClick={() => addToCart()}>
        {JSON.parse(localStorage.getItem("cart-item").includes(product.item))? 'Moved To Cart': txt }
      </div>
    </div>
  );
};

export default Product;
