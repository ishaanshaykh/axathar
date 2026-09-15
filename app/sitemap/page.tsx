import { services } from "@/data/services";
import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sitemap",
};

const routes = ["", "/services", "/portfolio", "/about", "/contact", "/privacy", "/terms", ...services.map(s => `/services/${s.slug}`)];

export default function SitemapPage() {
  return (
    <div className="wrap py-16">
      <h1 className="t-h1">Sitemap</h1>
      <ul className="mt-8 grid gap-2">
        {routes.map((r) => (
          <li key={r || "/"}>
            <a className="link-line" href={r || "/"}>{SITE.url}{r || "/"}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
