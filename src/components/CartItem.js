import React from "react";
import { useDispatch } from "react-redux";
import { removeProduct, updateProduct } from "../redux/cart/actions";
import { DECREASE, INCREASE } from "../redux/cart/actionTypes";

const CartItem = ({ item }) => {
  const { title, category, price, image, id, cartQuantity } = item;
  const dispatch = useDispatch();

  const removeCartItem = (id) => {
    dispatch(removeProduct(id));
  };
  const handleIncreaseQty = (productId) => {
    dispatch(updateProduct(productId, INCREASE));
  };
  const handleDecreaseQty = (productId) => {
    dispatch(updateProduct(productId, DECREASE));
  };

  return (
    <div className="cartCard">
      <div className="flex items-center col-span-6 space-x-6">
        {/* cart image */}
        <img className="lws-cartImage" src={image} alt="product" />
        {/* cart item info */}
        <div className="space-y-2">
          <h4 className="lws-cartName">{title}</h4>
          <p className="lws-cartCategory">{category}</p>
          <p>
            BDT <span className="lws-cartPrice">{price}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        {/* amount buttons */}
        <div className="flex items-center space-x-4">
          <button
            className="lws-incrementQuantity"
            onClick={() => handleIncreaseQty(id)}
          >
            <i className="text-lg fa-solid fa-plus" />
          </button>
          <span className="lws-cartQuantity">{cartQuantity}</span>
          <button
            className="lws-decrementQuantity"
            onClick={() => handleDecreaseQty(id)}
          >
            <i className="text-lg fa-solid fa-minus" />
          </button>
        </div>
        {/* price */}
        <p className="text-lg font-bold">
          BDT{" "}
          <span className="lws-calculatedPrice">{price * cartQuantity}</span>
        </p>
      </div>
      {/* delete button */}
      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button
          className="lws-removeFromCart"
          onClick={() => removeCartItem(id)}
        >
          <i className="text-lg text-red-400 fa-solid fa-trash" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
