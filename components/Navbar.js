"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow">

      {/* LOGO */}
      <Link href="/" className="text-xl font-bold hover:opacity-80">
        Blog Platform
      </Link>

      {/* NAV LINKS */}
      <div className="flex items-center gap-6 text-sm">

        <Link href="/" className="hover:text-gray-300">
          Home
        </Link>

        {status === "loading" ? (
          <span className="text-gray-400">Loading...</span>
        ) : session ? (
          <>
            <Link href="/create" className="hover:text-gray-300">
              Create
            </Link>

            <Link href="/my-posts" className="hover:text-gray-300">
              My Posts
            </Link>

            <Link href="/bookmarks" className="hover:text-gray-300">
              Saved
            </Link>

            {/* USER EMAIL */}
            <span className="text-gray-400 text-xs hidden md:block">
              {session.user.email}
            </span>

            {/* LOGOUT */}
            <button
              onClick={() => signOut()}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="hover:text-gray-300">
              Login
            </Link>

            <Link
              href="/signup"
              className="bg-white text-black px-3 py-1 rounded hover:bg-gray-200 transition"
            >
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}