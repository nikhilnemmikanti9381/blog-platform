export default async function BlogPage({ params }) {
  const res = await fetch(`http://localhost:3000/api/posts/${params.id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <div className="p-6">Post not found</div>;
  }

  const post = await res.json();

  return (
    <main className="bg-gray-100 min-h-screen text-black">
      <article className="max-w-4xl mx-auto p-6 bg-white shadow rounded-2xl mt-10">
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[400px] object-cover rounded-2xl mb-8"
          />
        )}

        <h1 className="text-4xl font-bold mb-4">
          {post.title}
        </h1>

        <p className="text-gray-500 mb-8">
          By {post.author || "Anonymous"}
        </p>

        <p className="text-lg leading-8 whitespace-pre-line">
          {post.content}
        </p>
      </article>
    </main>
  );
}