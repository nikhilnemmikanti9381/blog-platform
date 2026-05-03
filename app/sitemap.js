import { connectDB } from "@/lib/mongodb";
import Post from "@/models/Post";

export default async function sitemap() {
  await connectDB();

  const posts = await Post.find();

  const postUrls = posts.map((post) => ({
    url: `http://localhost:3000/blog/${post.slug || post._id}`,
    lastModified: post.createdAt,
  }));

  return [
    {
      url: "http://localhost:3000",
      lastModified: new Date(),
    },
    ...postUrls,
  ];
}