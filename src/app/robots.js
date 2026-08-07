export const dynamic = "force-static";

export default function robots() {
  const baseUrl = "https://blissspahadapsar.in/"; // Replace with your domain

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}