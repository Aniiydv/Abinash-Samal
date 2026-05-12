import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 py-4 lg:px-8">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
        <li>
          <Link to="/" className="flex items-center gap-1 hover:text-gold transition-colors">
            <Home size={14} />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <ChevronRight size={14} className="text-gold" />
            {item.href ? (
              <Link to={item.href} className="hover:text-gold transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-charcoal dark:text-white" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
