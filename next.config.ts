import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Keep previously shared service links useful after replacing the catalogue.
    const previousServices = ["custom-software-development", "web-development", "mobile-applications", "legacy-modernization", "dedicated-teams", "cloud-engineering", "data-analytics", "industrial-iot", "ai-agents", "digital-transformation", "erp", "crm", "seo", "generative-engine-optimization", "paid-media"];
    return previousServices.map(slug => ({ source: `/services/${slug}`, destination: "/services", permanent: false }));
  },
};
export default nextConfig;
