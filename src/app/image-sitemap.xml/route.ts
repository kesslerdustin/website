export function GET(): Response {
  // Base URL of the website
  const baseUrl = 'https://dustinkessler.com';
  
  // Define all images with relevant information
  const images = [
    {
      path: '/images/avatar.jpeg',
      title: 'Dustin Keßler - Full Stack Developer portrait',
      caption: 'Dustin Keßler, Full Stack Developer based in Dinslaken, NRW',
      location: '/',
    },
    {
      path: '/images/jinrui.jpg',
      title: 'Jinrui No Heart - Web Project',
      caption: 'Jinrui No Heart website project by Dustin Keßler',
      location: '/projects',
    },
    {
      path: '/images/toeller.jpg',
      title: 'Töller & Steprath - Client Website',
      caption: 'Professional website development by Dustin Keßler for Töller & Steprath',
      location: '/projects',
    },
    {
      path: '/images/steinhauer.jpg',
      title: 'Steinhauer Engineering - Client Website',
      caption: 'Website development for Steinhauer Engineering by Dustin Keßler',
      location: '/projects',
    },
    {
      path: '/images/omnystate.jpg',
      title: 'Omnystate Platform - Frontend Project',
      caption: 'Omnystate Platform web application developed by Dustin Keßler',
      location: '/projects',
    },
    {
      path: '/images/omnyapp.jpg',
      title: 'Omnystate Mobile App - App Development',
      caption: 'Mobile application development by Dustin Keßler',
      location: '/projects',
    },
    {
      path: '/images/omnycollect.jpg',
      title: 'Omnystate Collect - Data Collection App',
      caption: 'Data collection app developed by Dustin Keßler',
      location: '/projects',
    },
    {
      path: '/images/quiz.jpg',
      title: 'The QUIZ App - Mobile Game',
      caption: 'Mobile quiz game developed by Dustin Keßler',
      location: '/projects',
    },
    {
      path: '/images/fpvr.jpg',
      title: 'FPVR VR Drone Racing - VR Development',
      caption: 'Virtual Reality drone racing game by Dustin Keßler',
      location: '/projects',
    },
    {
      path: '/images/noname.jpg',
      title: 'Noname Island - Crysis Mod',
      caption: 'Crysis game mod developed by Dustin Keßler',
      location: '/projects',
    },
    {
      path: '/images/noname2.jpg',
      title: 'Noname Island 2 - Crysis Mod',
      caption: 'Sequel Crysis game mod developed by Dustin Keßler',
      location: '/projects',
    }
  ];

  // Generate the image sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${images.map(image => `
  <url>
    <loc>${baseUrl}${image.location}</loc>
    <image:image>
      <image:loc>${baseUrl}${image.path}</image:loc>
      <image:title>${image.title}</image:title>
      <image:caption>${image.caption}</image:caption>
    </image:image>
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