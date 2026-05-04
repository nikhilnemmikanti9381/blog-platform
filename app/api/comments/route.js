import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { connectDB } from "@/lib/mongodb";
import Comment from "@/models/Comment";
import User from "@/models/User";
import { authOptions } from "@/lib/auth";
import { rateLimit } from "@/lib/rateLimit";

export async function GET(req) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const postId = searchParams.get("postId");

    if (!postId) {
      return NextResponse.json(
        { error: "Post ID is required" },
        { status: 400 }
      );
    }

    const comments = await Comment.find({ post: postId })
      .populate("user", "name email")
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json(comments);
  } catch (error) {
    console.error("GET COMMENTS ERROR:", error);

    return NextResponse.json(
      { error: error.message || "Failed to fetch comments" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await connectDB();

    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json(
        { error: "You must be logged in to comment" },
        { status: 401 }
      );
    }

    const userEmail = session.user.email;

    const limit = rateLimit(`comment:${userEmail}`, 5, 60 * 1000);

    if (!limit.success) {
      return NextResponse.json(
        { error: "Too many comments. Please wait a minute." },
        { status: 429 }
      );
    }

    const { postId, content } = await req.json();

    if (!postId || !content) {
      return NextResponse.json(
        { error: "Post ID and content are required" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ email: userEmail });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    const comment = await Comment.create({
      post: postId,
      user: user._id,
      content: content.trim(),
    });

    const populatedComment = await Comment.findById(comment._id)
      .populate("user", "name email")
      .lean();

    return NextResponse.json(populatedComment, { status: 201 });
  } catch (error) {
    console.error("POST COMMENT ERROR:", error);

    return NextResponse.json(
      { error: error.message || "Failed to create comment" },
      { status: 500 }
    );
  }
}