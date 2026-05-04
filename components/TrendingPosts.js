import Link from "next/link";

async function getTrendingPosts() {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/posts/trending`, {
    cache: "no-store",
  });

  if (!res.ok) return [];

  return res.json();
}

export default async function TrendingPosts() {
  const posts = await getTrendingPosts();

  if (!posts.length) return null;

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">🔥 Trending Posts</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post._id}
            href={`/blog/${post.slug}`}
            className="border rounded-xl p-5 hover:shadow-md transition"
          >
            <p className="text-xs font-semibold mb-2 text-gray-500">
              {post.category || "General"}
            </p>

            <h3 className="font-bold text-lg mb-3 line-clamp-2">
              {post.title}
            </h3>

            <p className="text-sm text-gray-500">
              👁 {post.views || 0} views
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}