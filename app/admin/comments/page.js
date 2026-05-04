import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import Comment from "@/models/Comment";
import User from "@/models/User";
import Post from "@/models/Post";
import AdminDeleteCommentButton from "@/components/AdminDeleteCommentButton";

export default async function AdminCommentsPage() {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "admin") {
    return (
      <main className="p-10 text-center">
        <h1 className="text-2xl font-bold">Access Denied</h1>
      </main>
    );
  }

  await connectDB();

  const comments = await Comment.find()
    .populate("user", "email")
    .populate("post", "title slug")
    .sort({ createdAt: -1 })
    .lean();

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Moderate Comments</h1>

      {comments.length === 0 ? (
        <p className="text-gray-600">No comments yet.</p>
      ) : (
        <div className="space-y-4">
          {comments.map((comment) => (
            <div
              key={comment._id.toString()}
              className="border rounded-xl p-5 flex justify-between gap-4"
            >
              <div>
                <p className="text-sm text-gray-500 mb-2">
                  By {comment.user?.email || "Unknown user"}
                </p>

                <p className="text-gray-800 mb-3">{comment.content}</p>

                <p className="text-xs text-gray-500">
                  Post: {comment.post?.title || "Deleted post"}
                </p>
              </div>

              <AdminDeleteCommentButton
                commentId={comment._id.toString()}
              />
            </div>
          ))}
        </div>
      )}
    </main>
  );
}