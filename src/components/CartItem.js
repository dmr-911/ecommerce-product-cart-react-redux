import React from "react";
import { useDispatch } from "react-redux";
import { removeProduct } from "../redux/cart/actions";

const CartItem = ({ item }) => {
  const { title, category, price, quantity, image, id } = item;
  const dispatch = useDispatch();

  const removeCartItem = (id) => {
    dispatch(removeProduct(id));
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
          <button className="lws-incrementQuantity">
            <i className="text-lg fa-solid fa-plus" />
          </button>
          <span className="lws-cartQuantity">{quantity}</span>
          <button className="lws-decrementQuantity">
            <i className="text-lg fa-solid fa-minus" />
          </button>
        </div>
        {/* price */}
        <p className="text-lg font-bold">
          BDT <span className="lws-calculatedPrice">2200</span>
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
