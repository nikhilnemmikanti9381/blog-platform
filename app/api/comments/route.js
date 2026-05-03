import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import dbConnect from "@/lib/mongodb";
import Comment from "@/models/Comment";
import User from "@/models/User";
import { authOptions } from "@/lib/auth";

export async function GET(req) {
  try {
    await dbConnect();

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
    await dbConnect();

    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json(
        { error: "You must be logged in to comment" },
        { status: 401 }
      );
    }

    const { postId, content } = await req.json();

    if (!postId || !content) {
      return NextResponse.json(
        { error: "Post ID and content are required" },
        { status: 400 }
      );
    }

    const userId = session.user.id || session.user._id;

    if (!userId) {
      return NextResponse.json(
        { error: "User ID missing from session" },
        { status: 400 }
      );
    }

    const comment = await Comment.create({
      post: postId,
      user: userId,
      content,
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