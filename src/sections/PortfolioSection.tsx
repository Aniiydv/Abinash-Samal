import { featureFilters, features } from '../data/editorialData'
import { FeatureCard } from '../components/FeatureCard'
import { SectionHead } from '../components/SectionHead'

type PortfolioSectionProps = {
  activeFilter: string
  onFilterChange: (filter: string) => void
}

export function PortfolioSection({ activeFilter, onFilterChange }: PortfolioSectionProps) {
  const filteredFeatures = activeFilter === 'All'
    ? features
    : features.filter((feature) => feature.tags.includes(activeFilter) || feature.title.includes(activeFilter))

  return (
    <section id="luxury" className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <SectionHead
        kicker="Portfolio"
        title="Luxury, service, and clean mobility in one frame"
        intro="Filter the editorial modules to explore Empreo’s core themes."
      />

      <div className="mt-8 flex flex-wrap gap-2">
        {featureFilters.map((filter) => (
          <button key={filter} onClick={() => onFilterChange(filter)} className={`chip ${activeFilter === filter ? 'chip-active' : ''}`}>
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {filteredFeatures.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </div>
    </section>
  )
}
