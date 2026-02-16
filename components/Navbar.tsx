
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { UNIVERSITY_DATA } from '../constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const scrollRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { id: 'programs', label: 'Programs' },
    { id: 'placements', label: 'Placements' },
    { id: 'alumni', label: 'Alumni' },
    { id: 'advantage', label: 'Advantage' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setScrolled(currentScrollPos > 50);

      const isScrollingUp = prevScrollPos > currentScrollPos;
      const isNearTop = currentScrollPos < 10;
      
      if (isNearTop) setVisible(true);
      else if (isScrollingUp) setVisible(true);
      else if (currentScrollPos > 100) setVisible(false);

      setPrevScrollPos(currentScrollPos);

      // Removed 'contact' from spy sections because it now redirects to an external URL
      const sections = ['home', 'programs', 'placements', 'alumni', 'advantage'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -150 && rect.top <= 350) setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const targetPosition = element.offsetTop - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleNavClick = (id: string) => {
    if (id === 'contact') {
      // Direct navigation to the specified URL in a new tab for better UX when "going to another website"
      window.open(UNIVERSITY_DATA.links.apply, '_blank');
    } else {
      scrollToSection(id);
    }
  };

  return (
    <nav 
      aria-label="Main Navigation"
      className={`fixed top-0 left-0 right-0 z-[200] px-3 md:px-6 lg:px-10 py-4 md:py-6 lg:py-8 pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] transform ${
        visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className={`max-w-[1400px] mx-auto flex items-center justify-between transition-all duration-700 pointer-events-auto ${
        scrolled
          ? 'bg-white/95 backdrop-blur-2xl border border-gray-100 shadow-soft-2xl rounded-full px-4 md:px-8 py-2 md:py-3.5' 
          : 'bg-transparent px-2 py-4'
      }`}>
        
        {/* Logo Section */}
        <div 
          className="flex items-center gap-2 shrink-0 cursor-pointer" 
          onClick={() => scrollToSection('home')}
        >
          <div className={`bg-white p-2 md:p-3 rounded-xl md:rounded-2xl shadow-sm border border-gray-50 transition-all duration-700 ${scrolled ? 'scale-90' : 'scale-100 md:scale-110 lg:scale-125'}`}>
            <img 
              src={UNIVERSITY_DATA.logo_url} 
              alt="Logo" 
              className="h-7 md:h-10 lg:h-12 w-auto object-contain"
            />
          </div>
        </div>

        {/* Navigation Links - Horizontally Scrollable on Mobile/Tablet */}
        <div className="flex-grow flex justify-center mx-2 md:mx-6 overflow-hidden">
          <div 
            ref={scrollRef}
            className="flex items-center gap-1 md:gap-2 bg-white/50 md:bg-white/40 p-1.5 md:p-2 rounded-2xl border border-white/20 backdrop-blur-md overflow-x-auto no-scrollbar scroll-smooth"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-4 md:px-6 lg:px-8 py-2.5 md:py-3.5 rounded-xl text-[9px] md:text-[11px] font-black uppercase tracking-widest whitespace-nowrap transition-all duration-300 ${
                  activeSection === link.id 
                    ? 'bg-white text-primary shadow-sm scale-[1.05]' 
                    : 'text-secondary/50 hover:text-primary hover:bg-white/50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Apply Now Button - Styled as per screenshot */}
        <div className="shrink-0">
          <a 
            href={UNIVERSITY_DATA.links.apply} 
            target="_blank" 
            className="flex items-center gap-2 md:gap-4 bg-[#00E676] text-white px-5 md:px-10 lg:px-12 py-3.5 md:py-5 lg:py-6 rounded-xl md:rounded-2xl text-[10px] md:text-[12px] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] shadow-green-glow group active:scale-95 transition-all"
          >
            <span className="hidden sm:inline">APPLY NOW</span>
            <span className="sm:hidden">APPLY</span>
            <ArrowRight size={16} className="md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" strokeWidth={3} />
          </a>
        </div>
      </div>
    </nav>
  );
}
