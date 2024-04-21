import React from "react";
import "./product-card.styles.scss";
import Rating from "./Rating";
const Product = ({ itemDetails }) => {
  const { imageUrl, price, name, rating } = itemDetails;
  console.log(itemDetails);
  return (
    <article className="relative">
      <a
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        href="#"
      >
        <img
          className="object-cover"
          style={{ height: "", width: "100%", objectFit: "cover" }}
          src={imageUrl}
          alt="product image"
        />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          39% OFF
        </span>
      </a>
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="text-[18px] tracking-tight text-slate-900">
            {/* {title.substring(0, title.length / 2)} */}
            {name}
          </h5>
        </a>
        <div className="mt-3 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">${price}</span>
            <span className="text-sm text-slate-900 line-through"></span>
          </p>
          <div className="flex items-center">
            <Rating />
            <Rating />
            <Rating />
            <Rating />
            {/* 
            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
              {rating}
            </span> */}
          </div>
        </div>
        <a
          href="#"
          className="flex items-center justify-center rounded-md w-[auto] bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Add to cart
        </a>
      </div>
    </article>
  );
};

export default Product;

// category
// :
// "men's clothing"
// description
// :
// "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id
// :
// 1
// image
// :
// "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price
// :
// 109.95
// rating
// :
// {rate: 3.9, count: 120}
// title
// :
// "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"

// <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"></div>;
