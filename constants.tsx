import { FAQItem, CMSSection } from './types';

export const UNIVERSITY_DATA = {
  name: "Haridwar University",
  shortName: "HU Roorkee",
  location: "Roorkee-Haridwar Highway, Roorkee, Uttarakhand 249401",
  logo_url: "https://huroorkee.ac.in/_next/image?url=https%3A%2F%2Fhebbkx1anhila5yf.public.blob.vercel-storage.com%2Flogo-blue%2520%25281%2529-CQ6ZF37m5qr1logcYwUdoh5udLoFvO.png&w=256&q=75",
  contact: {
    phone: "+91-7500102111",
    alternatePhone: "+91-1334-123456",
    email: "info@huroorkee.ac.in",
    admissionsEmail: "admissions@huroorkee.ac.in"
  },
  stats: {
    highestPackage: "54.2 LPA",
    averagePackage: "6.5 LPA",
    recruiters: "500+",
    placementRate: "100% Support"
  },
  links: {
    apply: "https://huroorkee.ac.in/apply-now",
    infrastructure: "https://huroorkee.ac.in/student-corner/infrastructure",
    overview: "https://huroorkee.ac.in/academics/overview"
  }
};

const CAMPUS_VIDEO_URL = "blzl5ee5GSU"; // YouTube Video ID

