export type PortfolioProject = {
  slug: string;
  name: string;
  category: string;
  description: string;
  url: string;
  image: string;
  accent: string;
  tags: string[];
};

// Names and descriptions verified against the four websites supplied by AXATHAR.
export const portfolio: PortfolioProject[] = [
  {
    slug: "prestige-estates", name: "Prestige Estates", category: "Real estate",
    description: "A property discovery experience for finding, buying and renting a place to call home.",
    url: "https://prestige.axathar.com", image: "/portfolio/prestige-estates.png",
    accent: "100, 210, 174", tags: ["Property listings", "Search & discovery"],
  },
  {
    slug: "soda", name: "SODA by Danish", category: "Fashion & commerce",
    description: "An expressive fashion storefront with editorial collections and an after-dark identity.",
    url: "https://soda.axathar.com", image: "/portfolio/soda.png",
    accent: "234, 162, 140", tags: ["E-commerce", "Brand experience"],
  },
  {
    slug: "aurelis", name: "Aurelis", category: "Architecture & development",
    description: "An architectural showcase built around landmark projects, philosophy and considered spaces.",
    url: "https://aurelis.axathar.com", image: "/portfolio/aurelis.png",
    accent: "172, 161, 240", tags: ["Project showcase", "Editorial design"],
  },
  {
    slug: "lenexa", name: "Lenexa Remedies", category: "Healthcare & pharma",
    description: "A modern pharmaceutical presence bringing therapies, products and company information together.",
    url: "https://lenexa.axathar.com", image: "/portfolio/lenexa.png",
    accent: "97, 184, 241", tags: ["Corporate website", "Product portfolio"],
  },
];
