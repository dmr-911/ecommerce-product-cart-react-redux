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
      // finding existing element
      const isCartItem = state?.find((item) => item?.id === action.payload.id);
      // if item in cart
      if (isCartItem) {
        return state.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              cartQuantity: item.cartQuantity + 1,
            };
          }

          return item;
        });
      }

      // if item not in cart
      return [
        ...state,
        {
          ...action.payload,
          cartQuantity: 1,
        },
      ];

    case REMOVE_PRODUCT:
      return state.filter((item) => item.id !== action.payload);

    case UPDATE_PRODUCT:
      switch (action.payload.actionType) {
        case INCREASE:
          return state.map((item) => {
            if (item.id === action.payload.productId) {
              // checking cart quantity with available product quantity
              if (item.cartQuantity < item.quantity) {
                return {
                  ...item,
                  cartQuantity: item.cartQuantity + 1,
                };
              }
              return item;
            }

            return item;
          });

        case DECREASE:
          return state.map((item) => {
            if (item.cartQuantity > 1) {
              if (item.id === action.payload.productId) {
                return {
                  ...item,
                  cartQuantity: item.cartQuantity - 1,
                };
              }

              return item;
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
