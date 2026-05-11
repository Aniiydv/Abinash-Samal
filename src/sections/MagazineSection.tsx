import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import { SectionHead } from "../components/SectionHead";
import { Reveal } from "../components/Reveal";
import { MAGAZINES } from "../data/editorialData";

export function MagazineSection() {
  const featured = MAGAZINES.filter((m) => m.featured);
  const others = MAGAZINES.filter((m) => !m.featured);

  return (
    <section id="press" className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <SectionHead
        kicker="Media & press"
        title="Featured in leading magazines"
        intro="Dr. Samal's leadership journey and Empreo Group's transformation have been covered by India's top business publications."
      />

      {/* Featured magazines — large cards */}
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {featured.map((mag) => (
          <Reveal key={mag.id}>
            <div className="group glass-card overflow-hidden p-0">
              <div className="grid sm:grid-cols-[180px_1fr]">
                <div className="relative aspect-[3/4] overflow-hidden sm:aspect-auto">
                  <img
                    src={mag.cover}
                    alt={mag.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center gap-2">
                      <BookOpen size={14} className="text-gold" />
                      <span className="text-xs font-bold uppercase tracking-widest text-gold">
                        {mag.issue}
                      </span>
                    </div>
                    <h3 className="mt-2 font-serif text-2xl font-black leading-tight">
                      {mag.headline}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {mag.excerpt}
                    </p>
                  </div>
                  <Link
                    to={`/magazine/${mag.id}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-gold transition hover:gap-3"
                  >
                    Read feature <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Other magazines — compact cards */}
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {others.map((mag) => (
          <Reveal key={mag.id}>
            <div className="group glass-card overflow-hidden p-0">
              <div className="grid sm:grid-cols-[140px_1fr]">
                <div className="relative aspect-[3/4] overflow-hidden sm:aspect-auto">
                  <img
                    src={mag.cover}
                    alt={mag.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-between p-5">
                  <div>
                    <div className="flex items-center gap-2">
                      <BookOpen size={14} className="text-gold" />
                      <span className="text-xs font-bold uppercase tracking-widest text-gold">
                        {mag.issue}
                      </span>
                    </div>
                    <h3 className="mt-2 font-serif text-xl font-black leading-tight">
                      {mag.headline}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300 line-clamp-3">
                      {mag.excerpt}
                    </p>
                  </div>
                  <Link
                    to={`/magazine/${mag.id}`}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-gold transition hover:gap-3"
                  >
                    Read feature <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link to="/magazines" className="gold-btn">
          View all press coverage <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
