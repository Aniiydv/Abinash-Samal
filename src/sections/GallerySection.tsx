import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import { SectionHead } from "../components/SectionHead";
import { Reveal } from "../components/Reveal";
import { GALLERY_IMAGES } from "../data/editorialData";

export function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...Array.from(new Set(GALLERY_IMAGES.map((g) => g.category)))];
  const filtered = filter === "All" ? GALLERY_IMAGES : GALLERY_IMAGES.filter((g) => g.category === filter);

  const open = (idx: number) => setLightbox(idx);
  const close = () => setLightbox(null);
  const prev = () => setLightbox((l) => (l === null ? null : l === 0 ? filtered.length - 1 : l - 1));
  const next = () => setLightbox((l) => (l === null ? null : l === filtered.length - 1 ? 0 : l + 1));

  return (
    <section id="gallery" className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <SectionHead
        kicker="Visual journey"
        title="Gallery"
        intro="A curated collection of moments from Empreo Group's showrooms, events, team gatherings, and sustainability initiatives across Odisha."
      />

      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => { setFilter(cat); setLightbox(null); }}
            className={`chip ${filter === cat ? "chip-active" : ""}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((img, idx) => (
          <Reveal key={img.src}>
            <motion.button
              onClick={() => open(idx)}
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] border border-black/10 dark:border-white/10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={img.src}
                alt={img.caption}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-left opacity-0 transition duration-300 group-hover:opacity-100">
                <span className="eyebrow text-[10px]">{img.category}</span>
                <p className="mt-1 font-serif text-lg font-bold text-white">{img.caption}</p>
              </div>
              <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100">
                <ImageIcon size={18} />
              </div>
            </motion.button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <X size={24} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 lg:left-8"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 lg:right-8"
            >
              <ChevronRight size={24} />
            </button>

            <motion.div
              key={lightbox}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="mx-4 max-h-[85vh] max-w-5xl overflow-hidden rounded-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[lightbox].src}
                alt={filtered[lightbox].caption}
                className="max-h-[75vh] w-full object-contain"
              />
              <div className="bg-navy px-6 py-4 text-white">
                <span className="eyebrow text-[10px]">{filtered[lightbox].category}</span>
                <p className="mt-1 font-serif text-lg font-bold">{filtered[lightbox].caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
