import { MetadataRoute } from 'next';

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // Define your client's verified custom production domain
  const baseUrl = 'https://cordconsultancy.com'; 

  // List all static routes available on your website
  const routes = [
    '',
    '/about',
    '/services',
    '/contact',
    '/projects',
    '/services/health',
    '/services/nutrition',
    '/services/social-affairs',
    '/services/management',
    '/services/hotel-and-tourism',
    // Add any other page subdirectories your site contains here
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const, // Change to 'weekly' if content updates frequently
    priority: route === '' ? 1.0 : 0.8, // Home page gets highest priority rank
  }));
}
