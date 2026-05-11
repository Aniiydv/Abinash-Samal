import { useMemo, useState } from 'react'
import { articles, features } from './data/editorialData'
import { useTheme } from './hooks/useTheme'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { EditorialIndex } from './components/EditorialCards'
import { FeatureArticle } from './sections/FeatureArticle'
import { PortfolioSection } from './sections/PortfolioSection'
import { SustainabilitySection } from './sections/SustainabilitySection'
import { LegacySection } from './sections/LegacySection'
import { AwardsNewsSection } from './sections/AwardsNewsSection'
import { ContactSection } from './sections/ContactSection'
import './index.css'

export default function App() {
  const { dark, setDark } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('All')

  const searchableContent = useMemo(
    () => [
      ...features.map((feature) => feature.title),
      ...articles,
    ],
    [],
  )

  const searchResults = query
    ? searchableContent.filter((item) => item.toLowerCase().includes(query.toLowerCase()))
    : []

  return (
    <div className="min-h-screen bg-[#f6f3ee] text-charcoal transition-colors dark:bg-[#05070c] dark:text-white">
      <a href="#profile" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-navy">
        Skip to profile
      </a>

      <Header
        dark={dark}
        menuOpen={menuOpen}
        query={query}
        searchResults={searchResults}
        onToggleTheme={() => setDark(!dark)}
        onToggleMenu={() => setMenuOpen(!menuOpen)}
        onCloseMenu={() => setMenuOpen(false)}
        onSearch={setQuery}
      />

      <main id="top">
        <Hero />
        <FeatureArticle />
        <PortfolioSection activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        <SustainabilitySection />
        <LegacySection />
        <AwardsNewsSection />
        <EditorialIndex />
        <ContactSection />
      </main>
    </div>
  )
}
