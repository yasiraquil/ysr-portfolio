import Hero from "@/components/Hero";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Specialisations from "@/components/Specialisations";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ImpactMetrics from "@/components/ImpactMetrics";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import CodingProfile from "@/components/CodingProfile";
import { Analytics } from "@vercel/analytics/react";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-slate-100 selection:bg-green-500/30">
      <Hero />
      <About />
      <Journey />
      <Specialisations />
      <Skills />
      <CodingProfile />
      <Projects />
      <ImpactMetrics />
      <Achievements />
      <Contact />
      <Analytics />

    </main>
  );
}
