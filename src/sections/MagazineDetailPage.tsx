import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, FileText, Share2, Bookmark } from "lucide-react";
import { MAGAZINES } from "../data/editorialData";
import { Reveal } from "../components/Reveal";

export function MagazineDetailPage() {
  const { id } = useParams<{ id: string }>();
  const magazine = MAGAZINES.find((m) => m.id === id);

  if (!magazine) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f6f3ee] dark:bg-[#05070c]">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-black">Feature not found</h1>
          <Link to="/" className="gold-btn mt-6 inline-flex">
            <ArrowLeft size={18} /> Back home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f6f3ee] text-charcoal transition-colors dark:bg-[#05070c] dark:text-white">
      {/* Hero header */}
      <div className="relative overflow-hidden bg-navy pb-16 pt-32 text-white">
        <div className="absolute inset-0 opacity-10 [background:radial-gradient(circle_at_30%_30%,#d4af37,transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <Link
            to="/#press"
            className="inline-flex items-center gap-2 text-sm font-bold text-gold transition hover:gap-3"
          >
            <ArrowLeft size={16} /> Back to press
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
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

            <h1 className="mt-4 max-w-4xl font-serif text-4xl font-black leading-tight md:text-6xl">
              {magazine.headline}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
          {/* Main article */}
          <div>
            <Reveal>
              <div className="magazine-copy">
                <p className="dropcap">
                  {magazine.excerpt} This exclusive feature delves deep into the
                  strategic vision, operational excellence, and transformative
                  leadership that has positioned Empreo Group as one of Odisha's
                  most respected automotive conglomerates.
                </p>
                <p>
                  Under Dr. Abinash Samal's stewardship, the Group has not only
                  expanded its footprint to over 50 branches across 20 districts
                  but has also redefined what it means to deliver a premium
                  customer experience in India's rapidly evolving automotive
                  landscape. The feature explores how the phygital approach —
                  blending physical dealership excellence with digital innovation
                  — has become a cornerstone of the Group's growth strategy.
                </p>
                <p>
                  The article further examines Dr. Samal's commitment to
                  sustainability through the establishment of Odisha's first
                  eco-friendly Registered Vehicle Scrapping Facility in Khurda,
                  and his forward-looking advocacy for EV, CNG, LNG, and hydrogen
                  mobility solutions. His people-first philosophy, which includes
                  comprehensive employee welfare programs, mediclaim support, and
                  scholarships for employees' children, is highlighted as a model
                  for modern business leadership.
                </p>
                <blockquote className="my-10 border-y border-gold/50 py-8">
                  <p className="font-serif text-3xl font-black leading-tight md:text-4xl">
                    "Growth is strongest when enterprise, people, technology, and
                    responsibility move together."
                  </p>
                  <p className="mt-4 text-slate-500 dark:text-slate-400">
                    — Dr. Abinash Samal, as quoted in {magazine.title}
                  </p>
                </blockquote>
                <p>
                  The feature also covers Empreo Group's partnerships with
                  premium brands including Jaguar Land Rover, MG, Tata Passenger
                  Vehicles, Škoda, Kia, and JCB — demonstrating the breadth of
                  the Group's automotive portfolio and its ability to cater to
                  diverse customer segments across Odisha.
                </p>
                <p>
                  Industry analysts quoted in the piece credit Dr. Samal's
                  ability to balance aggressive expansion with sustainable
                  practices as a key differentiator in a competitive market. With
                  a turnover of ₹3,800 crore and a team of over 2,000
                  professionals, Empreo Group continues to set benchmarks for
                  automotive retail excellence in Eastern India.
                </p>
              </div>
            </Reveal>

            {/* Share actions */}
            <Reveal>
              <div className="mt-10 flex flex-wrap gap-3">
                <button className="ghost-btn">
                  <Share2 size={16} /> Share article
                </button>
                <button className="ghost-btn">
                  <Bookmark size={16} /> Save for later
                </button>
              </div>
            </Reveal>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <Reveal>
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
            </Reveal>

            <Reveal>
              <div className="glass-card p-6">
                <p className="eyebrow">Other features</p>
                <div className="mt-4 grid gap-4">
                  {MAGAZINES.filter((m) => m.id !== magazine.id).map((m) => (
                    <Link
                      key={m.id}
                      to={`/magazine/${m.id}`}
                      className="group flex gap-4 rounded-2xl border border-black/10 p-3 transition hover:border-gold dark:border-white/10"
                    >
                      <img
                        src={m.cover}
                        alt={m.title}
                        className="h-20 w-16 shrink-0 rounded-xl object-cover"
                      />
                      <div>
                        <p className="text-xs font-bold text-gold">
                          {m.title}
                        </p>
                        <p className="mt-1 text-sm font-bold leading-snug">
                          {m.headline}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </div>
    </div>
  );
}
