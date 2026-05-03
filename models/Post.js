import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: String,
  slug: {
    type: String,
    unique: true,
  },
  content: String,
  author: String,
  image: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Post || mongoose.model("Post", PostSchema);