// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBP7yAXO0FM2o7KPYnY7CPUFl-7b-Z8t9o",
  authDomain: "fanspace-469ca.firebaseapp.com",
  projectId: "fanspace-469ca",
  storageBucket: "fanspace-469ca.appspot.com",
  messagingSenderId: "470972403847",
  appId: "1:470972403847:web:bcab22a30c289aff4aa822",
  measurementId: "G-6GL4JW55QD"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
// export const FIREBASE_ANALYTICS = getAnalytics(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);