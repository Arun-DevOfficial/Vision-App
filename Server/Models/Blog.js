import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  banner: {
    type: String,
    required: true,
  },
  content: {
    type: Array, // You can define the type more specifically if needed, like [String] or [Object].
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  publishedAt: {
    type: Date,
    default: Date.now,
  },
  tags: {
    type: [String], // Assuming tags are an array of strings.
    required: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now, // Optional: this can be updated automatically with pre-save hooks.
  },
  comments: [
    {
      author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  draft: {
    type: Boolean,
    default: false,
  },
});

const BlogModel = mongoose.model("Blog", BlogSchema);
export default BlogModel;
