"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export default function CommentSection({ postId }) {
  const { data: session } = useSession();
  const [comments, setComments] = useState([]);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchComments() {
    const res = await fetch(`/api/comments?postId=${postId}`);
    const data = await res.json();

    if (res.ok) {
      setComments(data);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!content.trim()) return;

    setLoading(true);

    const res = await fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postId,
        content,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      setComments((prev) => [data, ...prev]);
      setContent("");
    }

    setLoading(false);
  }

  useEffect(() => {
    if (postId) {
      fetchComments();
    }
  }, [postId]);

  return (
    <section className="mt-12 border-t pt-8">
      <h2 className="text-2xl font-bold mb-6">Comments</h2>

      {session ? (
        <form onSubmit={handleSubmit} className="mb-8">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your comment..."
            className="w-full border rounded-lg p-3 min-h-[120px] outline-none focus:ring-2 focus:ring-black"
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-3 bg-black text-white px-5 py-2 rounded-lg disabled:opacity-50"
          >
            {loading ? "Posting..." : "Post Comment"}
          </button>
        </form>
      ) : (
        <p className="mb-8 text-gray-600">
          Please log in to leave a comment.
        </p>
      )}

      <div className="space-y-5">
        {comments.length === 0 ? (
          <p className="text-gray-500">No comments yet.</p>
        ) : (
          comments.map((comment) => (
            <div key={comment._id} className="border rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <p className="font-semibold">
                  {comment.user?.name || comment.user?.email || "User"}
                </p>

                <p className="text-sm text-gray-500">
                  {new Date(comment.createdAt).toLocaleDateString()}
                </p>
              </div>

              <p className="text-gray-700">{comment.content}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}