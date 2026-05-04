import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import BookmarkButton from "@/components/BookmarkButton";
import ShareButtons from "@/components/ShareButtons";

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

function getReadingTime(content) {
  const words = content?.trim().split(/\s+/).length || 0;
  return Math.max(1, Math.ceil(words / 200));
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

  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

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
        <div className="flex items-center justify-between gap-4 mb-4">
          <span className="inline-block text-xs font-semibold bg-black text-white px-3 py-1 rounded-full">
            {post.category || "General"}
          </span>

          <BookmarkButton postId={post._id} />
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          {post.title}
        </h1>

        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>

          <div>
            <p className="text-sm font-semibold">
              {post.author || "Anonymous"}
            </p>

            <div className="text-xs text-gray-500 space-y-1">
              <p>
                {post.createdAt
                  ? new Date(post.createdAt).toLocaleDateString()
                  : "Published recently"}
              </p>

              <p>👁 {post.views || 0} views</p>
              <p>⏱ {getReadingTime(post.content)} min read</p>
            </div>
          </div>
        </div>

        <div className="text-lg leading-8 text-gray-800 space-y-6">
          {post.content?.split("\n").map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>

        {/* SHARE BUTTONS */}
        <ShareButtons
          title={post.title}
          url={`${baseUrl}/blog/${post.slug}`}
        />
      </article>

      <RelatedPosts category={post.category} slug={post.slug || post._id} />

      <section className="max-w-3xl mx-auto px-6 pb-12">
        <CommentSection postId={post._id} />
      </section>
    </main>
  );
}