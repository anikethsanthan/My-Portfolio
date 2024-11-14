import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp ({
  apiKey: process.env.REACT_APP__FIREBASE_API_apiKey,
  authDomain: process.env.REACT_APP__FIREBASE_API_authDomain,
  databaseURL: process.env.REACT_APP__FIREBASE_API_databaseURL,
  projectId:  process.env.REACT_APP__FIREBASE_API_projectId,
  storageBucket: process.env.REACT_APP__FIREBASE_API_storageBucket,
  messagingSenderId: process.env.REACT_APP__FIREBASE_API_messagingSenderId,
  appId: process.env.REACT_APP__FIREBASE_API_appId,
  measurementId: process.env.REACT_APP__FIREBASE_API_measurementId
});


export const db=firebaseApp.firestore();
