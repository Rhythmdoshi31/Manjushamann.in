import { prisma } from "@/lib/prisma";
import HomeClient from "@/components/HomeClient";

export default async function Home() {
  // Fetch the latest content from the database
  const content = await prisma.content.findFirst({
    orderBy: { updatedAt: 'desc' },
  });

  const videoUrl = content?.videoUrl || "https://www.w3schools.com/html/mov_bbb.mp4";
  const videoText = content?.text || "This is a dummy message for the tarot reading!";

  return <HomeClient videoUrl={videoUrl} videoText={videoText} />;
}
