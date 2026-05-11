import { featureFilters, features } from '../data/editorialData'
import { FeatureCard } from '../components/FeatureCard'
import { SectionHead } from '../components/SectionHead'
import { ExternalLink } from 'lucide-react'

type PortfolioSectionProps = {
  activeFilter: string
  onFilterChange: (filter: string) => void
}

export function PortfolioSection({ activeFilter, onFilterChange }: PortfolioSectionProps) {
  const filteredFeatures = activeFilter === 'All'
    ? features
    : features.filter((feature) => feature.tags.includes(activeFilter) || feature.title.includes(activeFilter))

  return (
    <section id="companies" className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <SectionHead
        kicker="Business empire"
        title="The business empire led by Dr. Samal"
        intro="A focused view of Empreo Group’s scale, automotive brand presence, sustainability initiatives, and customer-first transformation under his executive direction."
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

      <div className="mt-8 text-center">
        <a href="https://emprogroup.vercel.app/" target="_blank" rel="noreferrer" className="gold-btn">
          Visit Empreo Group website <ExternalLink size={18} />
        </a>
      </div>
    </section>
  )
}
