import React, { useContext } from "react";
import { CartContext } from "../../contex/Cart.Context";
import CheckoutSpitem from "../../components/ChekcoutItem/CheckoutSpitem";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
const CheckoutSecondPage = () => {
  const { setIsCartOpen, isCartOpen, cartItems } = useContext(CartContext);
  return (
    <div className="m-10 p-10">
      <div className="grid lg:grid-cols-3 gap-12 p-6">
        <div className="lg:col-span-2 bg-white divide-y">
          {/* here */}

          {cartItems.length > 0 ? (
            cartItems.map((item) => {
              const { id } = item;
              return <CheckoutSpitem key={id} cartItem={item} />;
            })
          ) : (
            <span className="text-sm ">Cart Empty</span>
          )}
        </div>
        <div className="bg-gray-100 rounded p-8">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default CheckoutSecondPage;
