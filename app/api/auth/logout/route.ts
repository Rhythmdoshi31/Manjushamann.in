import { NextResponse } from "next/server";
import { rateLimit } from "@/lib/rateLimit";

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for") ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (!rateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429 }
    );
  }
  try {
    const response = NextResponse.json({ success: true, message: "Logged out successfully" });
    
    // Clear "admin_token" cookie
    response.cookies.delete("admin_token");
    
    return response;
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
