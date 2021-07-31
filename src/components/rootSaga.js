import { all } from "redux-saga/effects";
import watcherSaga from "./pages/product/saga";
import addToCartWatcherSaga from "./pages/cartWork/sagas";
import removeFromCartWatcherSaga from './pages/cartWork/remove.saga'
import decreaseItemWatcherSaga from "./pages/cartWork/decreaseItem";

export default function* rootSaga() {
    yield all([watcherSaga(), addToCartWatcherSaga(), removeFromCartWatcherSaga(), decreaseItemWatcherSaga()]);
}