import React from "react";

const CheckoutButton = () => {
  return (
    <button
      type="button"
      className="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
    >
      Checkout
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13 7l5 5m0 0l-5 5m5-5H6"
        />
      </svg>
    </button>
  );
};

export default CheckoutButton;
