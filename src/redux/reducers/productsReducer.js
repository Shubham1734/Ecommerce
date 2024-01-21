import { ActionTypes } from "../constants/action-types";
const intialState = {
  products: [
  ],
};
const cartstate = {
  carts: [
  ],
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
export const cartReducer = (state = cartstate, { type, payload }) => {
  console.log(type);
  console.log(state);
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      var existingProduct = state.carts.find((item) => item.id === payload.id);
      if (existingProduct) {
        const updatedCarts = state.carts.map((item) =>
          item.id === payload.id ? { ...item, quantity: item.quantity + 1 } : item
        );

        return { ...state, carts: updatedCarts };
      } else {
        return { ...state, carts: [...state.carts, { ...payload, quantity: 1 }] };
      }
    case ActionTypes.REMOVE_FROM_CART:
      var filteredCarts = state.carts.filter((item) => item.id !== payload.id);
      return { ...state, carts: filteredCarts };

    case ActionTypes.UPDATE_CART_QUANTITY:
      var updatedCart = state.carts.map((item) =>
        item.id === payload.id ? { ...item, quantity: item.quantity + payload.quantity } : item
      );

      return { ...state, carts: updatedCart };

    default:
      return state;
  }
};

