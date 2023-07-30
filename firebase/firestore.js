// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Required for side-effects

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpGR8pNDfgo4AkuZvi0k7R7DO2OM_OMH8",
  authDomain: "nebulo-alpha.firebaseapp.com",
  projectId: "nebulo-alpha",
  storageBucket: "nebulo-alpha.appspot.com",
  messagingSenderId: "250789120668",
  appId: "1:250789120668:web:8bb76849aed22e7eacfb59",
  measurementId: "G-59N1NGJSL6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
