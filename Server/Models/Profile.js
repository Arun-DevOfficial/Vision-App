import mongoose from "mongoose";
import { configDotenv } from "dotenv";

// Load env file
configDotenv();

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "users", // Assuming you have a User model to reference
  },
  profileImageUrl: {
    type: String, // "string" should be `String`
    required: true,
  },
});

export default mongoose.model("profiles", ProfileSchema);
