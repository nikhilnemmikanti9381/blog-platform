"use client";

import { useState } from "react";
import Link from "next/link";

export default function SearchPosts({ posts }) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Travel",
    "Tech",
    "Food",
    "Lifestyle",
    "Career",
    "Business",
    "AI",
  ];

  const filteredPosts = posts.filter((post) => {
    const searchText = `${post.title} ${post.content} ${post.author}`.toLowerCase();
    const matchesSearch = searchText.includes(query.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full max-w-6xl mx-auto">

      {/* CATEGORY FILTER */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              selectedCategory === cat
                ? "bg-black text-white"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* SEARCH BAR */}
      <div className="max-w-xl mx-auto mb-16">
        <input
          type="text"
          placeholder="Search blogs..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border border-gray-300 px-6 py-4 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      {/* BLOG CARDS */}
      {filteredPosts.length === 0 ? (
        <div className="text-center bg-white p-10 rounded-2xl shadow">
          <p className="text-gray-600">
            No posts found.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPosts.map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug || post._id}`}
              className="block bg-white rounded-3xl shadow-md overflow-hidden hover:-translate-y-3 hover:shadow-2xl transition-all duration-300"
            >
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover"
                />
              )}

              <div className="p-6">
                <span className="inline-block text-xs font-semibold bg-black text-white px-3 py-1 rounded-full mb-3">
                  {post.category || "General"}
                </span>

                <h3 className="text-2xl font-bold mb-4 leading-tight">
                  {post.title}
                </h3>

                <p className="text-gray-600 line-clamp-3 mb-6 leading-relaxed">
                  {post.content}
                </p>

                <p className="text-sm text-gray-400">
                  By {post.author || "Anonymous"}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}