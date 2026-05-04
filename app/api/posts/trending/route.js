import { connectDB } from "@/lib/mongodb";
import Post from "@/models/Post";

export async function GET() {
  try {
    await connectDB();

    const posts = await Post.find()
      .sort({ views: -1 })
      .limit(5)
      .lean();

    return Response.json(posts);
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch trending posts" },
      { status: 500 }
    );
  }
}