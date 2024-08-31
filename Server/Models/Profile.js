import mongoose from "mongoose";
import { configDotenv } from "dotenv";

// Load env file
configDotenv();

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: 'users', // Assuming you have a User model to reference
  },
  profileImageUrl: {
    type: String, // "string" should be `String`
    default: process.env.DEFAULT_IMAGE_URL,
  },
});

export default mongoose.model('profiles', ProfileSchema);
