import { takeEvery } from "redux-saga/effects";
import { actionTypes } from "./action";

function* decreaseItemSaga({ payload }) {

     const cartItems = []
//   let  count = payload.count + 1
//      cartItems.push( ...payload , count)
  
    yield localStorage.setItem( JSON.stringify(cartItems));
  }
  
  export default function* decreaseItemWatcherSaga() {
    yield takeEvery(actionTypes.DECREASE_ITEM, decreaseItemSaga);
  }
  