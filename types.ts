
export interface CMSLink {
  label: string;
  href: string;
  is_external: boolean;
}

export interface CMSSection {
  id: string;
  type: string;
  is_enabled: boolean;
  content: any;
}

export interface CMSPage {
  slug: string;
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  sections: CMSSection[];
}

export interface CMSSystem {
  navbar: {
    logo_url: string;
    links: CMSLink[];
    cta: CMSLink;
  };
  footer: {
    about_text: string;
    contact: {
      address: string;
      phone: string;
      email: string;
    };
    social_links: { platform: string; url: string }[];
  };
  chatbot: {
    bot_name: string;
    greeting: string;
    system_instruction: string;
  };
}

// Added Course and FAQItem interfaces to resolve errors in constants.tsx
export interface Course {
  id: string;
  title: string;
  level: string;
  duration: string;
  description: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
