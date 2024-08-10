import express from "express";
import {
  handleSignUp,
  handleSignIn,
  handleSignOut,
  handleForGetPassword,
  handleResetPassword,
  handleProfilePhotoUpload,
  handleRemoveProfilePhoto,
} from "../Controllers/auth.js";
import VerifyUser from "../Middleware/VerifyUser.js";
import cookieParser from "cookie-parser";

// Initialize the router
const router = express.Router();
router.use(cookieParser());

// Define routes
router.post("/signup", handleSignUp);
router.post("/signin", handleSignIn);
router.post("/signout", VerifyUser, handleSignOut); // Requires authentication
router.post("/forgetpassword", handleForGetPassword);
router.put("/resetpassword/:token", handleResetPassword);
router.post("/profile/upload", VerifyUser, handleProfilePhotoUpload); // Requires authentication
router.delete("/profile/remove", VerifyUser, handleRemoveProfilePhoto);

// Export the router using ES6 syntax
export default router;
