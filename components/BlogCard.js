import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <div className="border p-4 rounded">
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p>{post.content.slice(0, 100)}...</p>
      <Link href={`/blog/${post._id}`} className="text-blue-500">
        Read More
      </Link>
    </div>
  );
}