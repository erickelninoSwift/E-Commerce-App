import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  additemsToCart: () => {},
  totalQuantity: 0,
});

const checkproductExist = (cartItems, productToAdd) => {
  const check = cartItems.find((data) => data.id === productToAdd.id);

  if (check) {
    return cartItems.map((currentProduct) => {
      return currentProduct.id === productToAdd.id
        ? { ...currentProduct, quantity: currentProduct.quantity + 1 }
        : currentProduct;
    });
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContextprovider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setItemsToCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const additemsToCart = (itemToAdd) => {
    setItemsToCart(checkproductExist(cartItems, itemToAdd));
  };

  useEffect(() => {
    setTotalQuantity(
      cartItems.reduce((acc, current) => {
        const { quantity } = current;
        return acc + quantity;
      }, 0)
    );
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    additemsToCart,
    cartItems,
    totalQuantity,
  };

  console.log(`Total Quantity is  : ${totalQuantity}`);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
