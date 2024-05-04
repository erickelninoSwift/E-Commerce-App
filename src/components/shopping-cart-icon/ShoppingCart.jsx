import React, { useContext } from "react";
import "./ShoppingCart.style.scss";
// import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/Cartitem";
import { CartContext } from "../../contex/Cart.Context";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

const CardDropDowm = styled.div`
  position: absolute;
  width: 320px;
  height: 350px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid lightgray;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

const CartItemComponent = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const CheckOutButton = styled.button`
  margin-top: auto;
`;
const ShoppingCart = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <CardDropDowm>
      {cartItems.length > 0 ? (
        <CartItemComponent>
          {cartItems.map((item) => {
            return <CartItem key={item.id} data={item} />;
          })}
        </CartItemComponent>
      ) : (
        <EmptyMessage>Cart Empty</EmptyMessage>
      )}
      <CheckOutButton
        className="bg-black text-white hover:bg-black mt-auto"
        onClick={() => navigate("/checkout")}
      >
        GO TO CHECK OUT
      </CheckOutButton>
    </CardDropDowm>
  );
};

export default ShoppingCart;
