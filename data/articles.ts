export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  featured?: boolean;
  body: string[];
  quote?: string;
};

export const articleCategories = ["AI", "Guides", "Engineering", "Insights", "Growth"];

export const articles: Article[] = [
  {
    slug: "agentic-ai-vs-generative-ai-vs-chatbots",
    category: "AI",
    title: "Agentic AI vs generative AI vs chatbots: what is the difference?",
    excerpt:
      "A chatbot answers, generative AI creates, agentic AI acts. Here is where each fits, what each costs to ship, and how to choose.",
    date: "Jun 10, 2026",
    readTime: "7 min read",
    featured: true,
    body: [
      "Most teams conflate three different technologies under the word AI. That confusion is expensive: it produces chatbots where agents were needed, and agent projects where a template would have done.",
      "A chatbot replies with text. It is reactive and bounded — useful for answering, useless for doing. Generative AI creates artifacts: drafts, images, summaries. An agent plans toward a goal, calls tools, and completes work end to end.",
      "The practical test is simple. If the job ends at an answer, ship a chatbot. If it ends at an artifact, use generative AI inside a workflow. If it ends at a changed system — a resolved ticket, a qualified lead, a reconciled invoice — you need an agent with tools, guardrails and evals.",
      "Cost follows responsibility. Chatbots are cheapest, generative features sit in the middle, and agents cost more because integration, auth, evals and monitoring are most of the work. Budget for the system, not the model.",
    ],
    quote: "Chatbots answer questions. Agents change systems. Fund accordingly.",
  },
  {
    slug: "ai-agent-development-cost",
    category: "AI",
    title: "What does AI agent development cost in 2026?",
    excerpt: "From ~$25k pilots to $500k+ platforms — what drives the price and where the hidden costs hide.",
    date: "Jun 10, 2026",
    readTime: "5 min read",
    body: [
      "A scoped single-agent pilot typically starts around $25k. Multi-agent platforms with deep integrations run into six figures. The spread is not the model — it is scope, integrations and guardrails.",
      "The price drivers are consistent: number of tools the agent touches, auth complexity, data readiness, eval coverage, and human-in-the-loop requirements. Each tool doubles the edge cases.",
      "Hidden costs live in data cleanup, change management and monitoring. Plan for them explicitly or they arrive as delays.",
    ],
  },
  {
    slug: "how-to-build-an-ai-agent",
    category: "Guides",
    title: "How to build an AI agent: a high-level guide",
    excerpt: "Pick a job, choose tools, add memory, then harden for production. The path for teams shipping their first agent.",
    date: "Jun 10, 2026",
    readTime: "8 min read",
    body: [
      "Start from the workflow and the definition of done — not from a model demo. The best first agent is narrow, frequent and measurable.",
      "Wire the tools with least-privilege access. Add grounded retrieval over versioned sources. Then add guardrails: validation, limits, retries and human approval on risky actions.",
      "Evaluate task success before launch with a fixed harness. Ship behind flags with full logging. Expand scope only when the evals stay green.",
    ],
  },
  {
    slug: "geo-vs-seo-vs-aeo",
    category: "Growth",
    title: "GEO vs SEO vs AEO: what is the difference?",
    excerpt: "SEO wins rankings, AEO wins the answer slot, GEO wins citations inside AI answers. Run all three together.",
    date: "Jun 10, 2026",
    readTime: "7 min read",
    body: [
      "SEO makes you visible on classic search. AEO structures you as the direct answer. GEO makes AI engines extract, trust and cite you inside generated answers.",
      "They stack, not substitute. AI pulls from the web that SEO makes visible — GEO without SEO is a press release nobody can find.",
      "The shared foundation is extractable, factual, corroborated content. Start there and all three disciplines compound.",
    ],
  },
  {
    slug: "custom-software-development-cost",
    category: "Guides",
    title: "Custom software development cost in 2026",
    excerpt: "Typical projects run $50k–$250k+. Here is how scope, complexity and team location move the number.",
    date: "Jun 10, 2026",
    readTime: "6 min read",
    body: [
      "Cost is a function of scope certainty, integration count and compliance burden. A crisp pilot with two integrations costs a fraction of a multi-system platform.",
      "Nearshore senior teams compress the middle: same-day collaboration at a fraction of onshore rates, without the rework tax of the cheapest offshore bids.",
      "De-risk with thin slices. Fixed-scope pilots beat open-ended hourly builds for first engagements.",
    ],
  },
  {
    slug: "cloud-migration-strategy",
    category: "Engineering",
    title: "Cloud migration strategy: a step-by-step playbook",
    excerpt: "Assessment, the 6 Rs, sequencing, cost control — the plan that turns migration from gamble into sequence.",
    date: "Jun 10, 2026",
    readTime: "6 min read",
    body: [
      "Every good migration starts with an honest inventory: workloads, dependencies and true run cost. Skip this and sequencing becomes guesswork.",
      "Apply the 6 Rs per workload, sequence by blast radius and business value, and migrate in waves with tested cutovers.",
      "Land FinOps on day one: budgets, attribution and waste reviews, or the new bill quietly exceeds the old data center.",
    ],
  },
  {
    slug: "build-vs-buy-software",
    category: "Insights",
    title: "Build vs buy software: the real trade-offs",
    excerpt: "Build when software is your edge. Buy when the need is generic. A decision framework, not a coin flip.",
    date: "Jun 10, 2026",
    readTime: "6 min read",
    body: [
      "Build when the workflow is the differentiator and off-the-shelf forces painful compromise. Buy when the need is commodity — finance, HR, standard CRM.",
      "Total cost includes maintenance, upgrades and the opportunity cost of your roadmap. Cheap licenses with heavy customization are often the most expensive path.",
      "The hybrid answer wins often: buy the commodity core, build the differentiating edge, integrate cleanly.",
    ],
  },
  {
    slug: "how-long-does-seo-take",
    category: "Growth",
    title: "How long does SEO take to work?",
    excerpt: "Early movement in 3–6 months, meaningful traffic in 6–12. What drives the timeline and how to spot progress early.",
    date: "Jun 10, 2026",
    readTime: "5 min read",
    body: [
      "New domains and competitive verticals take longer. Technical debt and thin content add quarters. Authority compounds slowly, then suddenly.",
      "Leading indicators arrive first: crawl stats, indexation, impressions on long-tail, then rankings, then traffic, then pipeline.",
      "Pair SEO with GEO structure now — the same extractability work pays in both channels.",
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
