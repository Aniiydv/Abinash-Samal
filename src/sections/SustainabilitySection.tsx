
import { Reveal } from "../components/Reveal";
import { SUSTAINABILITY_ITEMS } from "../data/editorialData";
import { Zap } from "lucide-react";

export function SustainabilitySection() {
  return (
    <section
      id="vision"
      className="relative overflow-hidden bg-navy py-20 text-white"
    >
      <div className="absolute inset-0 opacity-20 [background:linear-gradient(90deg,transparent_0_48%,#d4af37_49%_51%,transparent_52%),radial-gradient(circle_at_20%_20%,#d4af37,transparent_28%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[.95fr_1.05fr] lg:px-8">
        <Reveal>
          <img
            src="/images/empreo-sustainable-mobility.webp"
            alt="Sustainable mobility infrastructure"
            className="h-full min-h-96 rounded-[2rem] object-cover shadow-2xl"
          />
        </Reveal>

        <Reveal>
          <p className="eyebrow">Executive vision</p>
          <h2 className="mt-4 font-serif text-4xl font-black md:text-6xl">
            Innovation, sustainability, and people-first growth.
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/75">
            Dr. Samal's vision 
            to be the most trusted and innovative automotive group in the region, setting the benchmark for excellence across every brand we represent and every journey we support.

          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {SUSTAINABILITY_ITEMS.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/10 p-5"
              >
                <Zap className="text-gold" />
                <b className="mt-4 block">{item}</b>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
