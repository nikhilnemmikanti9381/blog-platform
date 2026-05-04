import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "@/lib/auth";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-4">Admin Dashboard</h1>
        <p className="text-gray-600 mb-6">
          You must be logged in to access this page.
        </p>

        <Link
          href="/login"
          className="inline-block bg-black text-white px-5 py-2 rounded-lg"
        >
          Login
        </Link>
      </main>
    );
  }

  if (session.user.role !== "admin") {
    return (
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-4">Access Denied</h1>
        <p className="text-gray-600">
          You do not have permission to access the admin dashboard.
        </p>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
      <p className="text-gray-600 mb-10">
        Manage your platform content, users, and comments.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <Link
          href="/admin/posts"
          className="border rounded-2xl p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-bold mb-2">Posts</h2>
          <p className="text-gray-600 text-sm">
            Review, edit, and remove blog posts.
          </p>
        </Link>

        <Link
          href="/admin/comments"
          className="border rounded-2xl p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-bold mb-2">Comments</h2>
          <p className="text-gray-600 text-sm">
            Moderate user comments and remove spam.
          </p>
        </Link>

        <Link
          href="/admin/users"
          className="border rounded-2xl p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-bold mb-2">Users</h2>
          <p className="text-gray-600 text-sm">
            View users and manage platform roles.
          </p>
        </Link>
      </div>
    </main>
  );
}