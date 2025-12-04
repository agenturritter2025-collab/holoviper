import React from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Globe } from 'lucide-react';
import { COMPANY_NAME, CONTACT_INFO, SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Column 1: Company */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-28 bg-slate-900 border border-dashed border-slate-700 rounded flex items-center justify-center">
                 <span className="text-xs text-slate-500 font-bold uppercase">Ihr Logo</span>
              </div>
              <h3 className="text-xl font-bold text-white">{COMPANY_NAME}</h3>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              Wir gestalten die Zukunft heute mit fortschrittlichen AI-Agenten und zukunftsorientierter Bildung.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((link) => (
                <a 
                  key={link.platform} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-brand-500 transition-colors"
                  aria-label={link.platform}
                >
                  {link.iconName === 'Instagram' && <Instagram size={20} />}
                  {link.iconName === 'Facebook' && <Facebook size={20} />}
                  {link.iconName === 'Globe' && <Globe size={20} />}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Kontakt</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-0.5 text-brand-500 shrink-0" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-brand-500 shrink-0" />
                <a href={`tel:${CONTACT_INFO.mobile.replace(/\s/g, '')}`} className="hover:text-white">
                  {CONTACT_INFO.mobile}
                </a>
              </li>
               <li className="flex items-center">
                <Phone size={16} className="mr-2 text-brand-500 shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="hover:text-white">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-brand-500 shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white">
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Rechtliches</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/impressum" className="text-slate-400 hover:text-brand-500">Impressum</NavLink>
              </li>
              <li>
                <NavLink to="/datenschutz" className="text-slate-400 hover:text-brand-500">Datenschutz</NavLink>
              </li>
              <li>
                <NavLink to="/agb" className="text-slate-400 hover:text-brand-500">AGB</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} {COMPANY_NAME}. Alle Rechte vorbehalten. Inhaber: Detlef Ritter.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;