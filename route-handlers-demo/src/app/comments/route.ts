import { comments } from "./data";

export async function GET() {
  return Response.json(comments);
}
