import { takeEvery } from "redux-saga/effects";
import { actionTypes } from "./action";

function* removeFromCartSaga({ payload }) {

  let cartItems = localStorage.getItem("cart-items")
    ? JSON.parse(localStorage.getItem("cart-items"))
    : [];

  cartItems = cartItems.filter((x) => x.id !== payload.id);

  yield localStorage.setItem("cart-items", JSON.stringify(cartItems));
}

export default function* removeFromCartWatcherSaga() {
  yield takeEvery(actionTypes.REMOVE_FROM_CART, removeFromCartSaga);
}
