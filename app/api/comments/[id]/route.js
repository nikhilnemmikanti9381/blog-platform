import { getServerSession } from "next-auth";
import { connectDB } from "@/lib/mongodb";
import Comment from "@/models/Comment";
import { authOptions } from "@/lib/auth";

export async function DELETE(req, { params }) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "admin") {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();

    const comment = await Comment.findByIdAndDelete(params.id);

    if (!comment) {
      return Response.json({ error: "Comment not found" }, { status: 404 });
    }

    return Response.json({ message: "Comment deleted successfully" });
  } catch (error) {
    return Response.json(
      { error: error.message || "Failed to delete comment" },
      { status: 500 }
    );
  }
}