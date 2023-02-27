import React from "react";

const Navbar = ({ setHome }) => {
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
            <span id="lws-totalCart">0</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
