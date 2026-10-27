import { Capabilities } from "@/components/sections/Capabilities";
import { Cta } from "@/components/sections/Cta";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Values } from "@/components/sections/Values";
import { Work } from "@/components/sections/Work";

export default function Home() {
  return (
    <main className="min-h-dvh bg-bg">
      <Hero />
      <Marquee />
      <Capabilities />
      <Values />
      <Work />
      <Experience />
      <Cta />
    </main>
  );
}
