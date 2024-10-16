// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ,
  authDomain: "learnlab-53897.firebaseapp.com",
  projectId: "learnlab-53897",
  storageBucket: "learnlab-53897.appspot.com",
  messagingSenderId: "961353677422",
  appId: "1:961353677422:web:9fb97e1bc51ea5896f847f",
  measurementId: "G-JSP0QHGCE4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);