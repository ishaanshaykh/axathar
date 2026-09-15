export type MethodStep = {
  id: string;
  number: string;
  title: string;
  question: string;
  body: string;
  deliverable: string;
  points: string[];
  accent: string;
};

export const methodSteps: MethodStep[] = [
  {
    id: "discover",
    number: "01",
    title: "Discover",
    question: "How does your business actually run?",
    body: "We map the operation as it really works — workflows, workarounds, owners, systems. Not the org chart; the reality. No fix is worth anything if it solves the wrong problem.",
    deliverable: "A shared, honest picture of the current state.",
    points: ["We start at the uncomfortable truth", "How work actually flows — not the slide version", "Clarity before code"],
    accent: "#2B4EFF",
  },
  {
    id: "diagnose",
    number: "02",
    title: "Diagnose",
    question: "Where does it hurt, and why?",
    body: "We isolate root causes behind symptoms — bottlenecks, silos, manual grind, data nobody trusts. A doctor does not prescribe before diagnosis, and neither do we.",
    deliverable: "A prioritized diagnosis with the real cost of each issue.",
    points: ["Every friction, bottleneck and silent leak — mapped", "An executive diagnosis we sign our name to", "Quantified truth. Zero opinions."],
    accent: "#7A5CFF",
  },
  {
    id: "design",
    number: "03",
    title: "Design",
    question: "What is the right fix for you?",
    body: "We design the solution around your operation — pragmatic, measurable, built to adopt. No templates forced onto your business; the architecture fits how your team works.",
    deliverable: "A concrete plan, scoped and estimated, with success metrics.",
    points: ["Every decision tied to a business KPI", "If it doesn't move the needle, it doesn't make the plan", "Blueprint, not buzzwords"],
    accent: "#00A37E",
  },
  {
    id: "deliver",
    number: "04",
    title: "Deliver",
    question: "Can you actually ship it?",
    body: "We build and ship with senior engineers in your time zone. Victory is not deploy — it is your team running it without us. Understood without a manual.",
    deliverable: "Working software in production, on time and on budget.",
    points: ["Senior pods, weekly shippable increments", "Adoption engineered from day one", "AI-accelerated delivery without cutting corners"],
    accent: "#FF6B2C",
  },
  {
    id: "evolve",
    number: "05",
    title: "Evolve",
    question: "What happens after launch?",
    body: "We stay. Technology that keeps improving as your business changes — monitoring, iteration, next opportunity. What doesn't evolve is already decaying.",
    deliverable: "A system that compounds in value instead of decaying.",
    points: ["While most invoice and disappear, we stay", "Your business changes quarterly — tech must match", "Partnership, not project"],
    accent: "#D8FF3E",
  },
];
