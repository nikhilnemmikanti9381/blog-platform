import { connectDB } from "@/lib/mongodb";
import Post from "@/models/Post";

export async function GET(req) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const slug = searchParams.get("slug");

    if (!category) {
      return Response.json([], { status: 200 });
    }

    const posts = await Post.find({
      category,
      slug: { $ne: slug }, // exclude current post
    })
      .sort({ createdAt: -1 })
      .limit(3)
      .lean();

    return Response.json(posts);
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch related posts" },
      { status: 500 }
    );
  }
}