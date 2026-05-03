"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function EditPostPage({ params }) {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function fetchPost() {
      const res = await fetch(`/api/posts/${params.id}`);

      if (res.ok) {
        const post = await res.json();

        setTitle(post.title || "");
        setContent(post.content || "");
        setImage(post.image || "");
      }

      setLoading(false);
    }

    fetchPost();
  }, [params.id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setSaving(true);

    const res = await fetch(`/api/posts/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
        image,
      }),
    });

    setSaving(false);

    if (res.ok) {
      router.push("/my-posts");
    } else {
      alert("Failed to update post");
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>Loading post...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow">
        <h1 className="text-3xl font-bold mb-6">
          Edit Post
        </h1>

        <form onSubmit={handleUpdate} className="space-y-5">
          <input
            type="text"
            placeholder="Blog title"
            className="w-full border p-3 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Image URL"
            className="w-full border p-3 rounded"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          <textarea
            placeholder="Write your blog content..."
            className="w-full border p-3 rounded h-60"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={saving}
            className="bg-black text-white px-6 py-3 rounded-full"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </div>
    </main>
  );
}