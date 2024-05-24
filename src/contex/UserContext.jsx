import {
  createContext,
  useState,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { onAuthStateChangedListener } from "../routes/signin/firebase";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

const STATE_TYPE = {
  SET_CURRNT_USER: "SET_CURRENT_USER",
};
const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case STATE_TYPE.SET_CURRNT_USER:
      return {
        currentUser: payload,
      };
    default:
      throw new Error(`The type prpvided ${type} does not exist `);
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, {
    currentUser: null,
  });
  const { currentUser } = state;

  const setCurrentUser = (user) => {
    dispatch({ type: STATE_TYPE, payload: user });
  };
  const value = {
    currentUser,
    setCurrentUser,
  };

  useEffect(() => {
    try {
      const isUserLoggedIn = onAuthStateChangedListener((user) => {
        setCurrentUser(() => user);
      });
      isUserLoggedIn();
    } catch (error) {
      console.log(`There was fetch failure ${error}`);
    }
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
