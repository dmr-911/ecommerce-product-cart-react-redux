import { ADD_PRODUCT } from "./actionTypes";
import initialState from "./initialState";

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [
        ...state,
        {
          ...action.payload,
        },
      ];

    default:
      return state;
  }
};

export default productReducer;