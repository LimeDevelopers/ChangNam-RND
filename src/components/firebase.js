import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseApps = firebase.initializeApp({
  apiKey: "AIzaSyDQHhhn10jil_D37VuP21Ty72GQGLK-qbw",
  authDomain: "capstone-925e4.firebaseapp.com",
  projectId: "capstone-925e4",
  storageBucket: "capstone-925e4.appspot.com",
  messagingSenderId: "250420799039",
  appId: "1:250420799039:web:1d00b6afed9e71a1c87a8a",
  measurementId: "G-R8EEX7K1WZ",
});

export const store = firebaseApps.firestore();
export const auth = firebaseApps.auth();
export const storage = firebaseApps.storage();

export default firebaseApps;
