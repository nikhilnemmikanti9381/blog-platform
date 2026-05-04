import Link from "next/link";

async function getRelatedPosts(category, slug) {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const res = await fetch(
    `${baseUrl}/api/posts/related?category=${category}&slug=${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) return [];

  return res.json();
}

export default async function RelatedPosts({ category, slug }) {
  const posts = await getRelatedPosts(category, slug);

  if (!posts.length) return null;

  return (
    <section className="max-w-3xl mx-auto px-6 py-10 border-t">
      <h2 className="text-xl font-bold mb-5">Related Posts</h2>

      <div className="space-y-4">
        {posts.map((post) => (
          <Link
            key={post._id}
            href={`/blog/${post.slug}`}
            className="block border rounded-lg p-4 hover:shadow transition"
          >
            <p className="text-xs text-gray-500 mb-1">
              {post.category}
            </p>

            <h3 className="font-semibold">
              {post.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}