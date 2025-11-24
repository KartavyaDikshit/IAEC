import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface Blog {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
}

export async function GET() {
  const baseUrl = 'https://iaec-consultants.com';

  const staticRoutes = [
    '/',
    '/about',
    '/blog',
    '/booking',
    '/contact',
    '/privacy-policy',
    '/services',
    '/study-abroad',
    '/study-preparation',
    '/terms-conditions',
    '/testimonials',
    '/thank-you',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const studyAbroadRoutes = [
    '/study-abroad/australia',
    '/study-abroad/canada',
    '/study-abroad/europe',
    '/study-abroad/ireland',
    '/study-abroad/new-zealand',
    '/study-abroad/uk',
    '/study-abroad/usa',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const servicesRoutes = [
    '/services/coaching',
    '/services/travel-forex',
    '/services/visa',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const blogFilePath = path.join(process.cwd(), 'data', 'blog.json');
  const blogFileContent = fs.readFileSync(blogFilePath, 'utf-8');
  const blogs: Blog[] = JSON.parse(blogFileContent);
  const blogRoutes = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.id}`,
    lastModified: new Date(),
  }));

  const allUrls = [...staticRoutes, ...studyAbroadRoutes, ...servicesRoutes, ...blogRoutes];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allUrls
        .map(
          (route) => `
        <url>
          <loc>${route.url}</loc>
          <lastmod>${route.lastModified.toISOString()}</lastmod>
        </url>
      `
        )
        .join('')}
    </urlset>
  `;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
