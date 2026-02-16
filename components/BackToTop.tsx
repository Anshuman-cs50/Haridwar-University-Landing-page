
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 500) setVisible(true);
      else setVisible(false);
    };
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-24 right-6 z-[90] p-4 rounded-2xl bg-white border border-gray-100 shadow-2xl text-primary transition-all duration-500 hover:bg-primary hover:text-white transform ${
        visible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-50 pointer-events-none'
      }`}
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default BackToTop;
