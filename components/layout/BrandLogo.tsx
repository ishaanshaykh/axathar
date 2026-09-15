import Image from "next/image";

export function BrandLogo({ large = false }: { large?: boolean }) {
  return <span className={`inline-flex items-center ${large ? "gap-4" : "gap-3"}`}>
    <Image src="/axathar-logo.png" alt="" width={2103} height={748} sizes={large ? "100px" : "64px"} className={large ? "h-auto w-24" : "h-auto w-16"} />
    <span className={`font-display font-bold tracking-[-0.03em] text-white ${large ? "text-3xl" : "text-xl"}`}>AXATHAR</span>
  </span>;
}
