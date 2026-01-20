// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKmA7VPUu7UMem9tSB0MrfGwXp8HEEUgE",
  authDomain: "parichat-005.firebaseapp.com",
  projectId: "parichat-005",
  storageBucket: "parichat-005.firebasestorage.app",
  messagingSenderId: "139338138996",
  appId: "1:139338138996:web:a508dff687e879f20a5821",
  measurementId: "G-60N5KR8ZQM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const db = getFirestore(app);
