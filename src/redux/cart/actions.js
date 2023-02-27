import { ADD_PRODUCT, REMOVE_PRODUCT, UPDATE_PRODUCT } from "./actionTypes";

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export const removeProduct = (productId) => {
  return {
    type: REMOVE_PRODUCT,
    payload: productId,
  };
};

export const updateProduct = (productId, actionType) => {
  return {
    type: UPDATE_PRODUCT,
    payload: {
      productId,
      actionType,
    },
  };
};
