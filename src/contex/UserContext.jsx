import { createContext, useState, useContext, useEffect } from "react";
import { onAuthStateChangedListener } from "../routes/signin/firebase";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const value = {
    currentUser,
    setCurrentUser,
  };

  useEffect(() => {
    try {
      const isUserLoggedIn = onAuthStateChangedListener((user) => {
        setCurrentUser(() => user);
      });
      return isUserLoggedIn;
    } catch (error) {
      console.log(`There was fetch failure ${error}`);
    }
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
