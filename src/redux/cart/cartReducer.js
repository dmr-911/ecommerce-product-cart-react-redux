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
      // const isCartItem = state.find((item) => item.id === action.payload.id);
      // if (isCartItem?.id) {
      //   const itemIndex = state.findIndex(
      //     (item) => item.id === action.payload.id
      //   );
      //   return [
      //     ...state,
      //     (state[itemIndex] = {
      //       ...state[itemIndex],
      //       quantity: state[itemIndex].quantity + 1,
      //     }),
      //   ];
      // } else {
      return [
        ...state,
        {
          ...action.payload,
          quantity: 1,
        },
      ];
    // }

    case REMOVE_PRODUCT:
      return state.filter((item) => item.id !== action.payload);

    case UPDATE_PRODUCT:
      switch (action.payload.actionType) {
        case INCREASE:
          return state.map((item) => {
            if (item.id === action.payload.productId) {
              return {
                ...item,
                quantity: item.quantity + 1,
              };
            }

            return item;
          });

        case DECREASE:
          return state.map((item) => {
            if (item.id === action.payload.productId) {
              return {
                ...item,
                quantity: item.quantity + 1,
              };
            }

            return item;
          });

        default:
          return state;
      }

    default:
      return state;
  }
};

export default cartReducer;
