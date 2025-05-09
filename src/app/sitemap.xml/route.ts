import { MetadataRoute } from 'next';

export function GET(): Response {
  // Base URL of the website
  const baseUrl = 'https://www.dustinkessler.de';
  
  // Current date for the lastModified field
  const date = new Date().toISOString();

  // List of all routes with priorities, update frequencies, and languages
  const routes = [
    { path: '', priority: '1.0', changefreq: 'weekly', languages: ['en', 'de'] },
    { path: '/about', priority: '0.9', changefreq: 'monthly', languages: ['en', 'de'] },
    { path: '/contact', priority: '0.8', changefreq: 'monthly', languages: ['en', 'de'] },
    { path: '/publications', priority: '0.9', changefreq: 'monthly', languages: ['en', 'de'] },
    { path: '/resume', priority: '0.9', changefreq: 'monthly', languages: ['en', 'de'] },
    { path: '/skills', priority: '0.8', changefreq: 'monthly', languages: ['en', 'de'] },
    { path: '/projects', priority: '0.9', changefreq: 'weekly', languages: ['en', 'de'] },
    { path: '/local-services', priority: '0.9', changefreq: 'monthly', languages: ['en', 'de'] },
    { path: '/image-sitemap.xml', priority: '0.5', changefreq: 'monthly', languages: [] },
  ];

  // Generate the sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${routes.map(route => `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
    ${route.languages && route.languages.length > 0 ? `
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${route.path}" />
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en${route.path}" />
    <xhtml:link rel="alternate" hreflang="de" href="${baseUrl}/de${route.path}" />` : ''}
  </url>
  ${route.languages && route.languages.includes('en') ? `
  <url>
    <loc>${baseUrl}/en${route.path}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en${route.path}" />
    <xhtml:link rel="alternate" hreflang="de" href="${baseUrl}/de${route.path}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${route.path}" />
  </url>` : ''}
  ${route.languages && route.languages.includes('de') ? `
  <url>
    <loc>${baseUrl}/de${route.path}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
    <xhtml:link rel="alternate" hreflang="de" href="${baseUrl}/de${route.path}" />
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en${route.path}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${route.path}" />
  </url>` : ''}
  `).join('')}
</urlset>`;

  // Return the sitemap with proper content type
  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
} 