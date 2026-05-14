'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

export function PortfolioSection() {
  return (
    <section
      id="companies"
      className="relative overflow-hidden bg-black py-24 text-white"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.45em] text-[#D4AF37]">
            Business Empire
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-6xl">
            The business empire
            <br />
            led by Empreo Group.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-300">
            Empreo Group has emerged as one of Odisha’s leading automotive
            conglomerates spanning luxury, commercial, and sustainable mobility
            sectors with a strong customer-first vision and premium brand
            partnerships.
          </p>

          {/* STATS */}
          <div className="mt-10 grid grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-[#D4AF37]">20+</h3>
              <p className="mt-2 text-sm text-neutral-400">
                Years of Leadership
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-[#D4AF37]">15+</h3>
              <p className="mt-2 text-sm text-neutral-400">
                Automotive Ventures
              </p>
            </div>
          </div>

          {/* BUTTON */}
          <div className="mt-10">
            <a
              href="https://emprogroup.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="gold-btn inline-flex items-center gap-2"
            >
              Visit Empreo Group Website
              <ExternalLink size={18} />
            </a>
          </div>
        </motion.div>

        {/* RIGHT VIDEO FRAME */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* GLOW */}
          <div className="absolute -inset-4 rounded-[2rem] bg-[#D4AF37]/10 blur-3xl" />

          {/* FRAME */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-md">

            {/* TOP BAR */}
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>

            {/* VIDEO */}
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="aspect-video w-full object-cover"
            >
              <source
                src="/videos/empreo-showcase.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  )
}