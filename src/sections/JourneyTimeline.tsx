import { milestones } from '../data/editorialData'
import { Reveal } from '../components/Reveal'
import { SectionHead } from '../components/SectionHead'

export function JourneyTimeline() {
  return (
    <section id="journey" className="border-y border-black/10 bg-white/55 py-16 dark:border-white/10 dark:bg-white/[.03]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHead
          kicker="Chronicle"
          title="From humble service bays to a mobility house"
          intro="A magazine-style timeline of grit, polish, risk, and reinvention."
        />

        <div className="mt-10 grid gap-4">
          {milestones.map((milestone, index) => (
            <Reveal key={milestone.year}>
              <div className="timeline-editorial">
                <b>{milestone.year}</b>
                <div>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
