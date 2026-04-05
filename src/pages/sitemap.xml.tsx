import { GetServerSideProps } from "next";
import { services } from "@/data/services";
import { cities, cityServicePages } from "@/data/cityPages";

const BASE = "https://requestapro.com";

function toDate(d: Date) {
  return d.toISOString().split("T")[0];
}

function generateSiteMap() {
  const today = toDate(new Date());

  const staticPages = [
    { url: BASE, priority: "1.0", changefreq: "weekly", lastmod: today },
    {
      url: `${BASE}/services`,
      priority: "0.9",
      changefreq: "weekly",
      lastmod: today,
    },
    {
      url: `${BASE}/locations`,
      priority: "0.9",
      changefreq: "weekly",
      lastmod: today,
    },
    {
      url: `${BASE}/about`,
      priority: "0.7",
      changefreq: "monthly",
      lastmod: today,
    },
    {
      url: `${BASE}/reviews`,
      priority: "0.7",
      changefreq: "weekly",
      lastmod: today,
    },
  ];

  const servicePages = services.map((s) => ({
    url: `${BASE}/services/${s.slug}`,
    priority: "0.9",
    changefreq: "monthly",
    lastmod: today,
  }));

  // City-level index pages (e.g. /locations/rancho-cucamonga)
  const cityIndexPages = cities.map((c) => ({
    url: `${BASE}/locations/${c.slug}`,
    priority: "0.8",
    changefreq: "monthly",
    lastmod: today,
  }));

  // City + service pages (e.g. /locations/rancho-cucamonga/tv-mounting)
  const cityServiceEntries = cityServicePages.map((p) => ({
    url: `${BASE}/locations/${p.citySlug}/${p.serviceSlug}`,
    priority: "0.8",
    changefreq: "monthly",
    lastmod: today,
  }));

  const allPages = [
    ...staticPages,
    ...servicePages,
    ...cityIndexPages,
    ...cityServiceEntries,
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${allPages
    .map(
      (p) =>
        `  <url>\n    <loc>${p.url}</loc>\n    <lastmod>${p.lastmod}</lastmod>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>`,
    )
    .join("\n")}\n</urlset>`;
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
