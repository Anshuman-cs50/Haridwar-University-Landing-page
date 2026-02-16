import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight, Sparkles, ChevronRight, Zap, Globe, Briefcase, Layers } from 'lucide-react';
import { UNIVERSITY_DATA } from '../constants';
import { CMSSection } from '../types';

interface SectionProps {
  section: CMSSection;
}

const LazySection: React.FC<{ children: React.ReactNode, threshold?: number }> = ({ children, threshold = 0.05 }) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin: '400px' }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={ref} className="min-h-[400px]">
      {isIntersecting ? children : <div className="w-full h-[500px] shimmer-bg rounded-[3rem] opacity-40" />}
    </div>
  );
};

const BrandLogo = ({ name }: { name: string }) => {
  switch (name) {
    case 'Google':
      return <span className="font-sans font-bold text-2xl md:text-3xl tracking-tighter"><span className="text-[#4285F4]">G</span><span className="text-[#EA4335]">o</span><span className="text-[#FBBC05]">o</span><span className="text-[#4285F4]">g</span><span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span></span>;
    case 'Microsoft':
      return <span className="font-sans font-semibold text-2xl md:text-3xl text-[#737373] flex items-center gap-2 md:gap-3"><div className="grid grid-cols-2 gap-1"><div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#F25022]"></div><div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#7FBA00]"></div><div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#00A4EF]"></div><div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#FFB900]"></div></div>Microsoft</span>;
    case 'Amazon':
      return <div className="flex flex-col items-start"><span className="font-sans font-black text-2xl md:text-3xl text-black leading-none">amazon</span><div className="w-full h-1 md:h-1.5 bg-[#FF9900] rounded-full mt-0.5 transform -skew-x-12 origin-left"></div></div>;
    case 'IBM': return <span className="font-sans font-black text-2xl md:text-3xl text-[#006699] tracking-tighter">IBM</span>;
    case 'TCS': return <span className="font-sans font-black text-2xl md:text-3xl text-[#005CB9] tracking-tighter italic">TCS</span>;
    case 'Infosys': return <span className="font-sans font-black text-2xl md:text-3xl text-[#007CC3] tracking-tighter">Infosys</span>;
    case 'Wipro':
      return (
        <div className="flex items-center gap-2">
          <span className="font-sans font-black text-2xl md:text-3xl text-[#2B3990] tracking-tighter">wipro</span>
          <div className="flex gap-0.5 mb-1">
            <div className="w-1.5 h-1.5 bg-[#F58220] rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-[#ED1C24] rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-[#00AEEF] rounded-full"></div>
          </div>
        </div>
      );
    case 'Adobe':
      return <span className="font-sans font-black text-2xl md:text-3xl text-[#FF0000] tracking-tighter">Adobe</span>;
    case 'Oracle':
      return <span className="font-sans font-black text-2xl md:text-3xl text-[#F80000] tracking-tighter uppercase">ORACLE</span>;
    case 'Accenture':
      return <span className="font-sans font-black text-2xl md:text-3xl text-black tracking-tighter">accenture<span className="text-[#A100FF] font-bold">{'>'}</span></span>;
    default: return <span className="font-black text-lg md:text-xl text-gray-400 uppercase tracking-tighter">{name}</span>;
  }
};

