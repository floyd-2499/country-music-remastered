import { combineReducers } from "redux";
import getInstruments from "./pages/product/reducers/reducers";
import authreducers from './pages/Auth/reducers/authreducers';
import addtocart from "./pages/cartWork/addtocart/addtocartReducer";
import removeFromCart from "./pages/cartWork/removefromcart/removefromcart";


const reducers = combineReducers ({
    getInstruments,
    auth: authreducers,
    addtocart,
    removeFromCart
})

export default reducers 