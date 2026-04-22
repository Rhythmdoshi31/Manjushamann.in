export async function GET() {
  const baseUrl = "https://www.manjushamann.com";

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${baseUrl}</loc>
    </url>
    <url>
      <loc>${baseUrl}/admin/login</loc>
    </url>
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}