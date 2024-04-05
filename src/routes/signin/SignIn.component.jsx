import React from "react";
import { signInWithGooglePopup } from "./firebase.js";
import { createUserDocumentFromAuth } from "./firebase.js";
const SignIn = () => {
  const loginUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocReference = await createUserDocumentFromAuth(user);
    console.log(userDocReference);
  };
  return (
    <div>
      <button onClick={loginUser}>Sign in with Google</button>
    </div>
  );
};

export default SignIn;
