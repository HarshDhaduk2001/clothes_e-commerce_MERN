import {
  ADD_ITEM_TO_CART_FAILURE,
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  REMOVE_CART_ITEM_FAILURE,
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM_FAILURE,
  UPDATE_CART_ITEM_REQUEST,
  UPDATE_CART_ITEM_SUCCESS,
} from "./ActionType";

const initialState = {
  cart: null,
  cartItems: [],
  isLoading: false,
  error: null,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART_REQUEST:
    case ADD_ITEM_TO_CART_REQUEST:
    case REMOVE_CART_ITEM_REQUEST:
    case UPDATE_CART_ITEM_REQUEST:
      return { ...state, isLoading: true, error: null };

    case ADD_ITEM_TO_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        cartItems: [...state.cartItems, action.payload.cartItems],
      };

    case GET_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        cart: action.payload.cart,
        cartItems: action.payload.cartItems,
      };

    case REMOVE_CART_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        deleteCartItem: action.payload,
      };

    case UPDATE_CART_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        updateCartItem: action.payload,
      };

    case GET_CART_FAILURE:
    case ADD_ITEM_TO_CART_FAILURE:
    case REMOVE_CART_ITEM_FAILURE:
    case UPDATE_CART_ITEM_FAILURE:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};
