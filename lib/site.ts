export const SITE = {
  name: "AXATHAR",
  tagline: "Your technology partner. Engineered.",
  url: "https://axathar.com",
  email: "help@axathar.in",
  salesEmail: "help@axathar.in",
  phone: "+91 78638 78698",
  locations: [
    { city: "India", label: "HQ · India", detail: "Serving clients pan-India" },
    { city: "Australia", label: "Australia", detail: "Serving clients Australia-wide" },
    { city: "USA", label: "USA", detail: "Serving clients across the US" },
    { city: "UK", label: "UK · Europe", detail: "Serving UK & Europe" },
  ],
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "X", href: "https://x.com" },
    { label: "YouTube", href: "https://youtube.com" },
  ],
} as const;

export const EASE = {
  expoOut: [0.16, 1, 0.3, 1] as const,
  expoInOut: [0.87, 0, 0.13, 1] as const,
};

export const DUR = {
  micro: 0.18,
  ui: 0.38,
  reveal: 0.8,
  editorial: 1.2,
};