export const LANDING_SECTIONS: CMSSection[] = [
  {
    id: "hero_001",
    type: "HERO",
    is_enabled: true,
    content: {
      title: "ADMISSIONS",
      subtitle: "OPEN 2026",
      description: `Join Haridwar University, Uttarakhand's premier destination for future leaders. Experience state-of-the-art infrastructure and India's leading placement ecosystem with 100% career support.`,
      bg_image: "https://huroorkee.ac.in/_next/image?url=https%3A%2F%2Fapi-cmshu.surl.co.in%2Fmedia%2Fsliders%2FDistinguished_Leadership_kQSKGxS.jpg&w=1080&q=75",
      bg_video: CAMPUS_VIDEO_URL,
      cta_primary: { label: "Admissions 2026", href: UNIVERSITY_DATA.links.apply },
      cta_secondary: { label: "Campus Tour", href: UNIVERSITY_DATA.links.infrastructure }
    }
  },
  {
    id: "stats_001",
    type: "PLACEMENT_STATS",
    is_enabled: true,
    content: {
      title: "GLOBAL SUCCESS",
      subtitle: "THE BILLBOARD OF ACHIEVEMENTS",
      stats: [
        { value: "54.2 LPA", label: "HIGHEST PACKAGE" },
        { value: "500+", label: "RECRUITERS" },
        { value: "9500+", label: "CAREER OFFERS" },
        { value: "No. 1", label: "CAMPUS IN UK" }
      ]
    }
  },
  {
    id: "rankings_001",
    type: "TRUST_RIBBON",
    is_enabled: true,
    content: {
      items: [
        { label: "Recognition", value: "UGC / AICTE" },
        { label: "Placement Goal", value: "100% SUPPORT" },
        { label: "Innovation", value: "IBM & CISCO COE" },
        { label: "Digital Edge", value: "100% 5G CAMPUS" }
      ]
    }
  },
  {
    id: "portal_cta_001",
    type: "ADMISSION_PORTAL_CTA",
    is_enabled: true,
    content: {
      title: "OFFICIAL ADMISSION PORTAL",
      subtitle: "DIRECT APPLICATION • MERIT SCHOLARSHIP • INSTANT SUPPORT",
      cta_label: "Access Portal 2026"
    }
  },
  {
    id: "partners_001",
    type: "PARTNERS_MARQUEE",
    is_enabled: true,
    content: {
      partners: ["Google", "Microsoft", "Amazon", "IBM", "TCS", "Infosys", "Wipro", "Adobe", "Oracle", "Accenture"]
    }
  },
  {
    id: "pillars_001",
    type: "USP_PILLARS",
    is_enabled: true,
    content: {
      title: "The HU Advantage",
      items: [
        { title: "Smart Campus", desc: "India's first fully 5G enabled campus with modern high-tech research labs.", icon: "Layers" },
        { title: "Global Reach", desc: "Collaborations with Top 500 International Universities for study abroad programs.", icon: "Globe" },
        { title: "Innovation", desc: "Dedicated COE by IBM, Microsoft and CISCO for real-world tech training.", icon: "Zap" },
        { title: "Entrepreneurship", desc: "In-house Startup Incubator with funding support up to ₹1 Crore for students.", icon: "Briefcase" }
      ]
    }
  },
  {
    id: "courses_teaser_01",
    type: "COURSES_TEASER",
    is_enabled: true,
    content: {
      title: "Global Programs",
      items: [
        {
          title: "Computer Science (AI & ML)",
          description: `B.Tech CSE with focus on Artificial Intelligence and Machine Learning. Advanced COE by IBM.`,
          image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format,compress&fm=webp&q=75&w=800&fit=crop",
          url: UNIVERSITY_DATA.links.overview
        },
        {
          title: "Pharmacy (B.Pharm)",
          description: `PCI approved program with focus on drug development and research labs.`,
          image: "https://images.unsplash.com/photo-1576086213369-97a306dca665?auto=format,compress&fm=webp&q=75&w=800&fit=crop",
          url: UNIVERSITY_DATA.links.overview
        },
        {
          title: "Management (MBA)",
          description: `Digital Marketing & Analytics specialization. 100% industry placement track record.`,
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format,compress&fm=webp&q=75&w=800&fit=crop",
          url: UNIVERSITY_DATA.links.overview
        },
        {
          title: "Agriculture (Hons.)",
          description: `Modern organic farming and soil science research in dedicated university farms.`,
          image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format,compress&fm=webp&q=75&w=800&fit=crop",
          url: UNIVERSITY_DATA.links.overview
        },
        {
          title: "BCA (Computer App)",
          description: `Focus on software development, web technologies, and database management. Industry projects.`,
          image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format,compress&fm=webp&q=75&w=800&fit=crop",
          url: UNIVERSITY_DATA.links.overview
        }
      ]
    }
  },
  {
    id: "adm_teaser_01",
    type: "ADMISSIONS_TEASER",
    is_enabled: true,
    content: {
      title: "JOIN THE ELITE HUB",
      image: "https://huroorkee.ac.in/_next/image?url=https%3A%2F%2Fapi-cmshu.surl.co.in%2Fmedia%2Fsliders%2FVibrant_Campus_Life.jpg&w=828&q=75",
      bg_video: "nk3YhT5mG70"
    }
  },
  {
    id: "alumni_001",
    type: "ALUMNI_SECTION",
    is_enabled: true,
    content: {
      title: "Global Alumni Network",
      subtitle: `HU graduates are leading the world's most innovative organizations.`,
      alumni: [
        {
          name: "Ayushi Goel",
          batch: "Alumni Spotlight",
          image: "https://huroorkee.ac.in/_next/image?url=%2Fimages%2Falumni%2Falumni-testimonials%2Fayushi_goel.jpg&w=640&q=75",
          quote: `HU boosts superior infrastructure for sports and actively creates opportunities for students to take an active part in sports competitions.`
        },
        {
          name: "Samridhi Bhandari",
          batch: "Successful Graduate",
          image: "https://huroorkee.ac.in/_next/image?url=%2Fimages%2Falumni%2Falumni-testimonials%2Fsamridhi_bhandari.jpg&w=640&q=75",
          quote: `The environment at HU is focused on holistic development and professional growth. It provided me the wings to fly.`
        },
        {
          name: "Shatwik",
          batch: "Former RCE Student",
          image: "https://huroorkee.ac.in/_next/image?url=%2Fimages%2Falumni%2Falumni-testimonials%2Fshatwik.jpg&w=640&q=75",
          quote: `It gives me great pleasure to say with pride that I have completed my graduation from Haridwar University.`
        },
        {
          name: "Sijan Bhattarai",
          batch: "Petroleum Eng.",
          image: "https://huroorkee.ac.in/_next/image?url=%2Fimages%2Falumni%2Falumni-testimonials%2Fsijan_bhattarai.jpg&w=640&q=75",
          quote: `Quality assurance of education and their exposure in the field of Petroleum Engineering at HU is unmatched.`
        }
      ]
    }
  }
];

export const STATIC_FAQS: FAQItem[] = [
  {
    question: "How do I apply for Haridwar University?",
    answer: `Applications can be submitted through our official admission portal 'apply.huroorkee.ac.in' or by visiting the campus in Roorkee.`
  },
  {
    question: "What is the HUST scholarship?",
    answer: `HUST (Haridwar University Scholarship Test) is our flagship exam that rewards high-achievers.`
  }
];