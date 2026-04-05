import { GetServerSideProps } from "next";
import { services } from "@/data/services";
import { cityServicePages } from "@/data/cityPages";

const BASE = "https://requestapro.com";

function generateSiteMap() {
  const staticPages = [
    { url: BASE, priority: "1.0", changefreq: "weekly" },
    { url: `${BASE}/services`, priority: "0.9", changefreq: "weekly" },
    { url: `${BASE}/locations`, priority: "0.9", changefreq: "weekly" },
    { url: `${BASE}/about`, priority: "0.7", changefreq: "monthly" },
    { url: `${BASE}/reviews`, priority: "0.7", changefreq: "weekly" },
  ];

  const servicePages = services.map((s) => ({
    url: `${BASE}/services/${s.slug}`,
    priority: "0.9",
    changefreq: "monthly",
  }));

  const cityPages = cityServicePages.map((p) => ({
    url: `${BASE}/locations/${p.citySlug}/${p.serviceSlug}`,
    priority: "0.8",
    changefreq: "monthly",
  }));

  const allPages = [...staticPages, ...servicePages, ...cityPages];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (p) => `  <url>
    <loc>${p.url}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;
}

function SiteMap() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "text/xml");
  res.write(generateSiteMap());
  res.end();
  return { props: {} };
};

export default SiteMap;
