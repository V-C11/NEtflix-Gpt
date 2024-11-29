// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2jPueqhkfBJLBPsaq2_6S-_AwgEt5Wb0",
  authDomain: "netflixgpt-fed6c.firebaseapp.com",
  projectId: "netflixgpt-fed6c",
  storageBucket: "netflixgpt-fed6c.appspot.com",
  messagingSenderId: "19755897581",
  appId: "1:19755897581:web:32b752a079c6d90152f2e4",
  measurementId: "G-9HBJBBTVTX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()
