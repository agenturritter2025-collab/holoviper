import React from 'react';
import { SERVICES } from '../constants';
import { Check, Bot, GraduationCap, TrendingUp, ChevronRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-10 pb-20">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-6">Unsere Leistungen</h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          Präzise Lösungen für den Wettbewerb von morgen. Wir bieten Schulungen und Automatisierung aus einer Hand.
        </p>
      </div>

      {/* Service Detail Cards */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {SERVICES.map((service, index) => (
          <div 
            key={service.id} 
            className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Visual */}
            <div className="w-full lg:w-1/2">
              <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-32 bg-brand-500/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-brand-500/20 transition-all duration-700"></div>
                <div className="relative z-10 flex justify-center items-center h-64">
                   {service.iconName === 'Bot' && <Bot size={120} className="text-brand-500" />}
                   {service.iconName === 'GraduationCap' && <GraduationCap size={120} className="text-accent-500" />}
                   {service.iconName === 'Workflow' && <TrendingUp size={120} className="text-brand-400" />}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-4">{service.title}</h2>
              <div className="inline-block px-3 py-1 bg-slate-800 rounded-full text-xs font-semibold text-slate-300 mb-6 border border-slate-700">
                Zielgruppe: {service.targetAudience}
              </div>
              <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <h3 className="text-white font-semibold mb-3">Ihre Vorteile:</h3>
              <ul className="space-y-3 mb-8">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="text-brand-500 mr-3 mt-1 shrink-0" size={18} />
                    <span className="text-slate-400">{benefit}</span>
                  </li>
                ))}
              </ul>

              <NavLink 
                to="/kontakt"
                className="inline-flex items-center text-brand-400 font-semibold hover:text-brand-300 transition-colors"
              >
                Angebot anfordern <ChevronRight size={16} className="ml-1" />
              </NavLink>
            </div>
          </div>
        ))}
      </div>

      {/* Comparison Table (Conversion Element) */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
          <div className="p-8 text-center border-b border-slate-800">
            <h2 className="text-2xl font-bold text-white">Warum HoloViper?</h2>
            <p className="text-slate-400 mt-2">Der Unterschied im Detail</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-400">
              <thead className="bg-slate-950 text-slate-200 uppercase font-medium">
                <tr>
                  <th className="px-6 py-4">Merkmal</th>
                  <th className="px-6 py-4 text-brand-400">HoloViperAgency</th>
                  <th className="px-6 py-4 text-slate-500">Standard-Agenturen</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr>
                  <td className="px-6 py-4 font-medium text-white">Fokus</td>
                  <td className="px-6 py-4 text-brand-100">Handwerk & Bildung (Spezialisiert)</td>
                  <td className="px-6 py-4">Alles für Jeden</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-white">Ansatz</td>
                  <td className="px-6 py-4 text-brand-100">Problem → Individuelle Lösung</td>
                  <td className="px-6 py-4">Standard-Templates</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-white">Technologie</td>
                  <td className="px-6 py-4 text-brand-100">Multimodal & Agenten-basiert</td>
                  <td className="px-6 py-4">Einfache Chatbots</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;