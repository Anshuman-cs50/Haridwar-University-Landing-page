
import React from 'react';
import SEO from '../components/SEO';
import SectionRenderer from '../components/SectionRenderer';
import { LANDING_SECTIONS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="relative overflow-x-hidden">
      <SEO 
        title="Haridwar University | Number 1 Placement Campus in Uttarakhand" 
        description="India's Leading University in Placements & Research. Explore UG & PG Admissions 2026." 
      />

      {LANDING_SECTIONS.map((section) => (
        <SectionRenderer key={section.id} section={section} />
      ))}
    </div>
  );
};

export default Home;
