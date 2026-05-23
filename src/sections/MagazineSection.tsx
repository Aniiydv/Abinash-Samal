import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  X,
  Calendar,
  FileText,
  Share2,
  Bookmark,
  ArrowLeft,
} from "lucide-react";
import { SectionHead } from "../components/SectionHead";
import { Reveal } from "../components/Reveal";
import { MAGAZINES } from "../data/editorialData";

function MagazineDetail({
  magazine,
  onClose,
}: {
  magazine: (typeof MAGAZINES)[0];
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] overflow-y-auto bg-[#f6f3ee] dark:bg-[#05070c]"
    >
      {/* Header */}
      <div className="relative overflow-hidden bg-navy pb-12 pt-28 text-white">
        <div className="absolute inset-0 opacity-10 [background:radial-gradient(circle_at_30%_30%,#d4af37,transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-sm font-bold text-gold transition hover:gap-3"
          >
            <ArrowLeft size={16} /> Back to press
          </button>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="eyebrow">{magazine.title}</span>
            <span className="text-white/40">|</span>
            <span className="flex items-center gap-1 text-sm text-white/70">
              <Calendar size={14} /> {magazine.issue}
            </span>
            <span className="text-white/40">|</span>
            <span className="flex items-center gap-1 text-sm text-white/70">
              <FileText size={14} /> {magazine.pages} page feature
            </span>
          </div>

          <h1 className="mt-4 max-w-4xl font-serif text-4xl font-black leading-tight md:text-5xl">
            {magazine.headline}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
          {/* Main article */}
          <div>
            <div className="magazine-copy">
          <p className="dropcap">
            {magazine.article.intro}
          </p>

          {magazine.article.paragraphs.map((para, index) => (
            <p key={index}>{para}</p>
          ))}

          <blockquote className="my-10 border-y border-gold/50 py-8">
            <p className="font-serif text-3xl font-black leading-tight md:text-4xl">
              "{magazine.article.quote}"
            </p>

            <p className="mt-4 text-slate-500 dark:text-slate-400">
              — Dr. Abinash Samal, as quoted in {magazine.title}
            </p>
          </blockquote>
        </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <button className="ghost-btn">
                <Share2 size={16} /> Share article
              </button>
              <button className="ghost-btn">
                <Bookmark size={16} /> Save for later
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="glass-card overflow-hidden p-0">
              <img
                src={magazine.cover}
                alt={magazine.title}
                className="w-full object-cover"
              />
              <div className="p-5">
                <p className="eyebrow">Cover story</p>
                <h3 className="mt-2 font-serif text-xl font-black">
                  {magazine.headline}
                </h3>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  {magazine.title} • {magazine.issue}
                </p>
              </div>
            </div>

            <div className="glass-card p-6">
              <p className="eyebrow">Other features</p>
              <div className="mt-4 grid gap-4">
                {MAGAZINES.filter((m) => m.id !== magazine.id).map((m) => (
                  <button
                    key={m.id}
                    onClick={() => {}}
                    className="group flex gap-4 rounded-2xl border border-black/10 p-3 text-left transition hover:border-gold dark:border-white/10"
                  >
                    <img
                      src={m.cover}
                      alt={m.title}
                      className="h-20 w-16 shrink-0 rounded-xl object-cover"
                    />
                    <div>
                      <p className="text-xs font-bold text-gold">{m.title}</p>
                      <p className="mt-1 text-sm font-bold leading-snug">
                        {m.headline}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </motion.div>
  );
}

export function MagazineSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedMagazine = MAGAZINES.find((m) => m.id === selectedId);
  const featured = MAGAZINES.filter((m) => m.featured);
  const others = MAGAZINES.filter((m) => !m.featured);

  return (
    <>
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
                    <button
                      onClick={() => setSelectedId(mag.id)}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-gold transition hover:gap-3"
                    >
                      Read feature <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Other magazines — compact cards */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
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
                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                        {mag.excerpt}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedId(mag.id)}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-gold transition hover:gap-3"
                    >
                      Read feature <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Detail overlay */}
      <AnimatePresence>
        {selectedMagazine && (
          <MagazineDetail
            magazine={selectedMagazine}
            onClose={() => setSelectedId(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
