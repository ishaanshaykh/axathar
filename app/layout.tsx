import type { Metadata, Viewport } from "next";
import { Archivo, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Shell } from "@/components/layout/Shell";
import { SITE } from "@/lib/site";

const display = Archivo({ variable: "--font-display", subsets: ["latin"], weight: ["500", "600", "700", "800"] });
const sans = Inter({ variable: "--font-sans", subsets: ["latin"] });
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400", "600"] });

export const metadata: Metadata = {
  icons: { icon: "/axathar-logo.png", apple: "/axathar-logo.png" },
  metadataBase: new URL(SITE.url),
  title: { default: "AXATHAR — Your technology partner. Engineered.", template: "%s — AXATHAR" },
  description:
    "AXATHAR connects IT infrastructure, cloud, managed support, security, AI automation, digital solutions and events.",
  alternates: { canonical: SITE.url },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: "AXATHAR",
    title: "AXATHAR — Your technology partner. Engineered.",
    description: "Infrastructure, security and digital experiences — connected by AXATHAR.",
  },
  twitter: { card: "summary_large_image", title: "AXATHAR", description: "Your technology partner. Engineered." },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#0B0B0C", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "AXATHAR",
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phone,
    description: "Technology services for infrastructure, cloud, security, automation, digital solutions and events.",
    areaServed: "Worldwide",
  };
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[400] focus:rounded-full focus:bg-black focus:px-4 focus:py-2 focus:text-white">
          Skip to content
        </a>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
