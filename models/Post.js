import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: String,

  slug: {
    type: String,
    unique: true,
    index: true,
  },

  content: String,

  author: {
    type: String,
    index: true,
  },

  image: String,

  category: {
    type: String,
    default: "General",
    index: true,
  },

  views: {
    type: Number,
    default: 0,
    index: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
    index: true,
  },
});

PostSchema.index({
  title: "text",
  content: "text",
});

export default mongoose.models.Post || mongoose.model("Post", PostSchema);