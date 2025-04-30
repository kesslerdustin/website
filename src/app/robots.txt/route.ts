export function GET(): Response {
  const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# Disallow crawling of administrative or internal pages if needed
# Disallow: /admin/
# Disallow: /internal/

# Sitemaps
Sitemap: https://www.dustinkessler.de/sitemap.xml
Sitemap: https://www.dustinkessler.de/image-sitemap.xml

# Specify crawl delay to avoid server overload (optional)
# Crawl-delay: 10
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
} 