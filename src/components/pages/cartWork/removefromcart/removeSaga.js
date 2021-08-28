import { takeEvery, all } from "redux-saga/effects";
import { actionTypes } from "./action";

function* removeFromCartSaga({ payload }) {
  let cartItems = localStorage.getItem("cart-item")
    ? JSON.parse(localStorage.getItem("cart-item"))
    : [];

    
   let newCartItems = cartItems.filter((item) => item.id !== payload.id)


  yield localStorage.setItem("cart-item", JSON.stringify(newCartItems));
}

export default function* removeFromCartWatcherSaga() {
  yield all([takeEvery(actionTypes.REMOVE_FROM_CART, removeFromCartSaga)]);
}
