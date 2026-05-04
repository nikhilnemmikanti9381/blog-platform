import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export default async function AdminUsersPage() {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "admin") {
    return (
      <main className="p-10 text-center">
        <h1 className="text-2xl font-bold">Access Denied</h1>
      </main>
    );
  }

  await connectDB();

  const users = await User.find()
    .sort({ createdAt: -1 })
    .lean();

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Manage Users</h1>

      {users.length === 0 ? (
        <p className="text-gray-600">No users found.</p>
      ) : (
        <div className="overflow-x-auto border rounded-xl">
          <table className="w-full text-sm">
            <thead className="bg-black text-white">
              <tr>
                <th className="text-left p-4">Email</th>
                <th className="text-left p-4">Role</th>
                <th className="text-left p-4">Bookmarks</th>
                <th className="text-left p-4">Joined</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user._id.toString()} className="border-t">
                  <td className="p-4">{user.email}</td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        user.role === "admin"
                          ? "bg-black text-white"
                          : "bg-gray-200 text-black"
                      }`}
                    >
                      {user.role || "user"}
                    </span>
                  </td>

                  <td className="p-4">
                    {user.bookmarks?.length || 0}
                  </td>

                  <td className="p-4 text-gray-500">
                    {user.createdAt
                      ? new Date(user.createdAt).toLocaleDateString()
                      : "Unknown"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}