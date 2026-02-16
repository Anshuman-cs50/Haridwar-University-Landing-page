
import React from 'react';
import { UNIVERSITY_DATA, STATIC_FAQS, LANDING_SECTIONS } from '../constants';

interface SEOProps {
  pageType?: 'University' | 'Course' | 'FAQ' | 'Event';
  title?: string;
  description?: string;
}

const SEO: React.FC<SEOProps> = ({ pageType = 'University', title, description }) => {
  const logoUrl = "https://huroorkee.ac.in/_next/image?url=https%3A%2F%2Fhebbkx1anhila5yf.public.blob.vercel-storage.com%2Flogo-blue%2520%25281%2529-CQ6ZF37m5qr1logcYwUdoh5udLoFvO.png&w=256&q=75";
  const baseUrl = "https://huroorkee.ac.in"; // Hardcoded for production SEO accuracy

  // 1. Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": UNIVERSITY_DATA.name,
    "url": baseUrl,
    "logo": logoUrl,
    "sameAs": [
      "https://facebook.com/huroorkee",
      "https://twitter.com/huroorkee",
      "https://linkedin.com/school/haridwar-university/"
    ]
  };

  // 2. University Schema (Main)
  const universitySchema = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    "name": UNIVERSITY_DATA.name,
    "alternateName": UNIVERSITY_DATA.shortName,
    "url": baseUrl,
    "logo": logoUrl,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": UNIVERSITY_DATA.location,
      "addressLocality": "Roorkee",
      "addressRegion": "Uttarakhand",
      "postalCode": "247667",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": UNIVERSITY_DATA.contact.phone,
      "contactType": "admissions",
      "areaServed": "IN"
    }
  };

  // 3. FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": STATIC_FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // 4. Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Programs",
        "item": `${baseUrl}/#programs`
      }
    ]
  };

  // 5. Course Schema
  const academicSection = LANDING_SECTIONS.find(s => s.type === 'COURSES_TEASER');
  const courseSchemas = academicSection?.content?.items?.map((item: any) => ({
    "@context": "https://schema.org",
    "@type": "Course",
    "name": item.title,
    "description": item.description,
    "provider": {
      "@type": "CollegeOrUniversity",
      "name": UNIVERSITY_DATA.name,
      "sameAs": baseUrl
    }
  }));

  const fullTitle = title || `${UNIVERSITY_DATA.name} | India's Leading Private University`;
  const fullDescription = description || `Excellence in Engineering, Management and Pharmacy. Admissions 2026 open at ${UNIVERSITY_DATA.name}, Roorkee. #1 Placements in Uttarakhand. Apply now for scholarships.`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      
      {/* JSON-LD Schemas */}
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(universitySchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      
      {courseSchemas && courseSchemas.length > 0 && (
        <script type="application/ld+json">{JSON.stringify(courseSchemas)}</script>
      )}

      {/* Global Search Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "url": baseUrl,
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${baseUrl}/#/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
    </>
  );
};

export default SEO;
