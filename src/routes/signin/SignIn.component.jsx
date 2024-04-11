import React from "react";
import LoginFrom from "../../components/Login/LoginFrom.jsx";
import {
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  auth,
} from "./firebase.js";
import { createUserDocumentFromAuth } from "./firebase.js";
import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
import Signupformv2 from "../../components/signup/Signupformv2.jsx";
import { useState } from "react";
const SignIn = () => {
  const [login, setLogin] = useState(true);
  const loginUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocReference = await createUserDocumentFromAuth(user);
    console.log(userDocReference);
  };

  useEffect(() => {
    const signRedirect = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const { user } = response;
        const myuserDocReference = await createUserDocumentFromAuth(user);
      }
    };
    signRedirect();
  }, []);
  return (
    <div>
      {login ? (
        <LoginFrom loginPage={setLogin} loginUser={loginUser} islogin={login} />
      ) : (
        <Signupformv2
          loginUser={loginUser}
          loginPage={setLogin}
          islogin={login}
        />
      )}
    </div>
  );
};

export default SignIn;
