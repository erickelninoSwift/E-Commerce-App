import { createContext, useEffect, useState } from "react";
// import SHOP_DATA from "../data/shop-data";
import {
  addDocumentToCollection,
  getCategoriesandDocument,
} from "../routes/signin/firebase";

export const CategoriesContext = createContext({ Categories: {} });

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState({});

  const value = { categories };
  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await response.json();
      if (response.status === 200) {
        console.log("jackpot here ");
      }
      // setAllproducts(allProducts);
    };
    getProduct();
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getCategoriesandDocument();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
