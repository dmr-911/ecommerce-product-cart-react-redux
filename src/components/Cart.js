import React from "react";
import { useSelector } from "react-redux";
import Bill from "./Bill";
import CartItem from "./CartItem";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  return (
    <div>
      <main className="py-16">
        <div className="container 2xl:px-8 px-2 mx-auto">
          <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
          <div className="cartListContainer">
            <div className="space-y-6">
              {/* Cart Item */}
              {products.map((product) => (
                <CartItem key={product.id} item={product} />
              ))}
              {/* Cart Items Ends */}
            </div>
            {/* Bill Details */}
            <Bill />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
