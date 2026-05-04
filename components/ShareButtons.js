"use client";

export default function ShareButtons({ title, url }) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex items-center gap-4 mt-8">
      <span className="text-sm text-gray-500">Share:</span>

      {/* Twitter/X */}
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full border hover:bg-black hover:text-white transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M18.244 2H21l-6.49 7.42L22.5 22h-6.78l-5.3-6.92L4.4 22H1.64l6.94-7.93L1.5 2h6.92l4.8 6.36L18.24 2zm-2.37 18h1.88L7.97 3.98H6.01L15.87 20z" />
        </svg>
      </a>

      {/* LinkedIn */}
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full border hover:bg-black hover:text-white transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M4.98 3.5C4.98 5 3.8 6.2 2.3 6.2S-.38 5  -.38 3.5  .8.8 2.3.8 4.98 2 4.98 3.5zM.4 8.1h3.8V24H.4V8.1zM8.6 8.1h3.6v2.2h.1c.5-.9 1.7-2.2 3.6-2.2 3.9 0 4.6 2.5 4.6 5.8V24h-3.8v-8.4c0-2 0-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.5V24H8.6V8.1z" />
        </svg>
      </a>

      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full border hover:bg-black hover:text-white transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.3v-2.9h2.3V9.5c0-2.3 1.4-3.6 3.5-3.6 1 0 2 .2 2 .2v2.2h-1.1c-1.1 0-1.4.7-1.4 1.4v1.7h2.5l-.4 2.9h-2.1v7A10 10 0 0022 12z" />
        </svg>
      </a>
    </div>
  );
}