// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBtaxfLkNyDPFL0ZV144tRNFrbIaNxhiKQ",
  authDomain: "eshop-4f72b.firebaseapp.com",
  projectId: "eshop-4f72b",
  storageBucket: "eshop-4f72b.appspot.com",
  messagingSenderId: "218657328471",
  appId: "1:218657328471:web:2458e3e9a5365496e68212",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
