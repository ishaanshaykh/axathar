import { PortfolioSection } from "@/components/sections/Portfolio";
import Image from "next/image";
import { HeroField } from "@/components/webgl/HeroField";
import { Eyebrow } from "@/components/ui/Controls";
import { Reveal } from "@/components/motion/Reveal";
import { Marquee } from "@/components/motion/Bits";
import { TransitionLink } from "@/components/motion/Transition";
import { SectionHead } from "@/components/sections/Heads";
import { BigCTA } from "@/components/sections/Social";
import { ServiceCard } from "@/components/sections/Services";
import { services } from "@/data/services";

export default function Home() {
  return <>
    <section className="globe-hero relative overflow-hidden">
      <HeroField className="hero-globe" />
      <div className="wrap relative pb-16 pt-3">
        <div className="flex items-center justify-between"><Eyebrow>AXATHAR — Your technology partner</Eyebrow><p className="t-mono-num hidden text-xs text-[var(--color-muted)] md:block">CONNECTED. SECURE. READY.</p></div>
        <h1 className="t-hero globe-headline mt-8"><span className="globe-title-line"><span>Your tech partner.</span></span><span className="globe-title-line brand-gradient"><span>Without limits.</span></span></h1>
        <div className="mx-auto mt-8 max-w-2xl text-center"><p className="t-lead text-[var(--color-muted)]">From the systems that power your workplace to the digital experiences that grow your business. IT, cloud, security and automation — connected by AXATHAR.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><TransitionLink href="/services" className="brand-button">Explore our services <span aria-hidden="true">↗</span></TransitionLink><TransitionLink href="/contact" className="secondary-button">Let’s talk</TransitionLink></div></div>
      </div>
    </section>
    <Marquee slow className="border-y border-[var(--color-line)] py-5"><p className="whitespace-nowrap px-5 text-xs tracking-[.15em] text-[var(--color-muted)]">INFRASTRUCTURE · CLOUD · MANAGED IT · SECURITY · AUTOMATION · DIGITAL · EVENTS · </p></Marquee>
    <PortfolioSection />
    <section className="wrap py-20 md:py-28">
      <SectionHead eyebrow="What we do" title="The right technology. For every part of your business." lead="Build a dependable foundation, protect what matters and make everyday work simpler. Choose the support you need." link={{label:"All services",href:"/services"}} />
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{services.slice(0,7).map((service,index) => <ServiceCard key={service.slug} service={service} index={index} />)}</div>
    </section>
    <section className="wrap pb-20">
      <div className="brand-panel grid gap-12 rounded-[2rem] border border-[var(--color-line)] p-8 md:grid-cols-2 md:p-14">
        <div className="flex flex-col justify-between"><div><Eyebrow>One connected partner</Eyebrow><h2 className="t-h2 mt-5">Less complexity.<br /><span className="brand-gradient">More possibility.</span></h2></div><Image src="/axathar-logo.png" alt="AXATHAR infinity symbol" width={2103} height={748} sizes="(max-width: 768px) 75vw, 400px" className="mt-10 h-auto w-full max-w-sm" /></div>
        <div className="space-y-7">{[
          ['Build the foundation','Equip your team with reliable devices, networks and cloud systems that work together.'],
          ['Protect the everyday','Bring security, backup and managed support into the way your business operates.'],
          ['Create what’s next','Connect workflows, strengthen your digital presence and deliver memorable experiences.'],
        ].map(([title,body],i) => <Reveal key={title}><div className="border-b border-[var(--color-line)] pb-6"><span className="t-mono-num text-xs text-[var(--color-accent)]">0{i+1}</span><h3 className="font-display mt-3 text-2xl">{title}</h3><p className="t-body mt-3 text-[var(--color-muted)]">{body}</p></div></Reveal>)}</div>
      </div>
    </section>
    <section className="wrap pb-20"><SectionHead eyebrow="Specialist support" title="Go further with your technology." lead="Focused services for stronger security, audit preparation and a more productive workplace." /><div className="mt-10 grid gap-5 md:grid-cols-3">{services.slice(7).map((service,index) => <ServiceCard key={service.slug} service={service} index={index+7} />)}</div></section>
    <BigCTA />
  </>;
}
