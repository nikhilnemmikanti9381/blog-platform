import { getServerSession } from "next-auth";
import Link from "next/link";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import Post from "@/models/Post";
import { authOptions } from "@/lib/auth";

export default async function BookmarksPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">Saved Posts</h1>
        <p className="text-gray-600">Please log in to view your saved posts.</p>
      </main>
    );
  }

  await connectDB();

  const user = await User.findOne({ email: session.user.email })
    .populate("bookmarks")
    .lean();

  const bookmarks = user?.bookmarks || [];

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Saved Posts</h1>

      {bookmarks.length === 0 ? (
        <p className="text-gray-600">You haven’t saved any posts yet.</p>
      ) : (
        <div className="space-y-5">
          {bookmarks.map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug}`}
              className="block border rounded-xl p-5 hover:shadow-md transition"
            >
              <p className="text-xs text-gray-500 mb-2">
                {post.category || "General"}
              </p>

              <h2 className="text-xl font-bold mb-2">{post.title}</h2>

              <p className="text-sm text-gray-500">
                👁 {post.views || 0} views
              </p>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}