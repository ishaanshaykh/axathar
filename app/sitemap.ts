import { services } from "@/data/services";
import { SITE } from "@/lib/site";

export default function sitemap() {
  const routes = ["", "/services", "/portfolio", "/about", "/contact", "/privacy", "/terms", ...services.map(s => `/services/${s.slug}`)];
  return routes.map((r) => ({ url: `${SITE.url}${r || "/"}`, lastModified: new Date() }));
}
