import { connectDB } from "@/lib/mongodb";
import Post from "@/models/Post";

// GET posts with pagination
export async function GET(req) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);

    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 9;

    const skip = (page - 1) * limit;

    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    const totalPosts = await Post.countDocuments();

    return Response.json({
      posts,
      currentPage: page,
      totalPages: Math.ceil(totalPosts / limit),
    });

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// CREATE new post
export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    if (!body.title || !body.content) {
      return Response.json(
        { error: "Title and content are required" },
        { status: 400 }
      );
    }

    const newPost = await Post.create({
      title: body.title,
      content: body.content,
      author: body.author || "Anonymous",
      image: body.image || "",
      category: body.category || "General",
    });

    return Response.json(newPost, { status: 201 });

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}