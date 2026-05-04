"use client";

import { useState } from "react";

export default function AdminDeletePostButton({ slug }) {
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    const confirmed = confirm("Are you sure you want to delete this post?");

    if (!confirmed) return;

    setLoading(true);

    const res = await fetch(`/api/posts/${slug}`, {
      method: "DELETE",
    });

    if (res.ok) {
      window.location.reload();
    } else {
      alert("Failed to delete post");
      setLoading(false);
    }
  }

  return (
    <button
  onClick={handleDelete}
  disabled={loading}
  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition disabled:opacity-50">
  {loading ? "Deleting..." : "Delete"}
</button>
  );
}