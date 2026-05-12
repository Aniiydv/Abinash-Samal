import { ChevronRight, Quote } from 'lucide-react'
import { articles, metrics } from '../data/editorialData'
import { Reveal } from './Reveal'

export function PullQuote() {
  return (
    <Reveal>
      <blockquote className="my-10 border-y border-gold/50 py-8">
        <Quote className="text-gold" />
        <p className="mt-4 font-serif text-4xl font-black leading-tight">
          Growth is strongest when enterprise, people, technology, and responsibility move together.
        </p>
      </blockquote>
    </Reveal>
  )
}

export function IssueCard() {
  return (
    <div className="glass-card p-6">
            <p className="eyebrow">Profile snapshot</p>
            <h3 className="mt-3 font-serif text-3xl font-black">Dr. Samal at a glance.</h3>
      <div className="mt-6 grid grid-cols-2 gap-3 text-center">
        {['50+ branches', '20 districts', '₹3,800 Cr', '2,000+ people'].map((item) => (
          <span className="rounded-2xl bg-gold/10 p-3 text-sm font-black text-gold" key={item}>{item}</span>
        ))}
      </div>
    </div>
  )
}

export function MetricsCard() {
  return (
    <div className="grid gap-3">
      {metrics.map(({ label, value, icon: Icon }) => (
        <div className="stat-card min-h-0" key={label}>
          <Icon className="text-gold" />
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  )
}

export function EditorialIndex() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[1fr_.8fr]">
        <Reveal>
          <div className="glass-card p-8">
            <p className="eyebrow">Profile index</p>
            <h2 className="mt-3 font-serif text-4xl font-black">More on Dr. Samal’s profile</h2>
            <div className="mt-6 grid gap-3">
              {articles.map((article) => (
                <a key={article} href="#profile" className="group flex items-center justify-between rounded-2xl border border-black/10 p-4 font-bold hover:border-gold dark:border-white/10">
                  <span>{article}</span>
                  <ChevronRight className="transition group-hover:translate-x-1" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="glass-card p-8">
            <Quote className="text-gold" />
            <p className="mt-5 font-serif text-3xl font-bold leading-tight">
              “Every milestone we’ve achieved is a testament to our journey, our people, and your unwavering trust in Empreo Group.”
            </p>
            <p className="mt-4 text-slate-500">— Dr. Abinash Samal</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
