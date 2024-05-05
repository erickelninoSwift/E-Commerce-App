import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./product-card.styles.scss";
import { CartContext } from "../../contex/Cart.Context";
import Rating from "./Rating";
const Product = ({ itemDetails, currentCategory }) => {
  const { additemsToCart } = useContext(CartContext);
  const { imageUrl, price, name, id } = itemDetails;
  const navigate = useNavigate();

  return (
    <article className="relative">
      <a
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        href="#"
      >
        <img
          className="object-cover"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
          src={imageUrl}
          alt="product image"
          onClick={() => navigate(`/singleproduct/${currentCategory}/${id}`)}
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
          </div>
        </div>
        <a
          href="#"
          className="flex items-center justify-center rounded-md w-[auto] bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          onClick={() => additemsToCart(itemDetails)}
        >
          Add to cart
        </a>
      </div>
    </article>
  );
};

export default Product;