const Hero: React.FC<any> = ({ content }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const isYouTubeVideo = content?.bg_video && content.bg_video.length < 20; // Check if it's a video ID

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-slate-100 overflow-hidden pt-36 md:pt-48 pb-16">
      <div className="absolute inset-0 z-0 bg-slate-200">
        <img src={content?.bg_image} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-20' : 'opacity-100'}`} alt="Campus" />
        {content?.bg_video && (
          isYouTubeVideo ? (
            <iframe
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
              src={`https://www.youtube.com/embed/${content.bg_video}?autoplay=1&mute=1&controls=0&loop=1&playlist=${content.bg_video}&modestbranding=1&rel=0`}
              title="Campus Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={() => setVideoLoaded(true)}
            />
          ) : (
            <video autoPlay muted loop playsInline onPlay={() => setVideoLoaded(true)} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <source src={content.bg_video} type="video/mp4" />
            </video>
          )
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-transparent"></div>
      </div>
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full animate-reveal">
        <div className="max-w-5xl space-y-8 md:space-y-12">
          <div className="inline-flex items-center gap-3 bg-white/20 px-5 md:px-6 py-2.5 rounded-full border border-white/30 backdrop-blur-md">
            <Sparkles size={14} className="text-white" />
            <span className="text-[10px] md:text-[11px] font-black text-white uppercase tracking-[0.3em] md:tracking-[0.4em]">Admissions 2026 Open</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[5.5rem] xl:text-[7.5rem] font-black text-white leading-[1] md:leading-[0.85] tracking-tighter uppercase drop-shadow-2xl" style={{ textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
            {content?.title} <br />
            <span className="text-accent italic drop-shadow-2xl" style={{ textShadow: '0 10px 30px rgba(0,230,118,0.4)' }}>{content?.subtitle}</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-2xl font-medium leading-relaxed drop-shadow-lg" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.6)' }}>{content?.description}</p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 pt-4 w-full md:w-auto">
            <a href={UNIVERSITY_DATA.links.apply} target="_blank" className="bg-[#00E676] text-white px-10 md:px-14 py-4 md:py-6 rounded-full md:rounded-2xl font-black uppercase tracking-widest text-[11px] md:text-[12px] flex items-center justify-center gap-4 shadow-green-glow hover:brightness-110 transition-all active:scale-95 w-full md:w-auto">Apply Now <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" strokeWidth={3} /></a>
            <a href={UNIVERSITY_DATA.links.infrastructure} target="_blank" className="bg-primary text-white px-10 md:px-14 py-4 md:py-6 rounded-full md:rounded-2xl font-black uppercase tracking-widest text-[11px] md:text-[12px] hover:brightness-110 shadow-blue-glow transition-all text-center flex items-center justify-center active:scale-95 w-full md:w-auto">Campus Tour</a>
          </div>
        </div>
      </div>
    </section>
  );
};

const TrustRibbon: React.FC<any> = ({ content }) => (
  <div className="bg-white border border-gray-100 py-10 md:py-16 relative z-30 shadow-soft-2xl -mt-12 md:-mt-16 mx-auto max-w-[92%] md:max-w-6xl rounded-3xl md:rounded-[3.5rem]">
    {/* Branding Header Area updated with punchier, shorter text as requested */}
    <div className="text-center mb-10 md:mb-14 px-6">
      <h3 className="text-[11px] md:text-[13px] font-black text-secondary/30 uppercase tracking-[0.6em] md:tracking-[1em] leading-relaxed">
        RECOGNIZED EXCELLENCE • PROVEN SUCCESS
      </h3>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 px-6 md:px-12">
      {content?.items?.map((item: any, i: number) => (
        <div key={i} className="flex flex-col items-center text-center space-y-1.5 md:space-y-2 border-r border-gray-100 last:border-none last:md:border-none odd:border-r-0 even:border-r-0 md:odd:border-r md:even:border-r">
          <p className="text-[9px] md:text-[12px] font-black text-accent uppercase tracking-[0.1em] md:tracking-[0.2em]">{item.label}</p>
          <p className="text-lg md:text-2xl lg:text-4xl font-black text-secondary tracking-tighter uppercase">{item.value}</p>
        </div>
      ))}
    </div>
  </div>
);

const PlacementStats: React.FC<any> = ({ content }) => (
  <section id="placements" className="py-24 md:py-48 brand-gradient-blue text-white overflow-hidden relative">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="mb-20 md:mb-32 text-center space-y-6 md:space-y-8">
        <span className="text-[14px] md:text-[18px] font-black text-accent uppercase tracking-[0.5em] md:tracking-[1em] block animate-pulse">{content?.subtitle}</span>
        <h2 className="text-4xl md:text-7xl lg:text-[10rem] font-black uppercase tracking-tighter leading-[1] md:leading-[0.75]">The <br /><span className="text-warning">Benchmark.</span></h2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
        {content?.stats?.map((stat: any, i: number) => (
          <div key={i} className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] text-center hover:bg-white hover:text-primary transition-all duration-700 group overflow-hidden">
            <h3 className="text-xl md:text-3xl lg:text-5xl font-black leading-tight mb-4 md:mb-6 group-hover:scale-105 transition-transform whitespace-nowrap">{stat.value}</h3>
            <p className="text-[9px] md:text-[12px] font-black opacity-80 uppercase tracking-[0.2em] md:tracking-[0.3em] whitespace-nowrap">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CoursesTeaser: React.FC<any> = ({ content }) => (
  <section id="programs" className="py-24 md:py-48 bg-white overflow-hidden scroll-mt-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 md:mb-36 gap-10">
        <h2 className="text-5xl md:text-8xl lg:text-9xl font-black text-secondary tracking-tighter uppercase leading-none">Elite <br /><span className="text-primary italic">Programs.</span></h2>
        <a href={UNIVERSITY_DATA.links.overview} target="_blank" className="bg-primary text-white px-10 md:px-14 py-5 md:py-7 rounded-2xl font-black uppercase tracking-widest text-[12px] md:text-[14px] flex items-center gap-4 md:gap-6 shadow-blue-glow hover:brightness-110 transition-all group">
          Programs Overview <ChevronRight size={24} className="group-hover:translate-x-3 transition-transform" strokeWidth={3} />
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-14">
        {content?.items?.map((course: any, i: number) => (
          <div key={i} className="group bg-slate-50 rounded-[3rem] md:rounded-[4rem] overflow-hidden hover:bg-white hover:shadow-soft-2xl transition-all duration-700 flex flex-col h-full hover:-translate-y-4 md:hover:-translate-y-6 border border-transparent hover:border-gray-100">
            <div className="aspect-video h-64 md:h-80 overflow-hidden relative">
              <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" />
            </div>
            <div className="p-8 md:p-14 flex-grow flex flex-col justify-between">
              <div className="space-y-6 md:space-y-8">
                <h3 className="text-2xl md:text-3xl font-black text-secondary uppercase leading-tight tracking-tight">{course.title}</h3>
                <p className="text-base md:text-lg text-muted font-bold leading-relaxed">{course.description}</p>
              </div>
              <div className="pt-8 md:pt-12 border-t border-gray-100 mt-8 md:mt-12">
                <a href={UNIVERSITY_DATA.links.overview} target="_blank" className="text-[11px] md:text-[13px] font-black text-primary uppercase tracking-[0.3em] md:tracking-[0.4em] flex items-center gap-3 md:gap-4 hover:gap-7 transition-all">Curriculum <ArrowRight size={20} strokeWidth={3} /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AlumniSection: React.FC<any> = ({ content }) => (
  <section id="alumni" className="py-24 md:py-48 bg-slate-50 overflow-hidden relative scroll-mt-24">
    <div className="absolute top-0 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/5 blur-[80px] md:blur-[150px] rounded-full"></div>
    <div className="absolute bottom-0 right-1/4 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-accent/5 blur-[60px] md:blur-[120px] rounded-full"></div>

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="mb-24 md:mb-40 text-center max-w-5xl mx-auto space-y-6 md:space-y-8">
        <h2 className="text-4xl md:text-7xl lg:text-[9rem] font-black text-secondary tracking-tighter uppercase leading-none">The <br /><span className="text-accent">Elite</span> Alumni.</h2>
      </div>
      <div className="grid sm:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
        {content?.alumni?.map((alum: any, i: number) => (
          <div key={i} className="group bg-white rounded-[2.5rem] md:rounded-[5rem] p-8 md:p-16 border border-gray-100 shadow-sm hover:shadow-blue-glow transition-all duration-700 hover:-translate-y-4 flex flex-col items-center relative">
            <div className="absolute top-6 md:top-12 right-6 md:right-12 bg-primary w-10 md:w-14 h-10 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-blue-glow z-20 group-hover:scale-125 transition-transform">
              <Zap size={20} fill="white" className="md:w-6 md:h-6" />
            </div>
            <div className="relative mb-8 md:mb-12">
              <div className="w-32 md:w-48 h-32 md:h-48 rounded-[2rem] md:rounded-[4rem] overflow-hidden border-[6px] md:border-[10px] border-slate-50 shadow-soft-2xl relative z-10 mx-auto bg-slate-100 aspect-square">
                <img src={alum.image} alt={alum.name} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-[1500ms]" />
              </div>
            </div>
            <div className="text-center space-y-4 md:space-y-6">
              <h4 className="text-2xl md:text-4xl font-black text-secondary uppercase tracking-tight leading-none">{alum.name}</h4>
              <p className="text-[12px] md:text-[14px] font-black text-primary uppercase tracking-[0.3em] md:tracking-[0.4em]">{alum.batch}</p>
              <div className="h-0.5 w-12 md:w-16 bg-gray-100 mx-auto my-4 md:my-6"></div>
              <p className="text-base md:text-lg italic font-bold text-muted leading-relaxed px-2 md:px-6">"{alum.quote}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AdmissionPortalCTA: React.FC<any> = ({ content }) => (
  <section className="py-20 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="bg-primary rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-blue-glow relative overflow-hidden group">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="relative z-10 space-y-3 md:space-y-4 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter">{content?.title || 'OFFICIAL ADMISSION PORTAL'}</h2>
          <p className="text-white/70 font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-[12px]">{content?.subtitle}</p>
        </div>
        <a href={UNIVERSITY_DATA.links.apply} target="_blank" className="relative z-10 bg-[#00E676] text-white px-10 md:px-12 py-5 md:py-6 rounded-xl md:rounded-2xl font-black uppercase tracking-widest text-[12px] md:text-[14px] flex items-center gap-4 hover:brightness-110 transition-all shadow-green-glow active:scale-95">
          {content?.cta_label || 'Access Portal'} <ArrowRight size={20} strokeWidth={3} />
        </a>
      </div>
    </div>
  </section>
);

const USPPillars: React.FC<any> = ({ content }) => (
  <section id="advantage" className="py-24 md:py-48 bg-slate-50 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="mb-20 md:mb-32 text-center space-y-6">
        <h2 className="text-4xl md:text-7xl lg:text-9xl font-black text-secondary tracking-tighter uppercase leading-none">{content?.title}</h2>
        <div className="h-2 md:h-4 w-32 md:w-48 bg-primary mx-auto rounded-full"></div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        {content?.items?.map((item: any, i: number) => (
          <div key={i} className="bg-white p-5 md:p-8 rounded-[2.5rem] md:rounded-[4rem] border border-transparent hover:border-primary hover:shadow-blue-glow transition-all group hover:-translate-y-4 duration-700 flex flex-col overflow-hidden">
            <div className="text-primary mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-700 flex-shrink-0">
              {item.icon === 'Layers' ? <Layers size={36} className="w-7 h-7 md:w-9 md:h-9" /> : item.icon === 'Globe' ? <Globe size={36} className="w-7 h-7 md:w-9 md:h-9" /> : item.icon === 'Zap' ? <Zap size={36} className="w-7 h-7 md:w-9 md:h-9" /> : <Briefcase size={36} className="w-7 h-7 md:w-9 md:h-9" />}
            </div>
            <h3 className="text-base md:text-lg font-black text-secondary mb-3 md:mb-4 uppercase tracking-tight leading-tight break-words hyphens-auto">{item.title}</h3>
            <p className="text-xs md:text-sm text-muted font-semibold leading-snug break-words hyphens-auto overflow-hidden">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const PartnersMarquee: React.FC<any> = ({ content }) => {
  const partners = content?.partners || [];
  return (
    <div className="py-24 md:py-36 bg-white border-y border-gray-100 overflow-hidden relative">
      <div className="mb-16 md:mb-24 text-center px-6">
        <span className="text-[12px] md:text-[16px] font-black text-secondary uppercase tracking-[0.5em] md:tracking-[1em]">Elite Placement Partners</span>
      </div>
      <div className="flex animate-marquee whitespace-nowrap gap-32 md:gap-64 items-center">
        {[...partners, ...partners].map((partner: string, i: number) => (
          <div key={i} className="flex items-center justify-center transition-all duration-700 hover:scale-110">
            <BrandLogo name={partner} />
          </div>
        ))}
      </div>
    </div>
  );
};

const AdmissionsTeaser: React.FC<any> = ({ content }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const isYouTubeVideo = content?.bg_video && content.bg_video.length < 20;
  const fallbackImage = "https://huroorkee.ac.in/_next/image?url=https%3A%2F%2Fapi-cmshu.surl.co.in%2Fmedia%2Fsliders%2FVibrant_Campus_Life.jpg&w=1080&q=75";

  return (
    <section className="min-h-screen bg-secondary text-white overflow-hidden relative flex items-center justify-center">
      {/* Background Video with Fallback Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Fallback Image - shown while video loads */}
        <img 
          src={fallbackImage} 
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-0' : 'opacity-100'}`}
          alt="Legacy Hub Background"
        />
        
        {/* Background Video */}
        {content?.bg_video && isYouTubeVideo && (
          <iframe
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${videoLoaded ? 'opacity-85' : 'opacity-0'}`}
            src={`https://www.youtube.com/embed/${content.bg_video}?autoplay=1&mute=1&controls=0&loop=1&playlist=${content.bg_video}&modestbranding=1&rel=0&start=10&enablejsapi=1`}
            title="Background Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            onLoad={() => {
              setVideoLoaded(true);
            }}
            onError={() => {
              setVideoLoaded(true);
            }}
            style={{ pointerEvents: 'none', objectFit: 'cover' as const }}
          />
        )}
        
        {/* Enhanced Gradient Overlay - Reduced darkness for better visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent"></div>
        {/* Additional subtle gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/15 to-black/30"></div>
      </div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-20 md:gap-32 items-center relative z-10">
        <div className="space-y-12 md:space-y-24 text-center lg:text-left">
          <h2 className="text-4xl md:text-6xl lg:text-[8rem] xl:text-[10rem] font-black leading-none uppercase tracking-tighter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">Your <br /><span className="text-[#00E676] italic drop-shadow-[0_8px_16px_rgba(0,230,118,0.3)]">Legacy</span> <br />Hub.</h2>
          <a href={UNIVERSITY_DATA.links.apply} target="_blank" className="inline-flex bg-[#00E676] text-white px-8 md:px-16 py-4 md:py-6 rounded-xl md:rounded-2xl font-black uppercase tracking-widest text-[11px] md:text-[13px] shadow-green-glow hover:scale-105 transition-all items-center justify-center gap-4 md:gap-6 group hover:shadow-[0_35px_60px_-15px_rgba(0,230,118,0.4)]">
            Direct Admission 2026 <ArrowRight size={20} className="md:w-7 md:h-7 group-hover:translate-x-2 transition-transform" strokeWidth={3} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default function SectionRenderer({ section }: SectionProps) {
  if (!section?.is_enabled) return null;
  const isAboveFold = section.type === 'HERO' || section.type === 'TRUST_RIBBON';
  const renderContent = () => {
    switch (section.type) {
      case 'HERO': return <Hero content={section?.content} />;
      case 'TRUST_RIBBON': return <TrustRibbon content={section?.content} />;
      case 'PLACEMENT_STATS': return <PlacementStats content={section?.content} />;
      case 'PARTNERS_MARQUEE': return <PartnersMarquee content={section?.content} />;
      case 'USP_PILLARS': return <USPPillars content={section?.content} />;
      case 'COURSES_TEASER': return <CoursesTeaser content={section?.content} />;
      case 'ADMISSIONS_TEASER': return <AdmissionsTeaser content={section?.content} />;
      case 'ADMISSION_PORTAL_CTA': return <AdmissionPortalCTA content={section?.content} />;
      case 'ALUMNI_SECTION': return <AlumniSection content={section?.content} />;
      default: return null;
    }
  };
  return isAboveFold ? renderContent() : <LazySection>{renderContent()}</LazySection>;
}