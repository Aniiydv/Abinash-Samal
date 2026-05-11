import type { Feature } from '../types'
import { Reveal } from './Reveal'

type FeatureCardProps = {
  feature: Feature
}

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <Reveal>
      <article className="group overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-white/[.05]">
        <img src={feature.image} alt={feature.title} className="h-64 w-full object-cover transition duration-700 group-hover:scale-105" />
        <div className="p-6">
          <p className="eyebrow">{feature.kicker}</p>
          <h3 className="mt-3 font-serif text-3xl font-black leading-tight">{feature.title}</h3>
          <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{feature.body}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {feature.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-gold/10 px-3 py-1 text-xs font-bold text-gold">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  )
}
