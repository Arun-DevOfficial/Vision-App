import jwt from "jsonwebtoken";
import dotenv from "dotenv";

//Load env file
dotenv.config();

export const generatePasswordResetToken = (email) => {
  const token = jwt.sign({ email }, process.env.SECRET_KEY, {
    expiresIn: "30m",
  });
  return token;
};

export const verifyPasswordResetToken = (token) => {
  if (!token) {
    throw new Error("No token provided");
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    return decoded;
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      throw new Error("Token has expired");
    }
    throw new Error("Invalid token");
  }
};
