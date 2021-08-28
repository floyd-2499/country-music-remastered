import { takeEvery } from "redux-saga/effects";
import { actionTypes } from "./action";


function* addToCartSaga({ payload }) {
  const oldCartItems = JSON.parse(localStorage.getItem('cart-item'));
  // console.log(oldCartItems)
  let cartItems = [];
  if (oldCartItems) {
    cartItems.push(...oldCartItems);
    if (!oldCartItems.find((item) => item.id === payload.id)) {
      cartItems.push(payload);
    }
  } else {
    cartItems.push(payload);
  }
  
  yield localStorage.setItem('cart-item', JSON.stringify(cartItems));
}

export default function* addToCartWatcherSaga() {
  yield takeEvery(actionTypes.ADD_TO_CART_SUCCESS, addToCartSaga);
}
