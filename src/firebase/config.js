import { initializeApp } from "firebase/app";
import {
    getFirestore
} from "firebase/firestore";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "tecnoshop-aguilar.firebaseapp.com",
  projectId: "tecnoshop-aguilar",
  storageBucket: "tecnoshop-aguilar.appspot.com",
  messagingSenderId: "515053350214",
  appId: "1:515053350214:web:a5c80c5cbe47d305058947"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();