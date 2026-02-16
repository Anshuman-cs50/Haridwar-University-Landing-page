import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { UNIVERSITY_DATA } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-[#020617] text-white pt-16 md:pt-28 lg:pt-48 pb-10 md:pb-16 lg:pb-24 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[450px] lg:w-[600px] h-[300px] md:h-[450px] lg:h-[600px] bg-primary/10 blur-[100px] md:blur-[140px] lg:blur-[180px] rounded-full -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[250px] md:w-[350px] lg:w-[500px] h-[250px] md:h-[350px] lg:h-[500px] bg-accent/5 blur-[80px] md:blur-[120px] lg:blur-[150px] rounded-full translate-y-1/3 -translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-32">
        <div className="space-y-8 md:space-y-10 lg:space-y-16">
          <div className="bg-white p-5 md:p-6 lg:p-8 rounded-[1.2rem] md:rounded-[2rem] lg:rounded-[2.5rem] inline-block shadow-2xl">
             <img src={UNIVERSITY_DATA.logo_url} alt="Haridwar University" className="h-7 md:h-9 lg:h-12 w-auto object-contain" />
          </div>
          
          <div className="space-y-6 md:space-y-8 lg:space-y-12">
            <p className="text-white font-black text-[11px] md:text-[13px] lg:text-[15px] leading-relaxed uppercase tracking-[0.2em] lg:tracking-[0.25em] max-w-lg">
              {UNIVERSITY_DATA.name.toUpperCase()} ROORKEE IS UTTARAKHAND'S PREMIER EDUCATIONAL LANDMARK, DEDICATED TO CREATING GLOBAL LEADERS THROUGH INNOVATION AND ACADEMIC EXCELLENCE.
            </p>
            
            <div className="flex gap-3 md:gap-5 lg:gap-8">
              <SocialIcon icon={<Facebook size={16} className="md:w-[20px] lg:w-[22px]" />} />
              <SocialIcon icon={<Twitter size={16} className="md:w-[20px] lg:w-[22px]" />} />
              <SocialIcon icon={<Instagram size={16} className="md:w-[20px] lg:w-[22px]" />} />
              <SocialIcon icon={<Linkedin size={16} className="md:w-[20px] lg:w-[22px]" />} />
            </div>
          </div>

          <div className="pt-8 md:pt-12 lg:pt-24">
            <h4 className="text-[12px] md:text-[14px] lg:text-[16px] font-black uppercase tracking-[0.6em] md:tracking-[0.8em] lg:tracking-[1em] text-primary mb-4 md:mb-6 lg:mb-10">STATUS.</h4>
            <div className="h-0.5 w-12 md:w-16 lg:w-24 bg-primary/40 mb-6 md:mb-8 lg:mb-12"></div>
            <p className="text-[9px] md:text-[11px] lg:text-[12px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] lg:tracking-[0.4em] leading-[2] md:leading-[2.3] lg:leading-[2.5] text-white/20 max-w-md">
               Recognized by UGC and AICTE. Accredited by Uttarakhand Technical University. India's fastest growing technical university.
            </p>
          </div>
        </div>

        <div id="contact" className="space-y-10 md:space-y-14 lg:space-y-24 scroll-mt-20 md:scroll-mt-32 lg:scroll-mt-48">
          <h4 className="text-[16px] md:text-[20px] lg:text-[24px] font-black uppercase tracking-[0.6em] md:tracking-[0.9em] lg:tracking-[1.2em] text-accent">CONNECT.</h4>
          
          <ul className="space-y-8 md:space-y-12 lg:space-y-20">
            <li className="flex gap-5 md:gap-8 lg:gap-12 group items-start">
              <div className="w-10 h-10 md:w-13 md:h-13 lg:w-16 lg:h-16 bg-white/5 rounded-lg md:rounded-xl lg:rounded-2xl flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-primary group-hover:text-white transition-all duration-700 shadow-xl">
                <MapPin size={20} className="md:w-[26px] md:h-[26px] lg:w-[30px] lg:h-[30px]" />
              </div>
              <div className="space-y-1 pt-0.5 md:pt-1">
                <span className="block text-white/70 text-[10px] md:text-[12px] lg:text-[13px] font-black uppercase tracking-[0.15em] md:tracking-[0.2em] lg:tracking-[0.3em] leading-[1.8] md:leading-[2] lg:leading-[2.2]">
                  ROORKEE-HARIDWAR HIGHWAY,<br/>
                  UTTARAKHAND 249401,<br/>
                  INDIA
                </span>
              </div>
            </li>
            
            <li className="flex gap-5 md:gap-8 lg:gap-12 group items-center">
              <div className="w-10 h-10 md:w-13 md:h-13 lg:w-16 lg:h-16 bg-white/5 rounded-lg md:rounded-xl lg:rounded-2xl flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-accent group-hover:text-white transition-all duration-700 shadow-xl">
                <Phone size={20} className="md:w-[26px] md:h-[26px] lg:w-[30px] lg:h-[30px]" />
              </div>
              <span className="text-white/80 text-[12px] md:text-[15px] lg:text-[18px] font-black uppercase tracking-[0.15em] md:tracking-[0.3em] lg:tracking-[0.4em]">{UNIVERSITY_DATA.contact.phone}</span>
            </li>
            
            <li className="flex gap-5 md:gap-8 lg:gap-12 group items-center">
              <div className="w-10 h-10 md:w-13 md:h-13 lg:w-16 lg:h-16 bg-white/5 rounded-lg md:rounded-xl lg:rounded-2xl flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-highlight group-hover:text-white transition-all duration-700 shadow-xl">
                <Mail size={20} className="md:w-[26px] md:h-[26px] lg:w-[30px] lg:h-[30px]" />
              </div>
              <span className="text-white/80 text-[12px] md:text-[15px] lg:text-[18px] font-black uppercase tracking-[0.15em] md:tracking-[0.3em] lg:tracking-[0.4em]">{UNIVERSITY_DATA.contact.email.toUpperCase()}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 md:mt-24 lg:mt-48 pt-8 md:pt-12 lg:pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-white/10 text-[8px] md:text-[10px] lg:text-[12px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] lg:tracking-[0.8em] gap-4 md:gap-8 lg:gap-12 text-center md:text-left">
        <p>&copy; {new Date().getFullYear()} {UNIVERSITY_DATA.name.toUpperCase()} ROORKEE.</p>
        <div className="flex gap-6 md:gap-12 lg:gap-16 items-center">
          <span className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</span>
          <span className="hover:text-primary transition-colors cursor-pointer">Terms of Use</span>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <a href="#" className="w-10 h-10 md:w-14 md:h-14 lg:w-18 lg:h-18 bg-white/5 rounded-lg md:rounded-[1.5rem] lg:rounded-[2rem] flex items-center justify-center text-white/30 hover:bg-primary hover:text-white transition-all transform hover:-translate-y-2 lg:hover:-translate-y-4 border border-white/10 backdrop-blur-3xl shadow-2xl">
      {icon}
    </a>
  );
}
