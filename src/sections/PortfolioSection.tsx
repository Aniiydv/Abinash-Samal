'use client'

import { motion } from 'framer-motion'

import { featureFilters, features } from '../data/editorialData'
import { FeatureCard } from '../components/FeatureCard'
import { SectionHead } from '../components/SectionHead'
import { ExternalLink } from 'lucide-react'

type PortfolioSectionProps = {
  activeFilter: string
  onFilterChange: (filter: string) => void
}

// export function PortfolioSection({ activeFilter, onFilterChange }: PortfolioSectionProps) {
//   const filteredFeatures = activeFilter === 'All'
//     ? features
//     : features.filter((feature) => feature.tags.includes(activeFilter) || feature.title.includes(activeFilter))

//   return (
//     <section id="companies" className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
//       <SectionHead
//         kicker="Business empire"
//         title="The business empire led by Dr. Samal"
//         intro="A focused view of Empreo Group’s scale, automotive brand presence, sustainability initiatives, and customer-first transformation under his executive direction."
//       />

//       <div className="mt-8 flex flex-wrap gap-2">
//         {featureFilters.map((filter) => (
//           <button key={filter} onClick={() => onFilterChange(filter)} className={`chip ${activeFilter === filter ? 'chip-active' : ''}`}>
//             {filter}
//           </button>
//         ))}
//       </div>

//       <div className="mt-8 grid gap-6 lg:grid-cols-3">
//         {filteredFeatures.map((feature) => (
//           <FeatureCard key={feature.title} feature={feature} />
//         ))}
//       </div>

//       <div className="mt-8 text-center">
//         <a href="https://emprogroup.vercel.app/" target="_blank" rel="noreferrer" className="gold-btn">
//           Visit Empreo Group website <ExternalLink size={18} />
//         </a>
//       </div>
//     </section>
//   )
// }

export function PortfolioSection() {
  return (
    <section id="companies" className="bg-black text-white">

      {/* HEADER CONTENT */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-14 text-center">
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 text-sm uppercase tracking-[0.45em] text-[#D4AF37]"
        >
          Business Empire
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold leading-tight md:text-7xl"
        >
          The business empire <br />
          led by Dr. Samal
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-neutral-300"
        >
          Empreo Group has emerged as one of Odisha’s leading automotive
          conglomerates spanning luxury, commercial, and sustainable mobility
          sectors with a strong customer-first vision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="mt-10"
        >
          <a
            href="https://emprogroup.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="gold-btn inline-flex items-center gap-2"
          >
            Visit Empreo Group Website
          </a>
        </motion.div>
      </div>

      {/* FULLSCREEN VIDEO */}
      <div className="relative h-screen overflow-hidden">

        {/* VIDEO */}
        <div className="absolute inset-0 animate-slowZoom">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          >
            <source
              src="/videos/empreo-showcase.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* CINEMATIC GRADIENTS */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-black to-transparent" />

      </div>
    </section>
  )
}