import User from "../Models/Users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { generatePasswordResetToken } from "../utils/ResetToken.js";
import { handleEmailService } from "../utils/Email.js";
import dotenv from "dotenv";

dotenv.config(); //load env file
export const handleSignUp = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if all fields are provided
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check password length
    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password must be at least 8 characters long" });
    }

    // Check if email is already in use
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the new user
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    // Respond with a success message
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Server error" });
  }
};
export const handleSignIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if all fields are provided
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if the user exists
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ message: "Invalid email or password!" });
    }

    // Compare the provided password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password!" });
    }

    // Payload for the JWT
    const payload = {
      name: existingUser.name,
      email: existingUser.email,
    };

    // Generate token
    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: "24h", // Token expiration time
    });

    // Set the token in a cookie
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "none", // Updated to "strict" for better security
      secure: false, // Secure should be true in production
    });

    // Respond with success
    return res.status(200).json({ message: "User logged in successfully" });
  } catch (error) {
    console.error("Error during user login:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const handleSignOut = async (req, res) => {
  try {
    res.clearCookie("Token", {
      httpOnly: true,
      sameSite: "none",
      secure: false, // Secure should be true in production
    });

    return res.status(200).json({ message: "User logged out" });
  } catch (error) {
    console.error("Error during user logout:", error);
    return res.status(500).json({ message: "Server error during logout" });
  }
};

export const handleForGetPassword = async (req, res) => {
  const { email } = req.body;

  try {
    // Check if email is provided
    if (!email) {
      return res.status(400).json({ error: "Email is required!" });
    }

    // Find the user by email
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ error: "User not found" });
    }

    // Generate password reset token
    const token = generatePasswordResetToken(existingUser.email);
    const clientUrl = `${process.env.CLIENT_URL}/${token}`;

    // Send a mail for reset password
    const responsemail = await handleEmailService(
      existingUser.email,
      clientUrl,
      existingUser.name
    );

    // Check if mail was sent successfully
    if (responsemail) {
      return res.status(200).json({ message: "Email sent for password reset" });
    } else {
      return res.status(500).json({ error: "Failed to send email" });
    }
  } catch (error) {
    console.error("Error in handleForGetPassword:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while processing your request" });
  }
};

export const handleResetPassword = () => {};
