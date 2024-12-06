import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://arunkum:dev_2050@cluster0.jaxeuud.mongodb.net/Restaurant_App?retryWrites=true&w=majority&appName=Cluster0");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exit the process with a failure code
  }
};

export default connectDB;
