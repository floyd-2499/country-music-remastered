import { actionTypes } from "../actions/action";


export const initialState = {
    loading: false,
    instruments: [],
    error: undefined,
}

const getInstruments = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_INSTRUMENTS:
            return {
                ...state,
                loading: true,
            }

        case actionTypes.GET_INSTRUMENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                instruments: action.payload
            }

        case actionTypes.GET_INSTRUMENTS_FAIL:
            return {
                ...state,
                loading: false,
                pagination: undefined,
                error: action.payload,
            }

        default:
            return state
    }
}

export default getInstruments
