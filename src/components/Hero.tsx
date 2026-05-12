
// import { motion, useScroll, useTransform } from 'framer-motion'
// import { ChevronRight } from 'lucide-react'

// export function Hero() {
//   const { scrollY } = useScroll()
//   const y = useTransform(scrollY, [0, 700], [0, 120])

//   return (
//     <section className="relative min-h-screen overflow-hidden px-4 pt-32 lg:px-8">
//       <motion.div
//         style={{ y }}
//         className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,rgba(212,175,55,.22),transparent_30%),linear-gradient(135deg,#f6f3ee,#ffffff_42%,#0b1220_42%,#05070c)] dark:bg-[radial-gradient(circle_at_15%_15%,rgba(212,175,55,.22),transparent_30%),linear-gradient(135deg,#05070c,#0b1220)]"
//       />

//       <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_.95fr]">
//         <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="pb-16">
//           <div className="mb-8 flex flex-wrap items-center gap-3">
//             <span className="rounded-full bg-gold px-4 py-2 text-xs font-black uppercase tracking-[.22em] text-navy">Executive portfolio</span>
//             <span className="text-sm font-bold uppercase tracking-[.22em] text-slate-500 dark:text-white/60">Managing Director • Empreo Group</span>
//           </div>

//           <h1 className="font-serif text-6xl font-black leading-[.86] tracking-[-.06em] md:text-8xl xl:text-[6.8rem]">
//             Dr. Abinash Samal.
//           </h1>

//           <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-600 dark:text-white/70">
//             Managing Director of the Samal & Empreo Group, one of Odisha’s leading automotive and mobility conglomerates. A premium profile of his leadership, office, business empire, sustainability mission, and people-first vision.
//           </p>

//           <div className="mt-9 flex flex-wrap gap-3">
//             <a className="gold-btn" href="#profile">
//               View profile <ChevronRight size={18} />
//             </a>
//             <a className="ghost-btn" href="#companies">Business empire</a>
//           </div>
//         </motion.div>

//         <motion.figure
//           initial={{ opacity: 0, scale: 0.96 }}
//           animate={{ opacity: 1, scale: 1 }}
//           className="relative min-h-[620px] overflow-hidden rounded-t-[3rem] border border-white/20 bg-charcoal shadow-2xl"
//         >
//           <img
//             src="/images/dr-abinash-samal-editorial.png"
//             alt="Polished executive portrait of Dr. Abinash Samal"
//             className="absolute inset-0 h-full w-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
//           <figcaption className="absolute bottom-6 left-6 right-6 rounded-[2rem] border border-white/20 bg-white/10 p-5 text-white backdrop-blur-xl">
//             <p className="eyebrow">Executive portrait</p>
//             <h2 className="mt-2 font-serif text-3xl font-black">Dr. Abinash Samal</h2>
//             <p className="mt-2 text-sm text-white/70">Managing Director,Samal & Empreo Group. Automotive business leader, luxury mobility strategist, and sustainability advocate.</p>
//           </figcaption>
//         </motion.figure>
//       </div>
//     </section>
//   )
// }


import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const images = [
  "/images/dr-abinash-samal-editorial.png",
  "/images/dr-abinash-samal-2.jpeg",
  "/images/dr-abinash-samal-3.png",
  // "/images/dr-abinash-samal-4.jpg",
];

export function Hero() {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 700], [0, 120]);

  const [current, setCurrent] = useState(0);

  // Auto Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden px-4 pt-32 lg:px-8">
      {/* Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,rgba(212,175,55,.22),transparent_30%),linear-gradient(135deg,#f6f3ee,#ffffff_42%,#0b1220_42%,#05070c)] dark:bg-[radial-gradient(circle_at_15%_15%,rgba(212,175,55,.22),transparent_30%),linear-gradient(135deg,#05070c,#0b1220)]"
      />

      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_.95fr]">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="pb-16"
        >
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-gold px-4 py-2 text-xs font-black uppercase tracking-[.22em] text-navy">
              Executive portfolio
            </span>

            <span className="text-sm font-bold uppercase tracking-[.22em] text-slate-500 dark:text-white/60">
              Managing Director • Empreo Group
            </span>
          </div>

          <h1 className="font-serif text-6xl font-black leading-[.86] tracking-[-.06em] md:text-8xl xl:text-[6.8rem]">
            Dr. Abinash Samal.
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-600 dark:text-white/70">
            Managing Director of the Samal & Empreo Group,
            one of Odisha’s leading automotive and mobility
            conglomerates. A premium profile of his
            leadership, office, business empire,
            sustainability mission, and people-first vision.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a className="gold-btn" href="#profile">
              View profile
              <ChevronRight size={18} />
            </a>

            <a className="ghost-btn" href="#companies">
              Business empire
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE SLIDER */}
        <motion.figure
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative min-h-[620px] overflow-hidden rounded-t-[3rem] border border-white/20 bg-charcoal shadow-2xl"
        >
          {/* Animated Images */}
          <AnimatePresence mode="wait">
            <motion.img
              key={images[current]}
              src={images[current]}
              alt="Executive portrait of Dr. Abinash Samal"
              initial={{
                opacity: 0,
                scale: 1.08,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 1.03,
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />

          {/* Caption */}
          <figcaption className="absolute bottom-6 left-6 right-6 rounded-[2rem] border border-white/20 bg-white/10 p-5 text-white backdrop-blur-xl">
            <p className="eyebrow">
              Executive portrait
            </p>

            <h2 className="mt-2 font-serif text-3xl font-black">
              Dr. Abinash Samal
            </h2>

            <p className="mt-2 text-sm text-white/70">
              Managing Director, Samal & Empreo Group.
              Automotive business leader, luxury mobility
              strategist, and sustainability advocate.
            </p>

            {/* Slider Dots */}
            <div className="mt-5 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    current === index
                      ? "w-8 bg-gold"
                      : "w-2 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}