import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCPAG6quwt6XFqRkOsw5--HliP649Vboes",
  authDomain: "meh-clothing.firebaseapp.com",
  databaseURL: "https://meh-clothing.firebaseio.com",
  projectId: "meh-clothing",
  storageBucket: "meh-clothing.appspot.com",
  messagingSenderId: "1049713270935",
  appId: "1:1049713270935:web:2ff794fa78d414bca709d2",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // console.log("userRef from firebase.utils", userRef);
  const snapShot = await userRef.get();
  // console.log("snapShot", snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
