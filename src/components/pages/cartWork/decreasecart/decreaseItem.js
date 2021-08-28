import { takeEvery } from "redux-saga/effects";
import { actionTypes } from "./action";

function* decreaseItemSaga({ payload }) {

  
  const cartItems = [];

  yield localStorage.setItem(JSON.stringify(cartItems));
}

export default function* decreaseItemWatcherSaga() {
  yield takeEvery(actionTypes.DECREASE_ITEM, decreaseItemSaga);
}
