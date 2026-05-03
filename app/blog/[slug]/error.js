"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-3xl font-bold mb-4">
        Something went wrong
      </h1>

      <p className="text-gray-600 mb-6">
        We couldn’t load this blog post. Please try again.
      </p>

      <button
        onClick={() => reset()}
        className="bg-black text-white px-6 py-2 rounded-lg"
      >
        Try again
      </button>
    </main>
  );
}