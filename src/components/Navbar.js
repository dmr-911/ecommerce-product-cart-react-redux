import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Navbar = ({ setHome }) => {
  const cartItems = useSelector((state) => state.cart);
  const [newCartItems, setNewCartItems] = useState(0);
  const totalItems = (items) => {
    return items.reduce(
      (a, b) => a + parseFloat(b?.quantity),
      0
    );
  };

  // Effect for total quantity 
  useEffect(() => {
    if (cartItems?.length) {
      setNewCartItems(totalItems(cartItems));
    } else {
      setNewCartItems(0);
    }
  }, [cartItems]);

  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <button onClick={() => setHome(true)}>
          <img src="./images/logo.png" alt="LWS" className="max-w-[140px]" />
        </button>
        <div className="flex gap-4">
          <span onClick={() => setHome(true)} className="navHome" id="lws-home">
            {" "}
            Home{" "}
          </span>
          <button
            className="navCart"
            id="lws-cart"
            onClick={() => setHome((prev) => !prev)}
          >
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping" />
            <span id="lws-totalCart">{newCartItems}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
