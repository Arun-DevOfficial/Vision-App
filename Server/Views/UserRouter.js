import express from "express";
import {
  handleSignUp,
  handleSignIn,
  handleSignOut,
  handleForGetPassword,
  handleResetPassword,
} from "../Controllers/auth.js";
import VerifyUser from "../Middleware/VerifyUser.js";
import cookieParser from "cookie-parser";

// Initialize the router
const router = express.Router();
router.use(cookieParser());
// Define routes
router.post("/signup", handleSignUp);
router.post("/signin", handleSignIn);
router.post("/signout", VerifyUser, handleSignOut);
router.post("/forgetpassword", handleForGetPassword);
router.put("/resetpassword/:token", handleResetPassword);
// Export the router using ES6 syntax
export default router;
