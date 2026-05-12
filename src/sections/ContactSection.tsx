import {
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react";

import { motion } from "framer-motion";

const socials = [
  { icon: Linkedin, link: "https://linkedin.com" },
  { icon: Instagram, link: "https://instagram.com" },
  { icon: Facebook, link: "https://facebook.com" },
];

// Replace these with your real brand logo paths
const brands = [
  {
    name: "Škoda",
    logo: "https://cdn.simpleicons.org/skoda",
  },
  {
    name: "MG",
    logo: "https://cdn.simpleicons.org/mg",
  },
  {
    name: "Land Rover",
    logo: "https://cdn.worldvectorlogo.com/logos/land-rover-1.svg",
  },
 
  {
    name: "Kia",
    logo: "https://cdn.worldvectorlogo.com/logos/kia-2021.svg",
  },
  {
    name: "Tata",
    logo: "https://cdn.simpleicons.org/tata",
  },
  {
    name: "JCB",
    logo: "https://cdn.simpleicons.org/jcb",
  },
]

export function ContactSection() {
  return (
    <section
      id="office"
      className="relative bg-[#05070c] px-4 py-28 text-white lg:px-8"
    >
      {/* Ambient glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">

        {/* ================= LEFT SIDE ================= */}
        <div>

          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            Connect
          </p>

          <h2 className="mt-4 font-serif text-5xl font-black md:text-6xl">
            Social Presence
          </h2>

          <p className="mt-6 text-white/60">
            Official presence across global platforms.
          </p>

          {/* SOCIAL ICONS ONLY */}
          <div className="mt-10 flex gap-5">

            {socials.map((s, i) => (
              <motion.a
                key={i}
                href={s.link}
                target="_blank"
                whileHover={{ scale: 1.15, y: -3 }}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 backdrop-blur-xl transition hover:border-gold hover:text-gold"
              >
                <s.icon size={20} />
              </motion.a>
            ))}

          </div>

          {/* ================= BRANDS LOGO GRID ================= */}
          <div className="mt-16 border-t border-white/10 pt-10">

            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              Owned Brands
            </p>

            <h3 className="mt-4 text-2xl font-bold">
              Business Ecosystem
            </h3>

            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3">

             {brands.map((brand, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="group flex h-32 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-500 hover:border-[#D4AF37] hover:bg-white/[0.06]"
                    >
                     <img
                        src={brand.logo}
                        alt={brand.name}
                        className="max-h-12 w-auto object-contain opacity-70 grayscale brightness-200 transition duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                      />
                    </motion.div>
                  ))}

            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE MAP ================= */}
        <div className="overflow-hidden rounded-[2.5rem] border border-white/10">

          <div className="border-b border-white/10 bg-white/5 px-6 py-4">
            <p className="text-sm font-semibold">
              Empreo Group Office — Odisha, India
            </p>
          </div>

          
          <iframe
              src="https://maps.app.goo.gl/3CFTszUBP54s7nAf6?g_st=ic"
              width="100%"
              height="520"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition"
              allowFullScreen
            />
        </div>

      </div>
    </section>
  );
}