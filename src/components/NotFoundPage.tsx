import { Link } from "react-router-dom";
import { ArrowLeft, Search } from "lucide-react";
import { SEO } from "../components/SEO";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { Reveal } from "../components/Reveal";

export function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you are looking for does not exist. Explore Dr. Abinash Samal's portfolio, business empire, and leadership journey."
        noindex
      />
      <Breadcrumbs items={[{ label: "404 Not Found" }]} />
      <main className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-24 text-center lg:px-8">
        <Reveal>
          <div className="mb-8 grid h-32 w-32 place-items-center rounded-full bg-gold/10">
            <Search size={48} className="text-gold" />
          </div>
        </Reveal>
        <Reveal>
          <h1 className="font-serif text-8xl font-black text-gold">404</h1>
        </Reveal>
        <Reveal>
          <h2 className="mt-4 font-serif text-3xl font-black">
            Page Not Found
          </h2>
        </Reveal>
        <Reveal>
          <p className="mt-4 max-w-lg text-lg text-slate-600 dark:text-slate-300">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
        </Reveal>
        <Reveal>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/" className="gold-btn">
              <ArrowLeft size={18} />
              Back to Home
            </Link>
            <Link to="/magazines" className="ghost-btn">
              Browse Magazines
            </Link>
          </div>
        </Reveal>
        <Reveal>
          <div className="mt-16 grid gap-4 text-left md:grid-cols-3">
            <div className="glass-card p-6">
              <h3 className="font-serif text-xl font-bold">Profile</h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Learn about Dr. Samal's leadership journey and vision.
              </p>
              <Link to="/#profile" className="mt-4 inline-block text-sm font-bold text-gold hover:underline">
                View Profile &rarr;
              </Link>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-serif text-xl font-bold">Business Empire</h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Explore the 50+ branch automotive conglomerate.
              </p>
              <Link to="/#companies" className="mt-4 inline-block text-sm font-bold text-gold hover:underline">
                Explore &rarr;
              </Link>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-serif text-xl font-bold">Contact</h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Get in touch for partnerships and inquiries.
              </p>
              <Link to="/#office" className="mt-4 inline-block text-sm font-bold text-gold hover:underline">
                Contact Us &rarr;
              </Link>
            </div>
          </div>
        </Reveal>
      </main>
    </>
  );
}
