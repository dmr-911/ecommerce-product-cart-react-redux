import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/cart/actions";

const ProductItem = ({ item }) => {
  const { title, category, price, quantity, image, id } = item;
  const cartItems = useSelector((state) => state.cart);
  const selectedItem = cartItems.find((item) => item.id === id);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    cartItems.length
      ? selectedItem
        ? selectedItem.quantity < quantity && dispatch(addProduct(product))
        : dispatch(addProduct(product))
      : dispatch(addProduct(product));
  };

  console.log(item?.quantity);
  return (
    <div className="lws-productCard">
      <img className="lws-productImage" src={image} alt="product" />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{title}</h4>
        <p className="lws-productCategory">{category}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="lws-price">{price}</span>
          </p>
          <p className="productQuantity">
            QTY{" "}
            <span className="lws-quantity">
              {cartItems.length
                ? selectedItem
                  ? item?.quantity - selectedItem?.quantity
                  : item?.quantity
                : item?.quantity}
            </span>
          </p>
        </div>
        <button
          className="lws-btnAddToCart"
          onClick={() => handleAddToCart(item)}
          disabled={
            cartItems.length &&
            selectedItem &&
            selectedItem?.quantity >= item?.quantity
          }
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
