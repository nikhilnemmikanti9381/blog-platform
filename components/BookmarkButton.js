"use client";

import { useState } from "react";

export default function BookmarkButton({ postId }) {
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  async function handleBookmark() {
    setLoading(true);

    const res = await fetch("/api/bookmarks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ postId }),
    });

    const data = await res.json();

    if (res.ok) {
      setSaved(data.message === "Bookmarked");
    }

    setLoading(false);
  }

  return (
    <button
      onClick={handleBookmark}
      disabled={loading}
      className="border px-4 py-2 rounded-lg text-sm hover:bg-black hover:text-white transition"
    >
      {loading
        ? "Saving..."
        : saved
        ? "Saved"
        : "Save Post"}
    </button>
  );
}