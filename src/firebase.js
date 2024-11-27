import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCkJPpHxzlJIoJxzc-SRc620UwhuHQZJcM",
  authDomain: "sign-lang-b111e.firebaseapp.com",
  projectId: "sign-lang-b111e",
  storageBucket: "sign-lang-b111e.firebasestorage.app",
  messagingSenderId: "797182762561",
  appId: "1:797182762561:web:bdaede74b92b5a7e3570c0",
  measurementId: "G-94H3PKCZ09"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { firebase, auth, db };
