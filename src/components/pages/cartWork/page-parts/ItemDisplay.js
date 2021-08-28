import React, { useState } from "react";
import "./item.css";
import "./item-mobile.css";

const ItemDisplay = (props) => {
  const { product, remove } = props;
  const [count, setCount] = useState(localStorage.getItem(`${product.item}`));
  if (count === null || count <= 0) {
    setCount(1);
    localStorage.setItem(`${product.item}`, 1);
  }

  const amount = (count * product.price)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,");

  const onIncrease = () => {
    const itemCount = Number(count);
    let newCount = itemCount + 1;
    setCount(newCount);
    localStorage.setItem(`${product.item}`, newCount);
  };

  const onDecrease = () => {
    const itemCount = Number(count);
    let newCount = itemCount - 1;
    setCount(newCount);
    localStorage.setItem(`${product.item}`, newCount);
  };

  return (
    <div className="item-box">
      <img src={product.img} alt={product.item} />
      <div className="desc">
        <h1>{product.item}</h1>
        <br />
        <h2>Rs. {product.price}/-</h2>
        <h3>You Save {product.discount}%</h3>
        <h4>No. of Item(s) : {count}</h4>
        <span> Total Amount {amount}</span>
        <i className="fas fa-plus-circle"></i>
        <div className="item-page-icons">
          <i className="fas fa-plus-circle" onClick={() => onIncrease()}></i>

          <i className="fas fa-trash" onClick={() => remove(product)}></i>

          <i className="fas fa-minus-circle" onClick={() => onDecrease()}></i>
        </div>
      </div>
      {/* <div className="popup" style={{ display: `${pop}` }}>
        Done
        <button onClick={() => setPop("none")}>ok</button>
      </div> */}
    </div>
  );
};

export default ItemDisplay;
