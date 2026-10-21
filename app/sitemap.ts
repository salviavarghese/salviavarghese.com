import type { MetadataRoute } from "next";
import { site, projects } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.domain, lastModified: new Date() },
    ...projects.filter((p) => p.caseStudy).map((p) => ({ url: `${site.domain}/work/${p.slug}`, lastModified: new Date() })),
  ];
}
