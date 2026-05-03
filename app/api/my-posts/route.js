import { getServerSession } from "next-auth";
import { connectDB } from "@/lib/mongodb";
import Post from "@/models/Post";
import { authOptions } from "@/lib/auth";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return Response.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    await connectDB();

    const posts = await Post.find({
      author: session.user.email,
    }).sort({ createdAt: -1 });

    return Response.json(posts);
  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}