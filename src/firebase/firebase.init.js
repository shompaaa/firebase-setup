
//! DO NOT share firebase config online

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeSmaMT2UqSQMHRo4EZOHmgbZpck91mXI",
  authDomain: "fir-auth-da3ac.firebaseapp.com",
  projectId: "fir-auth-da3ac",
  storageBucket: "fir-auth-da3ac.firebasestorage.app",
  messagingSenderId: "996708350409",
  appId: "1:996708350409:web:554f76c503321995645018"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)