import { all} from "redux-saga/effects";
import watcherSaga from "./pages/product/saga";
import addToCartWatcherSaga from "./pages/cartWork/addtocart/sagas";
import removeFromCartWatcherSaga from './pages/cartWork/removefromcart/removeSaga'
// import decreaseItemWatcherSaga from "./pages/cartWork/decreasecart/decreaseItem";

export default function* rootSaga() {
    yield all([watcherSaga(), addToCartWatcherSaga() , removeFromCartWatcherSaga()]);
}