import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/", request.url));
// }

// export const config = {
//   matcher: "/profile",
// };

export function middleware(request: NextRequest) {
  // redirection
  // if (request.nextUrl.pathname === "/profile") {
  //   return NextResponse.rewrite(new URL("/hello", request.nextUrl));
  // }
  // url rewrite
  // if (request.nextUrl.pathname === "/profile") {
  //   return NextResponse.rewrite(new URL("/hello", request.nextUrl));
  // }
  // cookies and headers
  const themePreference = request.cookies.get("theme");
  const response = NextResponse.next();
  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }
  response.headers.set("custom-header", "custom-value");

  return response;
}
