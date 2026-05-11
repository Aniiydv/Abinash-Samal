import { Reveal } from './Reveal'

type SectionHeadProps = {
  kicker: string
  title: string
  intro?: string
}

export function SectionHead({ kicker, title, intro }: SectionHeadProps) {
  return (
    <Reveal>
      <p className="eyebrow">{kicker}</p>
      <h2 className="mt-3 max-w-4xl font-serif text-4xl font-black tracking-tight md:text-6xl">{title}</h2>
      {intro && <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">{intro}</p>}
    </Reveal>
  )
}
