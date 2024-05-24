import { createContext, useEffect, useState, useReducer } from "react";
// import { legacy_createStore as createStore} from 'redux'
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  additemsToCart: () => {},
  removeItemsToCard: () => {},
  deleteItemFromCart: () => {},
  totalQuantity: 0,
  CurrentTotalAmount: 0,
});

const INITIAL_CART_STATE = {
  isCartOpen: false,
  cartItems: [],
  totalQuantity: 0,
  CurrentTotalAmount: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
  }
};

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

const removeCurrentItemFromCart = (cartItems, itemToDelete) => {
  return cartItems.filter((data) => data.id !== itemToDelete.id);
};
const removeProductFromCard = (cartItems, productToremove) => {
  const existingItem = cartItems.find((data) => data.id === productToremove.id);

  if (existingItem.quantity === 1) {
    return cartItems.filter((data) => data.id !== productToremove.id);
  }

  return cartItems.map((currentProduct) => {
    return currentProduct.id === productToremove.id
      ? { ...currentProduct, quantity: currentProduct.quantity - 1 }
      : currentProduct;
  });
};

const totalAmountPrice = (cartItems) => {
  return cartItems.reduce((acc, currentProduct) => {
    return acc + currentProduct.quantity * currentProduct.price;
  }, 0);
};

export const CartContextprovider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setItemsToCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [CurrentTotalAmount, setTotalAmount] = useState(0);
  const additemsToCart = (itemToAdd) => {
    setItemsToCart(() => {
      return checkproductExist(cartItems, itemToAdd);
    });
  };

  const removeItemsToCard = (itemToRemove) => {
    setItemsToCart(() => {
      return removeProductFromCard(cartItems, itemToRemove);
    });
  };

  const deleteItemFromCart = (itemToDelete) => {
    setItemsToCart(() => removeCurrentItemFromCart(cartItems, itemToDelete));
  };

  useEffect(() => {
    setTotalAmount(totalAmountPrice(cartItems));
  }, [cartItems]);

  // =========================================
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
    removeItemsToCard,
    deleteItemFromCart,
    CurrentTotalAmount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
