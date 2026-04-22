import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
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
    const today = new Date().toISOString().split("T")[0];

    const existing = await prisma.siteVisit.findFirst({
      where: { date: new Date(today) },
    });

    if (existing) {
      const updated = await prisma.siteVisit.update({
        where: { id: existing.id },
        data: { count: existing.count + 1 },
      });

      return NextResponse.json({ today: updated.count });
    }

    const created = await prisma.siteVisit.create({
      data: {
        date: new Date(today),
        count: 1,
      },
    });

    return NextResponse.json({ today: created.count });
  } catch (err) {
    return NextResponse.json({ error: "Failed to track visit" }, { status: 500 });
  }
}