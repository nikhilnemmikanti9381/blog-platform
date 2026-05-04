import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import Post from "@/models/Post";
import Link from "next/link";
import AdminDeletePostButton from "@/components/AdminDeletePostButton";

export default async function AdminPostsPage() {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "admin") {
    return (
      <main className="p-10 text-center">
        <h1 className="text-2xl font-bold">Access Denied</h1>
      </main>
    );
  }

  await connectDB();

  const posts = await Post.find().sort({ createdAt: -1 }).lean();

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Manage Posts</h1>

      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post._id.toString()}
            className="border rounded-xl p-5 flex justify-between items-center gap-4"
          >
            <div>
              <p className="text-sm text-gray-500">
                {post.category || "General"}
              </p>

              <h2 className="font-bold">{post.title}</h2>

              <p className="text-xs text-gray-400">
                👁 {post.views || 0}
              </p>
            </div>

            <div className="flex gap-3">
              <Link
                href={`/blog/${post.slug || post._id}`}
                className="px-3 py-1 border rounded"
              >
                View
              </Link>

              <AdminDeletePostButton slug={post.slug || post._id.toString()} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}