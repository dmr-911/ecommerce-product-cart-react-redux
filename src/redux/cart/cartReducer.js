import {
  ADD_PRODUCT,
  DECREASE,
  INCREASE,
  REMOVE_PRODUCT,
  UPDATE_PRODUCT,
} from "./actionTypes";
import initialState from "./initialState";

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [
        ...state,
        {
          // id: Math.max(),
          ...action.payload,
          quantity: 1,
        },
      ];

    case REMOVE_PRODUCT:
      return state.filter((item) => item.id !== action.payload);

    case UPDATE_PRODUCT:
      switch (action.payload.actionType) {
        case INCREASE:
          return state.map((item) => {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          });

        case DECREASE:
          return state.map((item) => {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          });

        default:
          return state;
      }

    default:
      return state;
  }
};

export default cartReducer;
