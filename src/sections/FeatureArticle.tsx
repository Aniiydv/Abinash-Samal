import { sideNotes } from '../data/editorialData'
import { IssueCard, MetricsCard, PullQuote } from '../components/EditorialCards'
import { Reveal } from '../components/Reveal'

export function FeatureArticle() {
  return (
    <section id="feature" className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[180px_1fr_320px]">
        <aside className="hidden border-r border-black/10 pr-6 dark:border-white/10 lg:block">
          <p className="eyebrow">At a glance</p>
          <div className="mt-6 grid gap-3">
            {sideNotes.map((note) => (
              <span key={note} className="rounded-full border border-gold/30 px-4 py-2 text-sm font-bold">
                {note}
              </span>
            ))}
          </div>
        </aside>

        <article className="magazine-copy">
          <Reveal>
            <p className="dropcap">
              Dr. Abinash Samal’s story begins far from the language of luxury. It begins with service bays, diagnostic patience, customer calls, and the quiet pressure of doing work that must be right the first time.
            </p>
          </Reveal>

          <Reveal>
            <p>
              From those beginnings, the Empreo Group has grown into a polished automotive platform in Odisha—one that understands both the emotion of a dream car and the discipline behind keeping it road-ready. The company’s current identity is deliberately dual: premium enough for supercar collectors, grounded enough for everyday trust, and ambitious enough to lead the region into sustainable mobility.
            </p>
          </Reveal>

          <PullQuote />

          <Reveal>
            <p>
              In a market often divided between utility and spectacle, Dr. Samal’s positioning is more nuanced. Empreo treats mobility as culture, infrastructure, service, finance, engineering, and identity. The group’s showrooms are designed like galleries, but its operating memory remains industrial: torque specs, repair timelines, parts accountability, and technicians who know that luxury collapses quickly without reliability.
            </p>
          </Reveal>
        </article>

        <aside className="space-y-5">
          <IssueCard />
          <MetricsCard />
        </aside>
      </div>
    </section>
  )
}
