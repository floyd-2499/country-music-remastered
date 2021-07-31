import React, { useState } from "react";
import "./item.css";
import "./item-mobile.css";
import { useDispatch } from "react-redux";
import { actionTypes } from "../action";

const ItemDisplay = (props) => {
  const { product } = props;

  const[count, setCount] = useState(1)
  // console.log(count)

  const dispatch = useDispatch();
  const remove = () => {
    dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: product });
  };


  const reduce = () => {
    dispatch({type: actionTypes.DECREASE_ITEM, payload: product})
  }



  return (
    <div className="item-box">
      <img src={product.img} alt={product.item} />
      <div className="desc">
        <h1>
           {product.item}
        </h1>
        <br />
        <h2>Rs. {product.price}/-</h2>
        <h3 >You Save {product.discount}%</h3>
        <h4>Number Of Items : {product.count}</h4>
        <i className="fas fa-plus-circle"></i>
        <div className="item-page-icons">
          <i className="fas fa-plus-circle" ></i>
          <i className="fas fa-trash" onClick={remove}></i>
          <i className="fas fa-minus-circle" onClick={reduce}></i>
        </div>
      </div>
    </div>
  );
};

export default ItemDisplay;
