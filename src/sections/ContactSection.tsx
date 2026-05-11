import { Globe2, Mail } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contact" className="bg-charcoal px-4 py-16 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-3 font-serif text-5xl font-black">Empreo Group editorial office</h2>
          <p className="mt-5 max-w-xl text-white/70">
            For interviews, brand partnerships, luxury mobility features, or sustainable transport forums in Odisha.
          </p>
          <div className="mt-8 space-y-3">
            <p className="flex gap-3"><Mail className="text-gold" /> editorial@empreogroup.example</p>
            <p className="flex gap-3"><Globe2 className="text-gold" /> empreogroup.example</p>
          </div>
        </div>

        <form onSubmit={(event) => event.preventDefault()} className="grid gap-4">
          <input className="field" placeholder="Name" aria-label="Name" />
          <input className="field" placeholder="Email" aria-label="Email" />
          <textarea className="field min-h-36" placeholder="Message" aria-label="Message" />
          <button className="gold-btn justify-center">Send inquiry</button>
        </form>
      </div>
    </section>
  )
}
