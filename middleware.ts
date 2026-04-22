import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = process.env.JWT_SECRET;

if(!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined");
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect all /admin routes except /admin/login
  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    const token = request.cookies.get("admin_token")?.value;

    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    try {
      // Verify JWT token using jose
      const secret = new TextEncoder().encode(JWT_SECRET);
      await jwtVerify(token, secret);
      
      // Token is valid, allow request
      return NextResponse.next();
    } catch (error) {
      // Token is invalid or expired
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  return NextResponse.next();
}

// Optimize middleware to only run on /admin paths
export const config = {
  matcher: ["/admin/:path*"],
};
