export type Review = {
  name: string;
  role: string;
  text: string;
  initials: string;
};

export const reviews: Review[] = [
  { name: "Maya Richardson", role: "COO · Logistics group", text: "They reoriented a generic quote into a strategy fitted to how we actually operate. Disputes that took days now take minutes.", initials: "MR" },
  { name: "Daniel Okafor", role: "Founder · SaaS", text: "Senior engineers in our time zone, weekly demos, zero drama. The agent they shipped resolves most tickets without us.", initials: "DO" },
  { name: "Sofia Marín", role: "Legal practice lead", text: "They designed the site to our taste and built the positioning engine behind it. Inquiries arrive weekly now.", initials: "SM" },
  { name: "James Whitfield", role: "Publisher · Media", text: "Others struggled to grasp a community-first concept. Axathar embraced it, stayed candid, and kept every step cost-conscious.", initials: "JW" },
  { name: "Priya Nair", role: "Ops Director · Manufacturing", text: "One pilot line proved the model. Six months later the whole plant runs on trusted OEE data.", initials: "PN" },
  { name: "Carlos Méndez", role: "CFO · Distribution", text: "From invisible on Google to thousands of organic visits. The catalog finally earns its inventory.", initials: "CM" },
  { name: "Elena Fischer", role: "Clinic network director", text: "No-shows down by a third. Staff actually like the system — that has never happened before.", initials: "EF" },
  { name: "Tom Alvarez", role: "VP Sales · Lending", text: "Forecasts stopped being fiction. Adoption was the acceptance test and they passed it.", initials: "TA" },
  { name: "Aisha Khan", role: "E-commerce lead", text: "Complete, resolutive, personal attention. The project moved forward from week one.", initials: "AK" },
];
