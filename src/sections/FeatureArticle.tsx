import { keyHighlights, sideNotes } from '../data/editorialData'
import { IssueCard, MetricsCard, PullQuote } from '../components/EditorialCards'
import { Reveal } from '../components/Reveal'
import { CheckCircle2 } from 'lucide-react'

export function FeatureArticle() {
  return (
    <section id="profile" className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
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
              Dr. Abinash Samal is a visionary entrepreneur and dynamic business leader driving the next generation of growth at the Empreo Group—one of Odisha’s leading automotive and mobility conglomerates. Carrying forward a legacy built on trust, reliability, and customer commitment, he has transformed the Group into a modern, innovation-led enterprise with a strong presence across the state.
            </p>
          </Reveal>

          <Reveal>
            <p>
              Under his leadership, the Empreo Group has expanded to over 50 branches across 20 districts of Odisha, employing more than 2,000 professionals and achieving a turnover of ₹3,800 crore. With a customer-first philosophy and a future-focused mindset, Dr. Samal has strengthened the Group’s presence across premium, luxury, and mass-market automotive brands including Jaguar Land Rover, MG, Tata Passenger Vehicles, Škoda, Kia, and JCB.
            </p>
          </Reveal>

          <PullQuote />

          <Reveal>
            <p>
              A strong advocate of innovation and accessibility, Dr. Samal has pioneered the Group’s “Phygital” approach—seamlessly integrating physical dealership experiences with digital convenience to enhance customer engagement and service excellence.
            </p>
          </Reveal>

          <Reveal>
            <p>
              Beyond business growth, he is deeply committed to sustainability and social responsibility. He spearheaded the establishment of an eco-friendly Registered Vehicle Scrapping Facility in Khurda, supporting India’s green mobility mission through responsible vehicle recycling and material recovery. His vision for the future also includes promoting EVs, CNG, LNG, Hydrogen mobility solutions, and cleaner diesel technologies through DEF adoption.
            </p>
          </Reveal>

          <Reveal>
            <p>
              Dr. Samal firmly believes that people are the foundation of every successful organization. From employee welfare programs and mediclaim support to scholarships for employees’ children and workplace cultural initiatives, he has built an ecosystem that values growth, belonging, and opportunity.
            </p>
          </Reveal>

          <KeyHighlights />

          <Reveal>
            <p>
              With a progressive outlook rooted in empathy, innovation, and sustainable development, Dr. Abinash Samal continues to shape the future of mobility and enterprise in Odisha—creating impact not only through business, but through people and purpose.
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

function KeyHighlights() {
  return (
    <Reveal>
      <div className="my-12 -mx-4 overflow-hidden rounded-[2rem] border border-gold/25 bg-navy text-white shadow-glow sm:-mx-8 lg:-mx-20">
        <div className="grid lg:grid-cols-[.42fr_.58fr]">
          <div className="relative overflow-hidden border-b border-white/10 p-7 sm:p-9 lg:border-b-0 lg:border-r">
            <div className="absolute -left-16 -top-16 h-44 w-44 rounded-full bg-gold/20 blur-3xl" />
            <p className="eyebrow relative">Key highlights</p>
            <h3 className="relative mt-4 font-serif text-4xl font-black leading-tight md:text-5xl">Executive scale at a glance.</h3>
            <p className="relative mt-5 text-base leading-7 text-white/70">
              A concise view of Dr. Samal’s leadership impact across growth, mobility, sustainability, customer experience, and people development.
            </p>
            <div className="relative mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-3xl bg-white/10 p-4"><b className="block font-serif text-3xl text-gold">50+</b><span className="text-xs text-white/70">Branches</span></div>
              <div className="rounded-3xl bg-white/10 p-4"><b className="block font-serif text-3xl text-gold">20</b><span className="text-xs text-white/70">Districts</span></div>
              <div className="rounded-3xl bg-white/10 p-4"><b className="block font-serif text-3xl text-gold">₹3,800 Cr</b><span className="text-xs text-white/70">Turnover</span></div>
              <div className="rounded-3xl bg-white/10 p-4"><b className="block font-serif text-3xl text-gold">2,000+</b><span className="text-xs text-white/70">Employees</span></div>
            </div>
          </div>

          <div className="grid gap-3 p-5 sm:p-7 md:grid-cols-2">
            {keyHighlights.map((highlight) => (
              <div key={highlight} className="group flex gap-3 rounded-3xl border border-white/10 bg-white/[.07] p-4 transition hover:-translate-y-1 hover:border-gold/60 hover:bg-white/[.12]">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <span className="text-sm font-bold leading-6 text-white/85">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  )
}
