import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    length: 8,
    required: true,
  },
});

// Create and export the model
const User = mongoose.model("users", UserSchema);
export default User;
