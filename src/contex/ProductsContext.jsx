import { createContext, useEffect, useState } from "react";
import SHOP_DATA from "../data/shop-data";
import {
  addDocumentToCollection,
  getCategoriesandDocument,
} from "../routes/signin/firebase";

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
      // setAllproducts(allProducts);
      console.log(SHOP_DATA);
    };
    getProduct();
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getCategoriesandDocument();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
