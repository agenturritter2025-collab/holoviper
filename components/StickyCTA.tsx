import React from 'react';
import { NavLink } from 'react-router-dom';
import { Calendar } from 'lucide-react';

const StickyCTA: React.FC = () => {
  return (
    <div className="fixed bottom-20 right-4 z-40 md:hidden">
      <NavLink
        to="/kontakt"
        className="flex items-center justify-center bg-accent-600 text-white rounded-full p-4 shadow-lg hover:bg-accent-700 transition-all"
        aria-label="Termin vereinbaren"
      >
        <Calendar size={24} />
      </NavLink>
    </div>
  );
};

export default StickyCTA;