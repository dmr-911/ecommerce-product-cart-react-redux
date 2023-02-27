import React from "react";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <div>
      <main className="py-16">
        <div className="productWrapper">
          {/* products container */}
          <div className="productContainer" id="lws-productContainer">
            {/* product item */}
            <div className="lws-productCard">
              <img
                className="lws-productImage"
                src="https://i.dummyjson.com/data/products/59/thumbnail.jpg"
                alt="product"
              />
              <div className="p-4 space-y-2">
                <h4 className="lws-productName">Spring and summershoes</h4>
                <p className="lws-productCategory">Mens shoes</p>
                <div className="flex items-center justify-between pb-2">
                  <p className="productPrice">
                    BDT <span className="lws-price">400</span>
                  </p>
                  <p className="productQuantity">
                    QTY <span className="lws-quantity">10</span>
                  </p>
                </div>
                <button className="lws-btnAddToCart">Add To Cart</button>
              </div>
            </div>
            {/* product item ends */}
            {/* product item */}
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
            {/* product item ends */}
          </div>
          {/* products container ends */}
          <div>
            {/* Product Input Form */}
            <Sidebar />
            {/* Product Input Form Ends */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
