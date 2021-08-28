import { actionTypes } from "./action";

export const initialState = {
  success: false,
  loading: true,
  error: null,
  cartItems: [],
};

const addToCart = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        cartItems: action.payload
      };
    case actionTypes.ADD_TO_CART_FAIL:
      return { ...state, success: false, loading: false, error: undefined };
    case actionTypes.ADD_TO_CART_LOADING:
      return { ...state };

    default:
      return state;
  }
};

export default addToCart;
