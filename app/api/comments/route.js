import { connectDB } from "@/lib/mongodb";
import Comment from "@/models/Comment";

export async function POST(req) {
  const body = await req.json();
  await connectDB();

  const comment = await Comment.create(body);
  return Response.json(comment);
}
