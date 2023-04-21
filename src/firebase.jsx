// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2pxi5rhCF8jUyrm_r-HfP_77jtvHYMac",
  authDomain: "instantchat-app.firebaseapp.com",
  projectId: "instantchat-app",
  storageBucket: "instantchat-app.appspot.com",
  messagingSenderId: "330887135853",
  appId: "1:330887135853:web:e908bd309df7330c77b564"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);