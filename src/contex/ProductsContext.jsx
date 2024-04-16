import { createContext, useEffect, useState } from "react";
import allproducts from "../data/shop_data";
export const ProductsContext = createContext({ products: [] });

export const PorductsProvider = ({ children }) => {
  const [products, setAllproducts] = useState(null);

  const value = { products };
  useEffect(() => {
    setAllproducts(allproducts);
  }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
