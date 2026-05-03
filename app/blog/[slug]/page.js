import CommentSection from "@/components/CommentSection";

async function getPost(slug) {
  if (!slug) return null;

  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;

  return res.json();
}

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);

  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  if (!post) {
    return {
      title: "Post Not Found | Blog Platform",
      description: "The requested blog post could not be found.",
    };
  }

  const cleanText =
    post.content
      ?.replace(/<[^>]*>/g, "")
      .replace(/\n/g, " ")
      .slice(0, 160) || "Read this blog post.";

  const url = `${baseUrl}/blog/${post.slug}`;

  return {
    title: `${post.title} | Blog Platform`,
    description: cleanText,

    openGraph: {
      title: post.title,
      description: cleanText,
      url,
      type: "article",
      images: post.image ? [{ url: post.image }] : [],
    },

    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: cleanText,
      images: post.image ? [post.image] : [],
    },

    alternates: {
      canonical: url,
    },
  };
}

export default async function BlogPage({ params }) {
  const post = await getPost(params.slug);

  if (!post) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>Post not found.</p>
      </main>
    );
  }

  return (
    <main className="bg-white text-black min-h-screen">
      {post.image && (
        <div className="w-full h-[400px] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <article className="max-w-3xl mx-auto px-6 py-12">
        <span className="inline-block text-xs font-semibold bg-black text-white px-3 py-1 rounded-full mb-4">
          {post.category || "General"}
        </span>

        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          {post.title}
        </h1>

        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>

          <div>
            <p className="text-sm font-semibold">
              {post.author || "Anonymous"}
            </p>

            <p className="text-xs text-gray-500">
              {post.createdAt
                ? new Date(post.createdAt).toLocaleDateString()
                : "Published recently"}
            </p>
          </div>
        </div>

        <div className="text-lg leading-8 text-gray-800 space-y-6">
          {post.content?.split("\n").map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
      </article>

      <section className="max-w-3xl mx-auto px-6 pb-12">
        <CommentSection postId={post._id} />
      </section>
    </main>
  );
}