import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  image: {
    type: String,
    default: process.env.DEFAULT_IMAGE_URL,
  },
});

export const Profile = mongoose.model("profiles", ProfileSchema);
