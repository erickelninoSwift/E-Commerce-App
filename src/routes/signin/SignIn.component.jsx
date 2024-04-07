import React from "react";
import {
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  auth,
} from "./firebase.js";
import { createUserDocumentFromAuth } from "./firebase.js";
import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
import Signupformv2 from "../../components/signup/Signupformv2.jsx";
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
      <Signupformv2 loginUser={loginUser} />
      <button onClick={loginUser} style={{ width: "40%" }}>
        Sign in with Google
      </button>
    </div>
  );
};

export default SignIn;
