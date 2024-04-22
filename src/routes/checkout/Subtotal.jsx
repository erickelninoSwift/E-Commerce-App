import React from "react";

const Subtotal = () => {
  return (
    <>
      <div className="mt-6 border-t border-b py-2">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-400">Subtotal</p>
          <p className="text-lg font-semibold text-gray-900">$399.00</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-400">Shipping</p>
          <p className="text-lg font-semibold text-gray-900">$8.00</p>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm font-medium text-gray-900">Total</p>
        <p className="text-2xl font-semibold text-gray-900">
          <span className="text-xs font-normal text-gray-400">USD</span> 408.00
        </p>
      </div>
    </>
  );
};

export default Subtotal;
