import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://iaecconsultants.in';

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

  return [
    ...staticRoutes,
    ...studyAbroadRoutes,
    ...servicesRoutes,
  ];
}