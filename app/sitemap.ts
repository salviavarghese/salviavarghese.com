import type { MetadataRoute } from "next";
import { site, projects } from "@/content/site";
import { posts } from "@/content/writing";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.domain, lastModified: new Date() },
    ...projects.filter((p) => p.caseStudy).map((p) => ({ url: `${site.domain}/work/${p.slug}`, lastModified: new Date() })),
    { url: `${site.domain}/writing`, lastModified: new Date() },
    ...posts.map((p) => ({ url: `${site.domain}/writing/${p.slug}`, lastModified: new Date(p.date) })),
  ];
}
