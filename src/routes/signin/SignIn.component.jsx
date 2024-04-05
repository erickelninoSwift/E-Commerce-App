import React from "react";
import {
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  auth,
} from "./firebase.js";
import { createUserDocumentFromAuth } from "./firebase.js";
import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
const SignIn = () => {
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
      <button onClick={loginUser}>Sign in with Google</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with With Redirect
      </button>
    </div>
  );
};

export default SignIn;
