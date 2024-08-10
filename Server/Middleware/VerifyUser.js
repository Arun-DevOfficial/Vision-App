import jwt from "jsonwebtoken";
import User from "../Models/Users.js";

const handleVerifyUser = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    // Check if token is provided
    if (!token) {
      return res.status(401).json({
        auth: false,
        message:
          "Access denied. Please contact the administrator for access privileges.",
      });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const { email } = decoded;

    // Find the user by email
    const decodedUser = await User.findOne({ email });

    // Check if the user exists
    if (!decodedUser) {
      return res
        .status(401)
        .json({ error: "User not found and invalid token" });
    }

    // Attach the user data to the request object
    req.user = decodedUser;
    next();
  } catch (error) {
    console.error("Token verification failed:", error);
    return res.status(500).json({ error: "Failed to authenticate token" });
  }
};

export default handleVerifyUser;
