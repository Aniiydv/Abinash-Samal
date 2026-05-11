import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { MAGAZINES } from "../data/editorialData";
import { Reveal } from "../components/Reveal";

export function MagazinesListPage() {
  return (
    <div className="min-h-screen bg-[#f6f3ee] text-charcoal transition-colors dark:bg-[#05070c] dark:text-white">
      {/* Header */}
      <div className="relative overflow-hidden bg-navy pb-16 pt-32 text-white">
        <div className="absolute inset-0 opacity-10 [background:radial-gradient(circle_at_30%_30%,#d4af37,transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-gold transition hover:gap-3"
          >
            <ArrowLeft size={16} /> Back home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="eyebrow mt-6">Press & media</p>
            <h1 className="mt-3 font-serif text-5xl font-black md:text-6xl">
              All magazine features
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/70">
              A complete archive of Dr. Samal's features and interviews in
              India's leading business publications.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MAGAZINES.map((mag, idx) => (
            <Reveal key={mag.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link
                  to={`/magazine/${mag.id}`}
                  className="group block overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-white/[.05]"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={mag.cover}
                      alt={mag.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 opacity-0 transition duration-300 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-2 text-sm font-bold text-gold">
                        Read feature <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2">
                      <BookOpen size={14} className="text-gold" />
                      <span className="text-xs font-bold uppercase tracking-widest text-gold">
                        {mag.issue}
                      </span>
                    </div>
                    <h3 className="mt-2 font-serif text-lg font-black leading-tight">
                      {mag.headline}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300 line-clamp-3">
                      {mag.excerpt}
                    </p>
                  </div>
                </Link>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
