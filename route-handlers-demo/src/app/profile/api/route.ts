import { headers } from "next/headers";
import { type NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
  const headersList = headers();
  const requestHeaders = new Headers(request.headers);
  const theme = request.cookies.get("theme");
  console.log(headersList.get("Authorization"));
  console.log(requestHeaders.get("Authorization"));
  console.log(theme);

  cookies().set("resultsPerPage", "20");
  console.log(cookies().get("resultsPerPage"));

  return new Response("<h1>Profile API data</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": `theme=dark`,
    },
  });
}
