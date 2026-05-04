import { getServerSession } from "next-auth";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import { authOptions } from "@/lib/auth";

export async function POST(req) {
  try {
    await connectDB();

    const session = await getServerSession(authOptions);

    if (!session) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { postId } = await req.json();

    const user = await User.findOne({ email: session.user.email });

    if (!user) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }

    const isBookmarked = user.bookmarks.includes(postId);

    if (isBookmarked) {
      user.bookmarks = user.bookmarks.filter(
        (id) => id.toString() !== postId
      );
    } else {
      user.bookmarks.push(postId);
    }

    await user.save();

    return Response.json({
      message: isBookmarked ? "Removed bookmark" : "Bookmarked",
      bookmarks: user.bookmarks,
    });
  } catch (error) {
    return Response.json(
      { error: "Failed to update bookmarks" },
      { status: 500 }
    );
  }
}