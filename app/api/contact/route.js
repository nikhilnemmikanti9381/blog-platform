export async function POST(req) {
  const data = await req.json();

  console.log("Contact:", data);

  return Response.json({ message: "Message received" });
}
