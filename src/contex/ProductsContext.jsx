import { createContext, useEffect, useState } from "react";
// import allproducts from "../data/shop_data";
export const ProductsContext = createContext({ products: [] });

export const PorductsProvider = ({ children }) => {
  const [products, setAllproducts] = useState([]);

  const value = { products };
  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch("https://fakestoreapi.com/products?limit=8");
      const data = await response.json();

      setAllproducts(data);
    };
    getProduct();
  }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
