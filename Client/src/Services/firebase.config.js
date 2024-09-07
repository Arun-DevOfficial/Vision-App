import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
  //API KEY : Required
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
