import { getServerSession } from "next-auth";
import { connectDB } from "@/lib/mongodb";
import Post from "@/models/Post";
import { authOptions } from "@/lib/auth";

export async function GET(req, { params }) {
  try {
    await connectDB();

    const isMongoId = /^[0-9a-fA-F]{24}$/.test(params.slug);

    const post = await Post.findOne(
      isMongoId
        ? { $or: [{ slug: params.slug }, { _id: params.slug }] }
        : { slug: params.slug }
    );

    if (!post) {
      return Response.json(
        { error: "Post not found" },
        { status: 404 }
      );
    }

    return Response.json(post);
  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(req, { params }) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return Response.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    await connectDB();

    const isMongoId = /^[0-9a-fA-F]{24}$/.test(params.slug);

    const post = await Post.findOne(
      isMongoId
        ? { $or: [{ slug: params.slug }, { _id: params.slug }] }
        : { slug: params.slug }
    );

    if (!post) {
      return Response.json(
        { error: "Post not found" },
        { status: 404 }
      );
    }

    if (post.author !== session.user.email) {
      return Response.json(
        { error: "Forbidden: You can only edit your own posts" },
        { status: 403 }
      );
    }

    const body = await req.json();

    post.title = body.title;
    post.content = body.content;
    post.image = body.image || "";

    await post.save();

    return Response.json(post);
  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return Response.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    await connectDB();

    const isMongoId = /^[0-9a-fA-F]{24}$/.test(params.slug);

    const post = await Post.findOne(
      isMongoId
        ? { $or: [{ slug: params.slug }, { _id: params.slug }] }
        : { slug: params.slug }
    );

    if (!post) {
      return Response.json(
        { error: "Post not found" },
        { status: 404 }
      );
    }

    if (post.author !== session.user.email) {
      return Response.json(
        { error: "Forbidden: You can only delete your own posts" },
        { status: 403 }
      );
    }

    await Post.findByIdAndDelete(post._id);

    return Response.json({
      message: "Post deleted successfully",
    });
  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}