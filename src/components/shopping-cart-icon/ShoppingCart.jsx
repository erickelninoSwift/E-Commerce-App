import React, { useContext } from "react";
import "./ShoppingCart.style.scss";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/Cartitem";
import { CartContext } from "../../contex/Cart.Context";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container mt-3">
      {cartItems.length > 0 ? (
        <div className="cart-items">
          {cartItems.map((item) => {
            return <CartItem key={item.id} data={item} />;
          })}
        </div>
      ) : (
        <span className="empty-message"> Cart Empty</span>
      )}
      <button className="bg-black text-white hover:bg-black">
        <Link to={"/checkout"}>GO TO CHECK OUT</Link>
      </button>
    </div>
  );
};

export default ShoppingCart;
