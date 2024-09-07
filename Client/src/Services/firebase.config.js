import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
  apiKey: "AIzaSyDli0qSPortc4Fbg59madHuav0fa1Py0rg",
  authDomain: "vision-defense.firebaseapp.com",
  projectId: "vision-defense",
  storageBucket: "vision-defense.appspot.com",
  messagingSenderId: "371492726250",
  appId: "1:371492726250:web:529259e4206dd4dda5fe93",
  measurementId: "G-TGRKMRNLT4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
