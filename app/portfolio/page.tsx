import type { Metadata } from "next";
import { PortfolioSection } from "@/components/sections/Portfolio";
import { BigCTA } from "@/components/sections/Social";
export const metadata: Metadata = { title: "Portfolio", description: "Explore AXATHAR’s work: Prestige Estates, SODA by Danish, Aurelis and Lenexa Remedies.", alternates: { canonical: "/portfolio" } };
export default function PortfolioPage() { return <><PortfolioSection standalone /><BigCTA title="Your next chapter starts here." body="Let’s build a website that feels unmistakably yours." /></>; }
