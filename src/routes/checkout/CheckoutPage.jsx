import React, { useContext, useEffect } from "react";
import CheckoutItem from "../../components/ChekcoutItem/CheckoutItem";
import Subtotal from "./Subtotal";
import CheckoutButton from "./CheckoutButton";
import { CartContext } from "../../contex/Cart.Context";
const CheckoutPage = () => {
  const { setIsCartOpen, cartItems } = useContext(CartContext);
  useEffect(() => {
    const closeCart = () => {
      return setIsCartOpen(false);
    };
    closeCart();
  }, []);
  return (
    <>
      <section className="h-screen bg-gray-100 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <h1 className="text-2xl font-semibold text-gray-900">Your Cart</h1>
          </div>

          <div className="mx-auto mt-8 max-w-2xl md:mt-12">
            <div className="bg-white shadow">
              <div className="px-4 py-6 sm:px-8 sm:py-10">
                <div className="flow-root">
                  <ul className="-my-8">
                    {cartItems.length > 0
                      ? cartItems.map((data) => {
                          const { id } = data;
                          return <CheckoutItem key={id} cartItem={data} />;
                        })
                      : ""}
                  </ul>
                </div>
                <Subtotal />
                <div className="mt-6 text-center">
                  <CheckoutButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckoutPage;
