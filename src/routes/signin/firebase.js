// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

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

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

//  Sign in with Google pop up
export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, googleProvider);
};

// Sign in with Google redicrect
export const signInWithGoogleRedirect = () => {
  return signInWithRedirect(auth, googleProvider);
};

export const jackpotDB = getFirestore();

export const addDocumentToCollection = async (collectionKey, objectToAdd) => {
  const collectionRef = collection(jackpotDB, collectionKey);
  const batch = writeBatch(jackpotDB);

  objectToAdd.forEach((element) => {
    const docRef = doc(collectionRef, element.title.toLowerCase());
    batch.set(docRef, element);
  });
  await batch.commit();
  console.log("done");
};

export const getCategoriesandDocument = async () => {
  const collectionref = collection(jackpotDB, "Categories");
  const myQuery = query(collectionref);
  const querySnapshot = await getDocs(myQuery);

  const categoryMap = querySnapshot.docs.reduce((acc, docuSnapshot) => {
    const { title, items } = docuSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  if (!userAuth) return;
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
        ...additionalInfo,
      });
    } catch (error) {
      console.log(`User could not be registred ${error}`);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailPassword = async (
  email,
  passwordr,
  displayName
) => {
  if (!email || !passwordr) return;

  return await createUserWithEmailAndPassword(
    auth,
    email,
    passwordr,
    displayName
  );
};

export const signInAuthUserWithEmailPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUserAuth = async () => signOut(auth);

export const onAuthStateChangedListener = (callback) => {
  return onAuthStateChanged(auth, callback);
};
