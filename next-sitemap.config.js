/** @type {import("next-sitemap").IConfig} */
module.exports = {
  siteUrl: "https://balicasahannah.com",
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  exclude: ["/server-sitemap.xml"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/private/", "/admin/", "/api/"] },
    ],
  },
  transform: async (config, path) => {
    const priorityMap = {
      "/": 1.0,
      "/villa": 0.9,
      "/gallery": 0.8,
      "/amenities": 0.8,
      "/location": 0.7,
      "/contact": 0.7,
      "/booking": 0.7,
    }
    const changefreqMap = {
      "/": "weekly",
      "/villa": "monthly",
      "/gallery": "monthly",
      "/amenities": "monthly",
      "/location": "yearly",
      "/contact": "yearly",
      "/booking": "weekly",
    }
    return {
      loc: path,
      changefreq: changefreqMap[path] || "monthly",
      priority: priorityMap[path] || 0.5,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
}
