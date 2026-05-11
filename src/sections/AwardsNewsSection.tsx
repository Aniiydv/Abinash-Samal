import { Award, CalendarDays, ExternalLink, Newspaper, Trophy } from 'lucide-react'
import { awards, companyLinks, newsItems } from '../data/editorialData'
import { Reveal } from '../components/Reveal'
import { SectionHead } from '../components/SectionHead'

export function AwardsNewsSection() {
  return (
    <section id="awards" className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <SectionHead
        kicker="Recognition & news"
        title="Awards, updates, and company links"
        intro="A curated portfolio section for Dr. Samal’s recognitions, leadership news, and official Empreo Group web destinations."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_.95fr]">
        <Reveal>
          <div className="glass-card p-7">
            <div className="flex items-center gap-3">
              <Trophy className="text-gold" />
              <h3 className="font-serif text-3xl font-black">Awards & recognition</h3>
            </div>
            <div className="mt-6 grid gap-4">
              {awards.map((award) => (
                <article key={award.title} className="rounded-3xl border border-black/10 bg-white/60 p-5 dark:border-white/10 dark:bg-white/10">
                  <div className="flex items-start gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gold/15 text-gold"><Award /></span>
                    <div>
                      <p className="text-xs font-black uppercase tracking-[.22em] text-gold">{award.year} • {award.category}</p>
                      <h4 className="mt-2 font-serif text-2xl font-black">{award.title}</h4>
                      <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">{award.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="glass-card p-7">
            <div className="flex items-center gap-3">
              <Newspaper className="text-gold" />
              <h3 className="font-serif text-3xl font-black">News & updates</h3>
            </div>
            <div className="mt-6 grid gap-4">
              {newsItems.map((item) => (
                <article key={item.title} className="rounded-3xl border border-black/10 bg-white/60 p-5 dark:border-white/10 dark:bg-white/10">
                  <p className="flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400"><CalendarDays size={16} /> {item.date}</p>
                  <h4 className="mt-2 font-serif text-2xl font-black">{item.title}</h4>
                  <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">{item.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* <Reveal>
        <div className="mt-8 rounded-[2rem] border border-gold/30 bg-navy p-7 text-white shadow-glow">
          <p className="eyebrow">Official company links</p>
          <h3 className="mt-3 font-serif text-3xl font-black">Visit Empreo Group websites</h3>
          <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {companyLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="group rounded-3xl border border-white/10 bg-white/10 p-5 transition hover:-translate-y-1 hover:border-gold">
                <span className="text-xs font-black uppercase tracking-[.2em] text-gold">{link.type}</span>
                <span className="mt-2 flex items-center justify-between gap-3 font-bold">
                  {link.label}
                  <ExternalLink size={18} className="transition group-hover:translate-x-1" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </Reveal> */}
    </section>
  )
}
