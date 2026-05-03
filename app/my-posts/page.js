"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function MyPostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchMyPosts() {
    const res = await fetch("/api/my-posts");

    if (res.ok) {
      const data = await res.json();
      setPosts(data);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchMyPosts();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = confirm("Are you sure you want to delete this post?");

    if (!confirmDelete) return;

    const res = await fetch(`/api/posts/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setPosts(posts.filter((post) => post._id !== id));
    } else {
      alert("Failed to delete post");
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>Loading your posts...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">My Posts</h1>

          <Link
            href="/create"
            className="bg-black text-white px-5 py-2 rounded-full"
          >
            Create New Post
          </Link>
        </div>

        {posts.length === 0 ? (
          <div className="bg-white p-10 rounded-2xl shadow text-center">
            <p className="text-gray-600 mb-6">
              You have not created any posts yet.
            </p>

            <Link
              href="/create"
              className="bg-black text-white px-6 py-3 rounded-full"
            >
              Write Your First Post
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <div
                key={post._id}
                className="bg-white p-6 rounded-2xl shadow"
              >
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                )}

                <h2 className="text-2xl font-bold mb-3">
                  {post.title}
                </h2>

                <p className="text-gray-600 line-clamp-3">
                  {post.content}
                </p>

                <p className="text-sm text-gray-400 mt-4">
                  By {post.author}
                </p>

                <div className="flex gap-3 mt-5">
                  <Link
                    href={`/blog/${post._id}`}
                    className="bg-black text-white px-4 py-2 rounded"
                  >
                    View
                  </Link>

                  <Link
                    href={`/edit/${post._id}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => handleDelete(post._id)}
                    className="bg-red-600 text-white px-4 py-2 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}