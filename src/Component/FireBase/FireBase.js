import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/firebase-auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9uw3zqgtx3ziYoN2glvhrB0tzr4VUBOA",
  authDomain: "react-ecommerce-cccf2.firebaseapp.com",
  databaseURL: "https://react-ecommerce-cccf2.firebaseio.com",
  projectId: "react-ecommerce-cccf2",
  storageBucket: "react-ecommerce-cccf2.appspot.com",
  messagingSenderId: "35666583052",
  appId: "1:35666583052:web:0a6046b0b57118fd709829",
  measurementId: "G-THBC2ZW8G4",
};
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export const getCurrentUser = () => {
  return new Promise((res, rej) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      res(userAuth);
    }, rej);
  });
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
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
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};
export const convertSnapshotToObj = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      id: doc.id,
      routeName: encodeURI(title.toLowerCase()),
      title,
      items,
    };
  });
  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

export default firebase;
