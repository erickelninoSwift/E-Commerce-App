// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrTeuxSJiUkIDqkuQTO7K0kcaPw8C9dCE",
  authDomain: "zando-shop.firebaseapp.com",
  projectId: "zando-shop",
  storageBucket: "zando-shop.appspot.com",
  messagingSenderId: "629508849396",
  appId: "1:629508849396:web:76ad0ed38330b8f6faa8a1",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, provider);
};

export const jackpotDB = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(jackpotDB, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  const { displayName, email } = userAuth;
  const createdAt = new Date();
  if (!userSnapshot.exists()) {
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(`User could not be registred ${error}`);
    }
  }

  return userDocRef;
};
