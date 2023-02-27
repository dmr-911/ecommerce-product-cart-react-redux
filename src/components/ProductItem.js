import React from "react";

const ProductItem = () => {
  return (
    <div className="lws-productCard">
      <img
        className="lws-productImage"
        src="https://i.dummyjson.com/data/products/40/thumbnail.jpg"
        alt="product"
      />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">Women Winter Clothes</h4>
        <p className="lws-productCategory">Tops</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="lws-price">100</span>
          </p>
          <p className="productQuantity">
            QTY <span className="lws-quantity">30</span>
          </p>
        </div>
        <button className="lws-btnAddToCart">Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
