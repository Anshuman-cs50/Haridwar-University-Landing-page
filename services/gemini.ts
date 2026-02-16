
import { GoogleGenAI } from "@google/genai";

// Fix: Use consistent storage key to match api.ts for retrieval of system instructions
const STORAGE_KEY = 'hu_portal_v1_db_v3_final';
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY || '';

const FALLBACK_INSTRUCTION = `
You are "Haridwar Uni Bot", the official AI admission assistant for Haridwar University.
Highlight Haridwar University's strengths: 100% placement support, scenic campus near the Ganges, and industry-aligned curriculum.
`;

const getActiveInstruction = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) {
    const db = JSON.parse(data);
    return db.system?.ai_instruction || FALLBACK_INSTRUCTION;
  }
  return FALLBACK_INSTRUCTION;
}

// Fallback responses for common questions
const getFallbackResponse = (prompt: string): string => {
  const lowercasePrompt = prompt.toLowerCase();
  
  // Admissions
  if (lowercasePrompt.match(/admiss|apply|enroll|register|entrance|jee|neet|merit/i)) {
    return "Haridwar University welcomes applications for 2026! 🎓 We accept students through merit-based selection and various entrance exams. Visit https://huroorkee.ac.in/apply-now to apply now. Our admissions team is ready to guide you through the entire process. Any specific questions about documents or eligibility?";
  }
  
  // Placements
  if (lowercasePrompt.match(/placement|job|salary|package|lpa|recruit|career|offer/i)) {
    return "Great question! 🎯 Haridwar University has 100% placement support:\n✓ Highest Package: 54.2 LPA\n✓ 500+ Recruiters visiting\n✓ 9500+ Career Offers\n✓ Top companies: TCS, Infosys, Wipro, Google, etc.\nOur students get industry-aligned training throughout their course. Want to know more about specific companies?";
  }
  
  // Campus & Infrastructure
  if (lowercasePrompt.match(/campus|infrastructure|facility|hostel|lab|library|gym|sports/i)) {
    return "Our beautiful Roorkee campus offers world-class facilities! 🏢\n✓ Modern labs & research centers\n✓ State-of-the-art sports complex\n✓ Comfortable hostel accommodations\n✓ Central library with digital resources\n✓ Scenic location near the Ganges\nVisit https://huroorkee.ac.in/student-corner/infrastructure for virtual tour. What facility interests you most?";
  }
  
  // Courses & Programs
  if (lowercasePrompt.match(/course|program|branch|b.tech|mba|bpharm|engineering|management|pharmacy/i)) {
    return "Excellent programs available! 📚\n✓ B.Tech (Engineering) - 4 years\n✓ MBA (Management) - 2 years\n✓ B.Pharm (Pharmacy) - 4 years\n✓ M.Pharm (Pharmacy) - 2 years\nAll programs feature industry-focused curriculum and experienced faculty. Which field interests you?";
  }
  
  // Fees & Scholarships
  if (lowercasePrompt.match(/fee|cost|expense|scholarship|financial|aid|loan/i)) {
    return "We offer competitive fees and multiple scholarship options! 💰\n✓ Merit-based scholarships\n✓ Need-based financial aid\n✓ Industry sponsorships\n✓ Educational loan assistance\nFor detailed fee structure, contact admissions@huroorkee.ac.in or call +91-1334-123456. We want to make education accessible!";
  }
  
  // Faculty & Teachers
  if (lowercasePrompt.match(/faculty|teacher|professor|instructor|staff|department/i)) {
    return "Our faculty are highly qualified! 👨‍🏫\n✓ PhDs from reputed universities\n✓ Industry experience\n✓ Research publications\n✓ Mentorship programs\nThey're dedicated to your success and always available for guidance. Want to know about a specific department?";
  }
  
  // Location & Travel
  if (lowercasePrompt.match(/location|address|roorkee|distance|how to reach|travel|transport/i)) {
    return "📍 Find us here:\nHaridwar University, Roorkee-Haridwar Highway, Roorkee, Uttarakhand 249401\n✓ 2 hours from Delhi\n✓ 1 hour from Haridwar\n✓ Close to major cities\nGood connectivity via rail and road. Plan your visit today! Need directions?";
  }
  
  // Exam & Eligibility
  if (lowercasePrompt.match(/exam|eligibility|requirement|qualified|pass|marks|percentage|cutoff/i)) {
    return "Great! Here's the eligibility info:\n✓ 12th pass / equivalent\n✓ JEE/NEET scores for specific programs\n✓ Merit-based selection\n✓ No unreasonable cutoffs\nEven if you're unsure about eligibility, we encourage you to apply. Our team can guide you! 💪";
  }
  
  // Contact & Support
  if (lowercasePrompt.match(/contact|call|email|phone|support|help|communication|reach/i)) {
    return "We're here to help! 📞\n✓ Email: info@huroorkee.ac.in\n✓ Admissions: admissions@huroorkee.ac.in\n✓ Phone: +91-1334-123456\n✓ Address: Roorkee-Haridwar Highway, Roorkee\nFeel free to reach out anytime. Our team responds within 24 hours!";
  }
  
  // Student Life
  if (lowercasePrompt.match(/student|life|experience|clubs|activities|events|social|culture/i)) {
    return "Student life at HU is vibrant! 🎉\n✓ Active clubs & societies\n✓ Regular cultural events\n✓ Sports competitions\n✓ Tech fests & hackathons\n✓ Community service programs\nYou'll make lifelong friendships and memories here! What activities interest you?";
  }
  
  // Alumni
  if (lowercasePrompt.match(/alumni|graduate|pass out|success story|achievement/i)) {
    return "Our alumni are doing amazing things! 🌟\n✓ Working at top tech companies\n✓ Entrepreneurs & startup founders\n✓ Industry leaders & innovators\n✓ 100% placement record\nHU alumni network is strong and supportive. You'll be part of this thriving community!";
  }
  
  // General greeting/conversation
  if (lowercasePrompt.match(/hi|hello|hey|namaste|how are|good morning|good evening/i)) {
    return "Namaste! 👋 Welcome to Haridwar University! I'm here to help you with any questions about admissions, placements, campus, courses, or anything else. What would you like to know?";
  }
  
  // Thank you
  if (lowercasePrompt.match(/thank|thanks|appreciate|grateful|acknowledge/i)) {
    return "You're very welcome! 😊 Happy to help. Is there anything else you'd like to know about Haridwar University?";
  }
  
  // Default response for anything else
  return `I appreciate your question about "${prompt}"! 💡\n\nWhile I don't have specific information about this, our admissions team would love to help you directly:\n\n📞 Phone: +91-1334-123456\n📧 Email: info@huroorkee.ac.in\n📍 Address: Roorkee-Haridwar Highway, Roorkee, UK 249401\n\n✨ Contact us for more details - we respond within 24 hours!`;
};

export async function askUniversityBot(prompt: string): Promise<string> {
  // If API key is not configured, use fallback responses
  if (!API_KEY) {
    return getFallbackResponse(prompt);
  }

  try {
    // Initializing GoogleGenAI client with required apiKey parameter
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-1.5-flash',
      contents: prompt,
      config: {
        systemInstruction: getActiveInstruction(),
        temperature: 0.7,
      },
    });
    
    // Fix: Access response.text property directly as per latest SDK guidelines
    return response.text || getFallbackResponse(prompt);
  } catch (error) {
    console.error("Bot Error:", error);
    // Use fallback response if API call fails
    return getFallbackResponse(prompt);
  }
}
