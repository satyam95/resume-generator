import { auth } from "./lib/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  // Get the session using the auth function
  const session = await auth();

  // Get the requested pathname
  const { pathname } = request.nextUrl;

  // Allow access to public pages (e.g., login, signup) without redirect
  if (pathname === "/login" || pathname === "/signup") {
    return NextResponse.next();
  }

  // If no session, redirect to login
  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If authenticated, proceed to the requested page
  return NextResponse.next();
}

// Define paths to apply the middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - /login and /signup (public pages)
     * - /api (API routes)
     * - /_next/static (static files)
     * - /_next/image (image optimization)
     * - /favicon.ico, /robots.txt, etc. (static assets)
     */
    "/((?!login|signup|api|_next/static|_next/image|favicon.ico|robots.txt).*)",
  ],
};