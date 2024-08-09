import express from "express";
import { config } from "dotenv";
import connectDB from "./Config/DB.js";
import UsersRouter from "./Views/UserRouter.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
config(); // Load environment variables

// Port
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json()); // body parser
app.use(cookieParser()); // read the cookie
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Routers
app.use("/api/auth", UsersRouter); // user router for authenticate

// Connect to the database and start the server
app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(`App is running on port ${PORT}...`);
    console.log("Connected to the database");
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
  }
});
