import { createContext, useEffect, useState } from "react";
import allProducts from "../shop-data.json";
export const ProductsContext = createContext({ products: [] });

export const PorductsProvider = ({ children }) => {
  const [products, setAllproducts] = useState([]);

  const value = { products };
  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await response.json();
      if (response.status === 200) {
        console.log("jackpot here ");
      }
      setAllproducts(allProducts);
    };
    getProduct();
  }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
