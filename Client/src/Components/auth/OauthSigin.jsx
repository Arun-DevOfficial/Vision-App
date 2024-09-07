import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../Services/firebase.config";
import { toast } from "react-toastify";

const googleProvider = new GoogleAuthProvider();

export const handleGoogleSignIn = () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      // Signed in
      const user = result.user;
      console.log(user);
      toast.success("Google Sign-In successful!");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      toast.error(`Google Sign-In failed: ${errorMessage}`);
    });
};