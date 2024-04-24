import React, { useContext } from "react";
import { CartContext } from "../../contex/Cart.Context";

const OrderSummary = () => {
  const { CurrentTotalAmount } = useContext(CartContext);
  return (
    <>
      <h3 className="text-xl font-extrabold text-[#333] border-b pb-4">
        Order Summary
      </h3>
      <ul className="text-[#333] divide-y mt-6">
        <li className="flex flex-wrap gap-4 text-md py-4">
          Subtotal{" "}
          <span className="ml-auto font-bold">${CurrentTotalAmount}.00</span>
        </li>
        <li className="flex flex-wrap gap-4 text-md py-4">
          Shipping <span className="ml-auto font-bold">$0.00</span>
        </li>
        <li className="flex flex-wrap gap-4 text-md py-4">
          Tax <span className="ml-auto font-bold">$0.00</span>
        </li>
        <li className="flex flex-wrap gap-4 text-md py-4 font-bold">
          Total <span className="ml-auto">${CurrentTotalAmount}.00</span>
        </li>
      </ul>
      <button
        type="button"
        className="mt-6 text-md px-6 py-2.5 w-full bg-black hover:bg-black text-white rounded"
      >
        Check out
      </button>

      <div className="mt-10">
        <h3 className="text-xl font-extrabold text-[#333] mb-6">
          Apply promo code
        </h3>
        <div className="flex border overflow-hidden max-w-md rounded">
          <input
            type="email"
            placeholder="Promo code"
            className="w-full outline-none bg-white text-gray-600 text-md px-4 py-2.5"
          />
          <button
            type="button"
            className="flex items-center justify-center bg-black hover:bg-black px-6 text-md text-white"
          >
            Apply
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
