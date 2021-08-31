import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAt8NsAZKqlWlrejZrzUrCt2oJie-RwL_4",
  authDomain: "indumentaria-c5205.firebaseapp.com",
  projectId: "indumentaria-c5205",
  storageBucket: "indumentaria-c5205.appspot.com",
  messagingSenderId: "1030754066097",
  appId: "1:1030754066097:web:082dec1efb1c3c0bba4c90",
});

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);
