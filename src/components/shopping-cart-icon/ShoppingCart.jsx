import React from "react";
import "./ShoppingCart.style.scss";
import "./cart-dropdown.styles.scss";
const ShoppingCart = () => {
  return (
    <div className="cart-dropdown-container mt-3">
      <button className="btn bg-black hover:bg-black  text-white btn-block">
        View cart
      </button>
    </div>
  );
};

export default ShoppingCart;
