import { comments } from "./data";

export async function GET() {
  return Response.json(comments);
}

export async function POST(request: Request) {
  const comment = await request.json();
  const id = comments.length + 1;
  const newComment = { id, text: comment.text };
  comments.push(newComment);
  return Response.json(comment);
}
