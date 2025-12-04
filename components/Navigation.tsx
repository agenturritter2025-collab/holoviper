import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Info } from 'lucide-react';
import { NAV_ITEMS, COMPANY_NAME } from '../constants';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Demo Notice Banner */}
      <div className="bg-gradient-to-r from-accent-600 to-brand-600 text-white text-xs md:text-sm font-medium py-2 px-4 text-center relative z-50">
        <div className="flex items-center justify-center gap-2">
          <Info size={16} />
          <span>DEMO-MODUS: Dies ist eine Beispielseite für Kunden. Inhalte, Logos und Farben sind vollständig anpassbar.</span>
        </div>
      </div>

      <nav className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24"> 
            
            {/* Left Side: Brand Name (Mobile) + Navigation Links (Desktop) */}
            <div className="flex-shrink-0 flex items-center gap-4">
               {/* Text Brand for Mobile (visible lg:hidden) */}
               <NavLink to="/" className="text-white font-bold text-xl tracking-tight lg:hidden">
                {COMPANY_NAME}
              </NavLink>
              
              {/* Desktop Navigation - Links aligned */}
              <div className="hidden lg:flex space-x-8">
                {NAV_ITEMS.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `text-sm font-medium transition-colors ${
                        isActive ? 'text-brand-500' : 'text-slate-300 hover:text-white'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Right Side: Logo Placeholder + Mobile Menu Button */}
            <div className="flex items-center gap-4">
               {/* Logo Placeholder - Always visible, right aligned */}
               <NavLink to="/" aria-label="Startseite" className="flex items-center group">
                  <div className="h-14 w-32 bg-slate-900 border-2 border-dashed border-slate-700 rounded-lg flex flex-col items-center justify-center px-2 group-hover:border-brand-500 transition-colors">
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold group-hover:text-brand-400">Ihr Logo</span>
                    <span className="text-[10px] text-slate-600 group-hover:text-brand-500/70">(Platzhalter)</span>
                  </div>
               </NavLink>

               {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <button
                  onClick={toggleMenu}
                  className="text-slate-300 hover:text-white p-2"
                  aria-label="Menü öffnen"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900 border-b border-slate-800 shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-3 rounded-md text-base font-medium ${
                      isActive
                        ? 'bg-brand-900/30 text-brand-400 border border-brand-500/20'
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;