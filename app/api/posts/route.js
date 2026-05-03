import { connectDB } from "@/lib/mongodb";
import Post from "@/models/Post";

// GET all posts
export async function GET() {
  try {
    await connectDB();

    const posts = await Post.find().sort({
      createdAt: -1,
    });

    return Response.json(posts);

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

    // basic validation
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
    });

    return Response.json(newPost, { status: 201 });

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}