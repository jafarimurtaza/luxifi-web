// app/sitemap.xml/route.js
import { WEBSITE_DETAILS } from "../lib/constants";

export async function GET() {
  const baseUrl = WEBSITE_DETAILS.URL;

  const staticPages = [
    "",
    "contact",
    "approach",
    "tech",
    "maintenance",
    "blog",
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map((page) => {
      const url = page === "" ? baseUrl : `${baseUrl}/${page}`;
      const priority = getPriority(page);
      const changefreq = getChangeFreq(page);

      return `<url>
    <loc>${url}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>`;
    })
    .join("\n  ")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400",
    },
  });
}

function getPriority(page) {
  if (page === "") return "1.0";
  if (page === "contact") return "0.9";
  if (page === "tech" || page === "approach") return "0.8";
  if (page === "blog") return "0.7";
  if (page === "maintenance") return "0.6";
  return "0.5";
}

function getChangeFreq(page) {
  if (page === "") return "daily";
  if (page === "blog") return "daily";
  if (page === "contact") return "monthly";
  return "monthly";
}
