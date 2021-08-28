import { actionTypes } from "./action";

export const initialState = {
  success: false,
  loading: true,
  error: null,
  cartItems: [],
};

const decreaseItem = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DECREASE_ITEM:
      return {
        ...state,
        success: true,
        loading: false,
        cartItems: action.payload,
      };
    default:
      return state;
  }
};

export default decreaseItem;