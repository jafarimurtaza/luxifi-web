// app/robots.txt/route.js
import { WEBSITE_URL_DETAILS } from "../lib/constants";

export async function GET() {
  const baseUrl = WEBSITE_URL_DETAILS.URL;

  const robotsTxt = `User-agent: *
Allow: /

# Important pages for crawling
Allow: /
Allow: /blog/
Allow: /contact
Allow: /approach
Allow: /tech
Allow: /maintenance



# Block admin and development areas
Disallow: /api/
Disallow: /_next/
Disallow: /admin/

# Sitemap location
Sitemap: ${baseUrl}/sitemap.xml

# Crawl delay (optional - helps with server load)
Crawl-delay: 1`;

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
