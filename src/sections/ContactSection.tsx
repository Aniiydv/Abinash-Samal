import {
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react";

import { motion } from "framer-motion";

const socials = [
  // { icon: Linkedin, link: "https://www.instagram.com/abinash___samal" },
  { icon: Instagram, link: "https://www.instagram.com/abinash___samal" },
  { icon: Facebook, link: "https://www.facebook.com/share/17dgDzuaoP/?mibextid=wwXIfr" },
];

const brands = [
  { name: 'Skoda', logo: '/images/skoda.webp' },
  { name: 'MG', logo: '/images/mglogo.webp' },
  { name: 'Land Rover', logo: '/images/land-rover.webp' },
  { name: 'Kia', logo: '/images/kialogo.webp' },
  { name: 'Tata Motors', logo: '/images/tatacomricial.webp' },
  { name: 'JCB', logo: '/images/jcb.webp' },
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
                        whileHover={{ scale: 1.08 }}
                       className="group relative flex h-32 items-center justify-center overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-500 hover:border-[#D4AF37] hover:shadow-[0_0_25px_rgba(212,175,55,0.15)]"
                      >
                        {/* glow effect */}
                        <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-r from-[#D4AF37]/10 via-transparent to-[#D4AF37]/10" />

                        <img
                            src={brand.logo}
                            alt={brand.name}
                            onError={(e) => {
                              e.currentTarget.src =
                                "https://via.placeholder.com/120x40?text=" + brand.name
                            }}
                           className="max-h-10 w-auto object-contain transition duration-300 group-hover:scale-105"
                          />

                        {/* subtle border glow ring */}
                        <div className="absolute inset-0 rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100 ring-1 ring-[#D4AF37]/30" />
                      </motion.div>
                  ))}

            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE MAP ================= */}
      <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl">

          {/* HEADER */}
          <div className="border-b border-white/10 px-6 py-4">
            <p className="text-sm font-semibold tracking-wide text-white/90">
              Empreo Group Office — Odisha, India
            </p>
          </div>

          {/* MAP */}
          <iframe
            title="Empreo Group Office Location Map"
            src="https://www.google.com/maps?q=20.3519194,85.8909893&z=17&output=embed"
            width="100%"
            height="520"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[520px] w-full grayscale transition duration-700 hover:grayscale-0"
            allowFullScreen
          />
        </div>

      </div>
    </section>
  );
}