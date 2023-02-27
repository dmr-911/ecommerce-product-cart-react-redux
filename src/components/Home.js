import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import Sidebar from "./Sidebar";

const Home = () => {
  const cartProducts = useSelector((state) => state.products);

  return (
    <div>
      <main className="py-16">
        <div className="productWrapper">
          {/* products container */}
          <div className="productContainer" id="lws-productContainer">
            {/* product item */}
            {cartProducts.map((item) => (
              <ProductItem item={item} />
            ))}
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
