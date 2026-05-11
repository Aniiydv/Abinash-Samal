import { Car, Menu, Moon, Search, Sun, X } from 'lucide-react'
import { navItems } from '../data/editorialData'

type HeaderProps = {
  dark: boolean
  menuOpen: boolean
  query: string
  searchResults: string[]
  onToggleTheme: () => void
  onToggleMenu: () => void
  onCloseMenu: () => void
  onSearch: (value: string) => void
}

export function Header({ dark, menuOpen, query, searchResults, onToggleTheme, onToggleMenu, onCloseMenu, onSearch }: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[#f6f3ee]/80 backdrop-blur-2xl dark:border-white/10 dark:bg-[#05070c]/75">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8" aria-label="Primary navigation">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-navy text-gold shadow-glow">
            <Car size={21} />
          </span>
          <span>
            <span className="block font-serif text-xl font-black leading-none">Dr. Abinash Samal</span>
            <span className="text-[10px] font-bold uppercase tracking-[.34em] text-gold">Portfolio profile</span>
          </span>
        </a>

        <div className="hidden items-center gap-6 text-sm font-bold uppercase tracking-[.16em] lg:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-gold">
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <label className="hidden items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 dark:border-white/10 dark:bg-white/10 md:flex">
            <Search size={16} />
            <input
              value={query}
              onChange={(event) => onSearch(event.target.value)}
              className="w-32 bg-transparent text-sm outline-none"
              placeholder="Search story"
              aria-label="Search story"
            />
          </label>

          <button onClick={onToggleTheme} className="icon-btn" aria-label="Toggle theme">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button onClick={onToggleMenu} className="icon-btn lg:hidden" aria-label="Menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="grid gap-2 border-t border-black/10 bg-[#f6f3ee] p-4 dark:border-white/10 dark:bg-navy lg:hidden">
          {navItems.map((item) => (
            <a onClick={onCloseMenu} key={item} href={`#${item.toLowerCase()}`} className="rounded-2xl p-3 hover:bg-gold/20">
              {item}
            </a>
          ))}
        </div>
      )}

      {searchResults.length > 0 && (
        <div className="absolute right-4 top-20 w-[min(92vw,420px)] rounded-3xl border border-gold/30 bg-white p-4 shadow-2xl dark:bg-navy">
          <p className="eyebrow">Search results</p>
          {searchResults.map((result) => (
            <a key={result} href="#profile" className="mt-2 block rounded-2xl bg-black/5 p-3 dark:bg-white/10">
              {result}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
