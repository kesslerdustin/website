import { MetadataRoute } from 'next';

export function GET(): Response {
  // Base URL of the website
  const baseUrl = 'https://dustinkessler.com';
  
  // Current date for the lastModified field
  const date = new Date().toISOString();

  // List of all routes with priorities and update frequencies
  const routes = [
    { path: '', priority: '1.0', changefreq: 'weekly' },
    { path: '/contact', priority: '0.8', changefreq: 'monthly' },
    { path: '/publications', priority: '0.9', changefreq: 'monthly' },
    { path: '/resume', priority: '0.9', changefreq: 'monthly' },
    { path: '/skills', priority: '0.8', changefreq: 'monthly' },
    { path: '/projects', priority: '0.9', changefreq: 'weekly' },
    { path: '/local-services', priority: '0.9', changefreq: 'monthly' },
  ];

  // Generate the sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${routes.map(route => `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en${route.path}" />
    <xhtml:link rel="alternate" hreflang="de" href="${baseUrl}/de${route.path}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${route.path}" />
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