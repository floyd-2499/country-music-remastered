import { combineReducers } from "redux";
import getInstruments from "./pages/product/reducers/reducers";
import authreducers from './pages/Auth/reducers/authreducers';


const reducers = combineReducers ({
    getInstruments,
    auth: authreducers,
})

export default reducers 