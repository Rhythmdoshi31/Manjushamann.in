import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { prisma } from "@/lib/prisma";

// Cloudinary configuration relies on environment variables:
// CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("video") as File | null;
    const text = formData.get("text") as string | null;

    if (!file || !text) {
      return NextResponse.json(
        { error: "Video file and text are required" },
        { status: 400 }
      );
    }

    // Convert file to buffer for Cloudinary upload_stream
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const uploadResult: any = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { resource_type: "video", folder: "manjusha_uploads" },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      uploadStream.end(buffer);
    });

    const videoUrl = uploadResult.secure_url;

    // Replace previous video & text in the Content table
    // Since we only need one active video, we delete all previous records first.
    // (Note: You mentioned saving in Admin table, but per our Prisma schema we use Content table for this!)
    await prisma.content.deleteMany({});

    const newContent = await prisma.content.create({
      data: {
        videoUrl,
        text,
      },
    });

    return NextResponse.json({ success: true, data: newContent });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
