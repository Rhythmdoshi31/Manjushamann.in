import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { rateLimit } from "@/lib/rateLimit";

export async function GET(req: Request) {
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
    const today = new Date();
    const todayStr = today.toISOString().split("T")[0];

    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split("T")[0];

    const todayVisit = await prisma.siteVisit.findFirst({
      where: { date: new Date(todayStr) },
    });

    const yesterdayVisit = await prisma.siteVisit.findFirst({
      where: { date: new Date(yesterdayStr) },
    });

    return NextResponse.json({
      today: todayVisit?.count || 0,
      yesterday: yesterdayVisit?.count || 0,
    });
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch visits" }, { status: 500 });
  }
}