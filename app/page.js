import Link from "next/link";
import SearchPosts from "@/components/SearchPosts";

async function getPosts() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) return [];

  return res.json();
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="bg-black text-white">
      {/* PARALLAX HERO */}
      <section
        className="min-h-screen bg-fixed bg-cover bg-center flex items-center justify-center px-6 relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Build. Write. Share.
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 mb-10">
            A modern full-stack blog platform built with Next.js, MongoDB,
            Tailwind CSS, and authentication.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/create"
              className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
            >
              Create Blog
            </Link>

            <Link
              href="#posts"
              className="border border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition"
            >
              Explore Blogs
            </Link>
          </div>
        </div>
      </section>

      {/* SECOND PARALLAX SECTION */}
      <section
        className="min-h-[70vh] bg-fixed bg-cover bg-center flex items-center justify-center px-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1974&auto=format&fit=crop')",
        }}
      >
        <div className="bg-black/75 p-10 rounded-3xl max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-4">
            Your Ideas Deserve a Platform
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Publish stories, build your voice, and grow your own content
            platform with a production-ready architecture.
          </p>
        </div>
      </section>

      {/* BLOG FEED */}
      <section id="posts" className="py-24 px-6 bg-gray-100 text-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Latest Blogs
          </h2>

          <p className="text-center text-gray-600 mb-12">
            Read the newest posts published on your platform.
          </p>

          {posts.length === 0 ? (
            <div className="text-center bg-white p-10 rounded-2xl shadow">
              <p className="text-gray-600 mb-6">
                No blog posts yet. Create your first one.
              </p>

              <Link
                href="/create"
                className="bg-black text-white px-6 py-3 rounded-full"
              >
                Create First Post
              </Link>
            </div>
          ) : (
            <SearchPosts posts={posts} />
          )}
        </div>
      </section>
    </main>
  );
}