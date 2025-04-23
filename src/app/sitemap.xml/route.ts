import { MetadataRoute } from 'next';

export function GET(): Response {
  // Base URL of the website
  const baseUrl = 'https://dustinkessler.com';
  
  // Current date for the lastModified field
  const date = new Date().toISOString();

  // List of all routes
  const routes = [
    '',
    '/contact',
    '/publications',
    '/resume',
    '/skills',
    '/projects',
  ];

  // Generate the sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${routes.map(route => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en${route}" />
    <xhtml:link rel="alternate" hreflang="de" href="${baseUrl}/de${route}" />
  </url>
  `).join('')}
</urlset>`;

  // Return the sitemap with proper content type
  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
} 