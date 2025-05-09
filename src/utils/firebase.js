// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-F2uN_qpTcHrSCgPOeRKjGvpLlLx9Jnc",
  authDomain: "netflixgpt-58ae4.firebaseapp.com",
  projectId: "netflixgpt-58ae4",
  storageBucket: "netflixgpt-58ae4.firebasestorage.app",
  messagingSenderId: "12338852392",
  appId: "1:12338852392:web:a04f1b871d427de935fb1d",
  measurementId: "G-Q20HT89PGT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();