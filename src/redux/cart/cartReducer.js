import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actionTypes";
import initialState from "./initialState";

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.payload];

    case REMOVE_PRODUCT:
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};

export default cartReducer;
