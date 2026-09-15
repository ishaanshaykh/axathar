export type CaseStudy = {
  slug: string;
  industry: string;
  industrySlug: string;
  year: string;
  title: string;
  excerpt: string;
  metrics: { value: string; label: string }[];
  tags: string[];
  featured?: boolean;
  quote?: { text: string; author: string; role: string };
  challenge: string;
  approach: string[];
  solution: string[];
  results: { value: string; label: string }[];
};

export const industries = [
  { slug: "manufacturing", label: "Manufacturing" },
  { slug: "retail-and-ecommerce", label: "Retail & E-commerce" },
  { slug: "healthcare", label: "Healthcare" },
  { slug: "logistics", label: "Logistics" },
  { slug: "financial-services", label: "Financial Services" },
  { slug: "technology-and-saas", label: "Technology & SaaS" },
  { slug: "hospitality-and-real-estate", label: "Hospitality & Real Estate" },
  { slug: "education", label: "Education" },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "delivery-evidence-automation",
    industry: "Logistics",
    industrySlug: "logistics",
    year: "2025",
    title: "How a national retailer turned scattered delivery photos into instant proof",
    excerpt:
      "Hundreds of same-day deliveries a day, every one requiring photographic proof — and that proof lived in chat threads and personal phones. We built an evidence pipeline with zero new apps for couriers.",
    metrics: [
      { value: "Same-day", label: "Nationwide delivery model" },
      { value: "0", label: "New apps for couriers" },
    ],
    tags: ["Automation", "Google Workspace", "Ops"],
    featured: true,
    quote: { text: "Disputes that took days now take minutes. The evidence finds itself.", author: "Operations Director", role: "National retail group" },
    challenge:
      "Proof-of-delivery photos were scattered across personal devices and chat threads. Customer disputes took days to resolve and audits were effectively impossible.",
    approach: ["Mapped the courier workflow end to end", "Designed around tools couriers already used", "Defined evidence completeness as the KPI"],
    solution: ["Serverless ingestion pipeline", "Auto-matching to orders and routes", "Searchable evidence ledger with retention rules"],
    results: [
      { value: "-81%", label: "Dispute resolution time" },
      { value: "100%", label: "Deliveries with evidence" },
      { value: "3wk", label: "Pilot to rollout" },
    ],
  },
  {
    slug: "technical-seo-hardware-catalog",
    industry: "Retail & E-commerce",
    industrySlug: "retail-and-ecommerce",
    year: "2025",
    title: "How an industrial distributor went from invisible to thousands of organic visits",
    excerpt:
      "An 8,000-page catalog that Google could barely crawl. We rebuilt information architecture, indexation controls and template-level content — then compounded it.",
    metrics: [
      { value: "8,000+", label: "Pages indexed" },
      { value: "Thousands", label: "Monthly organic visits" },
    ],
    tags: ["SEO", "Catalog", "Web"],
    challenge: "Faceted navigation created crawl traps. Thin templates meant nothing deserved to rank despite real inventory depth.",
    approach: ["Log-file crawl analysis", "Template-level content system", "Internal linking by demand, not hierarchy"],
    solution: ["Crawl-budget controls and sitemaps", "Programmatic category content", "Speed and schema baselines per template"],
    results: [
      { value: "8,000+", label: "Pages indexed" },
      { value: "4.6×", label: "Organic sessions" },
      { value: "+212%", label: "Quote requests" },
    ],
  },
  {
    slug: "factory-oee-visibility",
    industry: "Manufacturing",
    industrySlug: "manufacturing",
    year: "2024",
    title: "One line live: OEE visibility that cut unplanned downtime by a fifth",
    excerpt:
      "Three plants, three versions of the truth. We instrumented a pilot line, proved the loss model, then scaled what worked.",
    metrics: [
      { value: "-22%", label: "Unplanned downtime" },
      { value: "1", label: "Pilot line to start" },
    ],
    tags: ["IIoT", "Data", "Edge"],
    challenge: "Downtime was tribal knowledge. No trusted stoppage taxonomy, no live view, no way to prioritize fixes.",
    approach: ["Instrumented one line with edge gateways", "Built a stoppage taxonomy with operators", "Tied losses to cost per hour"],
    solution: ["Edge ingestion with buffering", "Live OEE and loss waterfall", "Alerting with human acknowledgement"],
    results: [
      { value: "-22%", label: "Unplanned downtime" },
      { value: "94%", label: "Stoppage classification" },
      { value: "6", label: "Lines scaled in phase two" },
    ],
  },
  {
    slug: "support-agent-rollout",
    industry: "Technology & SaaS",
    industrySlug: "technology-and-saas",
    year: "2025",
    title: "A support agent that resolves — not deflects — 65% of tickets",
    excerpt:
      "A SaaS team drowning in tier-one load. We shipped a grounded agent wired into helpdesk, docs and billing — eval-gated before it ever touched customers.",
    metrics: [
      { value: "65%", label: "Auto-resolve rate" },
      { value: "-40%", label: "Time to resolution" },
    ],
    tags: ["AI Agents", "Support", "RAG"],
    featured: true,
    quote: { text: "It handles the repetitive core so our team handles the cases that matter.", author: "Head of Support", role: "B2B SaaS" },
    challenge: "Repetitive tickets consumed senior time. Past bot attempts hallucinated policy and eroded trust.",
    approach: ["Scoped five resolvable intents first", "Grounded every answer in versioned sources", "Human-in-the-loop on refunds and risk"],
    solution: ["Retrieval over versioned knowledge", "Tool calls into billing and provisioning", "Eval harness gating every release"],
    results: [
      { value: "65%", label: "Tickets auto-resolved" },
      { value: "-40%", label: "Median resolution time" },
      { value: "4.7/5", label: "CSAT on agent-handled tickets" },
    ],
  },
  {
    slug: "clinic-ops-platform",
    industry: "Healthcare",
    industrySlug: "healthcare",
    year: "2024",
    title: "A clinic network replaces spreadsheets with one operating picture",
    excerpt:
      "Scheduling, inventory and follow-ups lived in spreadsheets. We shipped a compliant ops platform with role-based workflows.",
    metrics: [
      { value: "-35%", label: "No-show rate" },
      { value: "1", label: "System of record" },
    ],
    tags: ["Platform", "Ops", "Compliance-aware"],
    challenge: "Fragmented scheduling and follow-up caused no-shows and stock-outs across six sites.",
    approach: ["Mapped patient and staff journeys", "Designed role-first UX", "Compliance review at every increment"],
    solution: ["Scheduling + reminders engine", "Inventory with par levels", "Role dashboards and audit logs"],
    results: [
      { value: "-35%", label: "No-shows" },
      { value: "-28%", label: "Stock-outs" },
      { value: "6", label: "Sites live" },
    ],
  },
  {
    slug: "lending-crm-adoption",
    industry: "Financial Services",
    industrySlug: "financial-services",
    year: "2024",
    title: "A lender doubles pipeline visibility by fixing adoption first",
    excerpt:
      "The CRM was technically live and practically unused. We rebuilt pipeline, hygiene and rituals — adoption became the acceptance test.",
    metrics: [
      { value: "2.1×", label: "Pipeline visibility" },
      { value: "89%", label: "Weekly active sellers" },
    ],
    tags: ["CRM", "Adoption", "Data"],
    challenge: "Reps kept deals in spreadsheets. Forecasts were fiction and follow-ups slipped daily.",
    approach: ["Shadowed sellers for two weeks", "Cut stages to match real motion", "Made hygiene automatic, not homework"],
    solution: ["Rebuilt pipeline and automations", "Dedupe + enrichment + ownership", "Forecast rituals and coaching dashboards"],
    results: [
      { value: "2.1×", label: "Visible pipeline" },
      { value: "89%", label: "Rep adoption" },
      { value: "+18%", label: "Follow-up SLA adherence" },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
