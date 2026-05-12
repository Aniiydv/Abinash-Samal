export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dr. Abinash Samal",
    jobTitle: "Managing Director",
    worksFor: {
      "@type": "Organization",
      name: "Empreo Group",
      url: "https://www.empreogroup.in/",
      logo: "https://drabinashsamal.com/og-image.png",
      sameAs: [
        "https://www.empreogroup.in/",
        "https://empreoskoda.com/",
      ],
    },
    description:
      "Managing Director of Empreo Group, one of Odisha's leading automotive and mobility conglomerates with 50+ branches across 20 districts.",
    url: "https://drabinashsamal.com",
    image: "https://drabinashsamal.com/images/dr-abinash-samal-editorial.png",
    knowsAbout: [
      "Automotive Business",
      "Luxury Mobility",
      "Sustainability",
      "EV & Green Mobility",
      "Business Leadership",
      "Odisha",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Doctorate in Business Administration",
    },
    award: [
      "Odisha Mobility Leadership Recognition 2025",
      "Green Mobility Initiative Citation 2024",
      "People-First Enterprise Appreciation 2023",
    ],
    sameAs: [
      "https://www.linkedin.com/in/drabinashsamal",
      "https://twitter.com/drabinashsamal",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Empreo Group",
    url: "https://www.empreogroup.in/",
    logo: "https://drabinashsamal.com/og-image.png",
    description:
      "One of Odisha's leading automotive and mobility conglomerates with 50+ branches across 20 districts, representing premium brands including Jaguar Land Rover, MG, Tata, Škoda, Kia, and JCB.",
    founder: {
      "@type": "Person",
      name: "Dr. Abinash Samal",
    },
    areaServed: {
      "@type": "State",
      name: "Odisha",
      containedInPlace: {
        "@type": "Country",
        name: "India",
      },
    },
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "2000+",
    },
    sameAs: [
      "https://www.empreogroup.in/",
      "https://empreoskoda.com/",
      "https://dealers.mgmotor.co.in/mg-motor-empreo-wheel-showroom-car-dealer-pahala-bhubaneswar-371840/Home",
      "https://retailers.landrover.in/empreo-prestige/about-us",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Dr. Abinash Samal Portfolio",
    url: "https://drabinashsamal.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://drabinashsamal.com/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleSchema({
  title,
  description,
  image,
  datePublished,
  dateModified,
  author,
}: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image,
    datePublished,
    dateModified,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: "Empreo Group",
      logo: {
        "@type": "ImageObject",
        url: "https://drabinashsamal.com/og-image.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://drabinashsamal.com",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
