import { takeEvery, all } from "redux-saga/effects";
import { actionTypes } from "./action";

function* addToCartSaga({ payload }) {
  const oldCartItems = JSON.parse(localStorage.getItem("cart-items"));
  const cartItems = [];
  if (oldCartItems) {
    cartItems.push(...oldCartItems);
    if (!oldCartItems.find((item) => item.id === payload.id)) {
      cartItems.push(payload);
    }
  } else {
    cartItems.push(payload);
  }
  yield localStorage.setItem("cart-items", JSON.stringify(cartItems));
}

export default function* addToCartWatcherSaga() {
  yield all([takeEvery(actionTypes.ADD_TO_CART, addToCartSaga)]);
}
