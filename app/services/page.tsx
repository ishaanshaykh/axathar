import type { Metadata } from "next";
import { PageHero } from "@/components/sections/Heads";
import { ServicesIndex } from "@/components/sections/Services";
import { BigCTA } from "@/components/sections/Social";
export const metadata: Metadata = { title: "Services", description: "IT infrastructure, cloud computing, managed IT, security and backup, AI automation, digital solutions and event management from AXATHAR." };
export default function ServicesPage() {
  return <><PageHero eyebrow="Our services" title="Technology that works together." lead="From infrastructure and ongoing IT support to automation, digital experiences and events. Explore our core services and specialist capabilities." /><section className="wrap pb-20"><ServicesIndex /></section><BigCTA title="Find the right starting point." body="Tell us what you need to build, protect or improve. We’ll help you identify the right services." /></>;
}
