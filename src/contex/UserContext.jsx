import { createContext, useContext, useEffect, useReducer } from "react";
import { onAuthStateChangedListener } from "../routes/signin/firebase";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

const STATE_TYPE = {
  SET_CURRNT_USER: "SET_CURRENT_USER",
};

const INITIAL_STATE = {
  currentUser: null,
};
const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case STATE_TYPE.SET_CURRNT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`The type provided ${type} does not exist `);
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const { currentUser } = state;

  const setCurrentUser = (user) => {
    dispatch({ type: STATE_TYPE.SET_CURRNT_USER, payload: user });
  };
  const value = {
    currentUser,
    setCurrentUser,
  };

  useEffect(() => {
    try {
      const isUserLoggedIn = onAuthStateChangedListener((user) => {
        setCurrentUser(user);
      });
      return isUserLoggedIn;
    } catch (error) {
      console.log(`There was fetch failure ${error}`);
    }
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
