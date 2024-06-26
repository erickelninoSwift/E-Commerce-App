import React from "react";
import "./cart-icon.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contex/Cart.Context";
import styled from "styled-components";

const CartIconComponent = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;

const CartIcon = () => {
  const { setIsCartOpen, isCartOpen, totalQuantity } = useContext(CartContext);
  // onClick={() => setIsCartOpen(!isCartOpen)}
  return (
    <CartIconComponent onClick={() => setIsCartOpen(!isCartOpen)}>
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>

          <ItemCount className="badge badge-sm indicator-item">
            {totalQuantity}
          </ItemCount>
        </div>
      </div>
    </CartIconComponent>
  );
};

export default CartIcon;
