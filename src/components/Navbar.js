import React from "react";

const Navbar = ({ setHome }) => {
  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <a href="index.html">
          <img src="./images/logo.png" alt="LWS" className="max-w-[140px]" />
        </a>
        <div className="flex gap-4">
          <a href="#home" className="navHome" id="lws-home">
            {" "}
            Home{" "}
          </a>
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
