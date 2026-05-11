import { ShieldCheck } from 'lucide-react'
import { principles } from '../data/editorialData'
import { Reveal } from '../components/Reveal'
import { SectionHead } from '../components/SectionHead'

export function LegacySection() {
  return (
    <section id="legacy" className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <SectionHead kicker="Leadership philosophy" title="A managing director’s operating code" />

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {principles.map((principle) => (
          <Reveal key={principle.title}>
            <div className="principle">
              <ShieldCheck className="text-gold" />
              <span>{principle.title}</span>
              <p className="mt-4 text-sm font-normal leading-6 text-slate-600 dark:text-slate-300">{principle.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
