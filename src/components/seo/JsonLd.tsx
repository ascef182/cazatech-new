interface JsonLdProps {
  data: Record<string, any>;
}

export const JsonLd = ({ data }: JsonLdProps) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CazaTech",
    description: "Automação WhatsApp e Sites de Alta Conversão",
    url: "https://caza-tech.com",
    logo: "https://caza-tech.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+55-11-93620-5799",
      contactType: "customer service",
      availableLanguage: "Portuguese",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    sameAs: [
      "https://www.linkedin.com/company/cazatech",
      "https://www.instagram.com/cazatech.solutions",
    ],
  };

  return <JsonLd data={schema} />;
};

export const WebsiteSchema = () => (
  <JsonLd
    data={{
      "@type": "WebSite",
      "@id": "https://caza-tech.com/",
      url: "https://caza-tech.com",
      name: "CazaTech - Automação WhatsApp",
      description:
        "Automatize seu WhatsApp e venda 3x mais com nossa plataforma de automação inteligente",
      publisher: {
        "@id": "https://caza-tech.com",
      },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://caza-tech.com/search?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      ],
    }}
  />
);

export const FAQSchema = ({
  faqs,
}: {
  faqs: Array<{ q: string; a: string }>;
}) => (
  <JsonLd
    data={{
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    }}
  />
);

export const BreadcrumbSchema = ({
  items,
}: {
  items: Array<{ name: string; url: string }>;
}) => (
  <JsonLd
    data={{
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    }}
  />
);
