
import { CMSPage, CMSSystem } from '../types';

const STORAGE_KEY = 'hu_portal_v1_db_v3_final';

const LOGO_URL = "https://huroorkee.ac.in/_next/image?url=https%3A%2F%2Fhebbkx1anhila5yf.public.blob.vercel-storage.com%2Flogo-blue%2520%25281%2529-CQ6ZF37m5qr1logcYwUdoh5udLoFvO.png&w=256&q=75";
const APPLY_NOW_URL = "https://huroorkee.ac.in/apply-now";
const INFRASTRUCTURE_URL = "https://huroorkee.ac.in/student-corner/infrastructure";
const OVERVIEW_URL = "https://huroorkee.ac.in/academics/overview";

const DEFAULT_DATA = {
  system: {
    navbar: {
      logo_url: LOGO_URL,
      links: [{ label: 'Home', href: '/', is_external: false }],
      cta: { label: 'Enroll 2026', href: APPLY_NOW_URL, is_external: true }
    },
    footer: {
      about_text: "Haridwar University Roorkee is Uttarakhand's premier educational landmark, dedicated to creating global leaders through innovation and academic excellence.",
      contact: {
        address: "Roorkee-Haridwar Highway, Roorkee, UK 249401",
        phone: "+91-1334-123456",
        email: "info@huroorkee.ac.in"
      },
      social_links: [
        { platform: 'facebook', url: '#' },
        { platform: 'twitter', url: '#' },
        { platform: 'linkedin', url: '#' }
      ]
    },
    chatbot: {
      bot_name: "HU SmartBot",
      greeting: "Welcome to Haridwar University! I am here to help you join Uttarakhand's fastest-growing academic hub.",
      system_instruction: "You are the official Haridwar University assistant. Focus on 100% placements and Roorkee campus."
    },
    ai_instruction: "You are the official Haridwar University assistant. Focus on 100% placements and Roorkee campus. Highlight the 54.2 LPA package.",
    seo: {
      site_title: "Haridwar University | India's Leading Private University in Roorkee",
      meta_description: "Excellence in Engineering, Management and Pharmacy. Admissions 2026 open at Haridwar University, Roorkee.",
      keywords: "Haridwar University, HU Roorkee, Best B.Tech College Roorkee, MBA admissions 2026"
    }
  },
  pages: {
    home: {
      slug: "home",
      seo: {
        title: "Haridwar University | Number 1 Placement Campus in Uttarakhand",
        description: "India's Leading University in Placements & Research. Explore UG & PG Admissions 2026.",
        keywords: "Haridwar University, Roorkee College, Engineering Admissions"
      },
      sections: [
        {
          id: "hero_001",
          type: "HERO",
          is_enabled: true,
          content: {
            title: "UTTARAKHAND'S PREMIER",
            subtitle: "VANGUARD HUB",
            description: "Haridwar University is a destination for future leaders. Experience state-of-the-art infrastructure and India's leading placement ecosystem.",
            bg_image: "https://huroorkee.ac.in/_next/image?url=https%3A%2F%2Fapi-cmshu.surl.co.in%2Fmedia%2Fsliders%2FInspiring_Learning_Environments.jpg&w=1920&q=75",
            cta_primary: { label: "Admissions 2026", href: APPLY_NOW_URL },
            cta_secondary: { label: "Campus Tour", href: INFRASTRUCTURE_URL }
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
              { label: "Scholarships", value: "10 CR+" },
              { label: "Campus Area", value: "100+ ACRES" }
            ]
          }
        },
        {
          id: "portal_cta_001",
          type: "ADMISSION_PORTAL_CTA",
          is_enabled: true,
          content: {}
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
                description: "B.Tech CSE with focus on Artificial Intelligence and Machine Learning. Advanced COE by IBM.", 
                image: "https://huroorkee.ac.in/_next/image?url=https%3A%2F%2Fapi-cmshu.surl.co.in%2Fmedia%2Fdepartment%2FComputer_Science_Engineering.jpg&w=1920&q=75",
                url: OVERVIEW_URL
              },
              { 
                title: "Pharmacy (B.Pharm)", 
                description: "PCI approved program with focus on drug development and research labs.", 
                image: "https://huroorkee.ac.in/_next/image?url=https%3A%2F%2Fapi-cmshu.surl.co.in%2Fmedia%2Fdepartment%2Fpharmacy_department_v1.jpg&w=1920&q=75",
                url: OVERVIEW_URL
              },
              { 
                title: "Management (MBA)", 
                description: "Digital Marketing & Analytics specialization. 100% industry placement track record.", 
                image: "https://huroorkee.ac.in/_next/image?url=https%3A%2F%2Fapi-cmshu.surl.co.in%2Fmedia%2Fdepartment%2Fmanagement_and_commerce_v1.jpg&w=1920&q=75",
                url: OVERVIEW_URL
              },
              { 
                title: "Agriculture (Hons.)", 
                description: "Modern organic farming and soil science research in dedicated university farms.", 
                image: "https://huroorkee.ac.in/_next/image?url=https%3A%2F%2Fapi-cmshu.surl.co.in%2Fmedia%2Fdepartment%2Fagriculture_v1.jpg&w=1920&q=75",
                url: OVERVIEW_URL
              },
              { 
                title: "BCA (Bachelor of Computer Applications)", 
                description: "Focus on software development, web technologies, and database management. Industry projects with tech partners.", 
                image: "https://huroorkee.ac.in/_next/image?url=https%3A%2F%2Fapi-cmshu.surl.co.in%2Fmedia%2Fdepartment%2FComputer_Science_Engineering.jpg&w=1920&q=75",
                url: OVERVIEW_URL
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
            image: "https://huroorkee.ac.in/_next/image?url=https%3A%2F%2Fapi-cmshu.surl.co.in%2Fmedia%2Fsliders%2FVibrant_Campus_Life.jpg&w=1920&q=75"
          }
        },
        {
          id: "alumni_001",
          type: "ALUMNI_SECTION",
          is_enabled: true,
          content: {
            title: "Global Alumni Network",
            subtitle: "HU graduates are leading the world's most innovative organizations.",
            alumni: [
              {
                name: "Ananya Singhal",
                batch: "Batch of 2018",
                designation: "Senior Software Engineer",
                company: "Microsoft",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&auto=format&fit=crop",
                quote: "The practical exposure at HU was the turning point for my career."
              },
              {
                name: "Vikram Malhotra",
                batch: "Batch of 2017",
                designation: "Product Manager",
                company: "Amazon",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&auto=format&fit=crop",
                quote: "Haridwar University's placement cell provided me with the wings to fly global."
              },
              {
                name: "Sanya Verma",
                batch: "Batch of 2019",
                designation: "UX Research Head",
                company: "Google",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&auto=format&fit=crop",
                quote: "My years at HU shaped my analytical thinking and leadership skills."
              },
              {
                name: "Rohan Das",
                batch: "Batch of 2016",
                designation: "Data Scientist",
                company: "Meta",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=400&auto=format&fit=crop",
                quote: "The state-of-the-art labs at Haridwar University are at par with global standards."
              }
            ]
          }
        }
      ]
    }
  }
};

const getDB = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) {
    saveDB(DEFAULT_DATA);
    return DEFAULT_DATA;
  }
  return JSON.parse(data);
};

const saveDB = (data: any) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const apiService = {
  async getSystemConfig(): Promise<CMSSystem> {
    return getDB().system;
  },

  async getPageData(slug: string): Promise<CMSPage> {
    const db = getDB();
    return db.pages[slug] || db.pages.home;
  },

  async getDashboardData(): Promise<any> {
    return getDB();
  },

  async updateSystemSettings(payload: any): Promise<void> {
    const db = getDB();
    const updated = { ...db };
    if (payload.pages) updated.pages = { ...db.pages, ...payload.pages };
    if (payload.system) updated.system = { ...db.system, ...payload.system };
    saveDB(updated);
    return Promise.resolve();
  }
};
