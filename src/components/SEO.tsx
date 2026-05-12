import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  noindex?: boolean;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
}

const DEFAULT_TITLE = "Dr. Abinash Samal | Managing Director, Empreo Group";
const DEFAULT_DESC =
  "Premium portfolio of Dr. Abinash Samal, Managing Director of Empreo Group — one of Odisha's leading automotive and mobility conglomerates. Explore his leadership, business empire, sustainability vision, awards, and people-first philosophy.";
const DEFAULT_IMAGE = "https://drabinashsamal.com/og-image.png";
const SITE_URL = "https://drabinashsamal.com";

export function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESC,
  canonical = SITE_URL,
  ogImage = DEFAULT_IMAGE,
  ogType = "website",
  keywords,
  noindex = false,
  article,
}: SEOProps) {
  const fullTitle = title === DEFAULT_TITLE ? title : `${title} | Dr. Abinash Samal`;

  return (
    <Helmet>
      {/* Basic Meta */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Dr. Abinash Samal" />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Dr. Abinash Samal Portfolio" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@drabinashsamal" />

      {/* Article Meta */}
      {article?.publishedTime && (
        <meta property="article:published_time" content={article.publishedTime} />
      )}
      {article?.modifiedTime && (
        <meta property="article:modified_time" content={article.modifiedTime} />
      )}
      {article?.author && (
        <meta property="article:author" content={article.author} />
      )}
      {article?.section && (
        <meta property="article:section" content={article.section} />
      )}
      {article?.tags?.map((tag) => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}

      {/* Mobile & PWA */}
      <meta name="theme-color" content="#07152f" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Dr. Abinash Samal" />
      <meta name="application-name" content="Dr. Abinash Samal" />
      <meta name="msapplication-TileColor" content="#07152f" />
      <meta name="msapplication-config" content="/browserconfig.xml" />

      {/* Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

      {/* Alternate Languages */}
      <link rel="alternate" hrefLang="en-in" href={canonical} />
      <link rel="alternate" hrefLang="x-default" href={canonical} />
    </Helmet>
  );
}
