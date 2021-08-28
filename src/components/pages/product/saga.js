import { put, takeEvery, call } from "redux-saga/effects";
import { actionTypes } from "./actions/action";
// import { apiClient } from "../../../API/client";
// import axios from "axios";
import items from "../Data/data"

function getInstruments() {
return items;
}
// function getInstruments() {
//   return apiClient.get("/instruments").then((response) => {
//     return response.data;
//   });
// }

// const getInstruments = () => {
//   return axios
//     .get(`http://server-country-music.herokuapp.com/instruments`)
//     .then((response) => {
//       return response.data.data;
//     });
// };

function* getInstrumentsSaga() {
  try {
    const response = yield call(getInstruments);

    yield put({
      type: actionTypes.GET_INSTRUMENTS_SUCCESS,
      payload: response,
    });
  } catch (e) {
    yield put({
      type: actionTypes.GET_INSTRUMENTS_FAIL,
      payload: "Error in loading Products",
    });
  }
}

export default function* watcherSaga() {
  yield takeEvery(actionTypes.GET_INSTRUMENTS, getInstrumentsSaga);
}
