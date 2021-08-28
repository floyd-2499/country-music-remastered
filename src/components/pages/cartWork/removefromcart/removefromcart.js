import { actionTypes } from "./action";

export const initialState = {
  success: false,
  loading: true,
  error: null,
  cartItems: [],
};

const removeFromCart = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REMOVE_FROM_CART:
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

export default removeFromCart ;