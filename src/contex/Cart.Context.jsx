import { createContext, useEffect, useReducer } from "react";

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

const CART_ACTION_TYPE = {
  CART_ITEMS: `SET_CART_ITEMS`,
  IS_CART_OPEN: `SET_CART_OPEN`,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPE.CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPE.IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };
    default:
      throw new Error(`Error found type :${type} does not exist`);
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

export const CartContextprovider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_CART_STATE);

  const { isCartOpen, cartItems, totalQuantity, CurrentTotalAmount } = state;

  // ========================================
  //OPerations

  const additemsToCart = (itemToAdd) => {
    const newCartItem = checkproductExist(cartItems, itemToAdd);
    updateCartItemsReducers(newCartItem);
  };

  const removeItemsToCard = (itemToRemove) => {
    const newCartItem = removeProductFromCard(cartItems, itemToRemove);
    updateCartItemsReducers(newCartItem);
  };

  const deleteItemFromCart = (itemToDelete) => {
    const newCartItem = removeCurrentItemFromCart(cartItems, itemToDelete);
    updateCartItemsReducers(newCartItem);
  };

  const setIsCartOpen = () => {
    return dispatch({ type: CART_ACTION_TYPE.IS_CART_OPEN });
  };

  // ==========================================================================

  const updateCartItemsReducers = (newCartItem) => {
    const totalAmountPrice = newCartItem.reduce((acc, currentProduct) => {
      return acc + currentProduct.quantity * currentProduct.price;
    }, 0);

    const totalItems = newCartItem.reduce((acc, current) => {
      const { quantity } = current;
      return acc + quantity;
    }, 0);

    dispatch({
      type: CART_ACTION_TYPE.CART_ITEMS,
      payload: {
        cartItems: newCartItem,
        CurrentTotalAmount: totalAmountPrice,
        totalQuantity: totalItems,
      },
    });
  };

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
