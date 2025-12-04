import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const TestimonialsPage: React.FC = () => {
  return (
    <div className="pt-10 pb-20">
       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-6">Kundenstimmen</h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          Ergebnisse zählen. Sehen Sie, was wir für Handwerksbetriebe und Schulen erreicht haben.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="bg-slate-900 p-8 rounded-2xl border border-slate-800 relative">
            <Quote className="absolute top-8 right-8 text-slate-800" size={48} />
            <p className="text-xl text-slate-200 mb-8 relative z-10 font-medium italic">
              "{t.quote}"
            </p>
            <div className="border-t border-slate-800 pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-bold">{t.author}</p>
                  <p className="text-slate-500 text-sm">{t.role}, {t.company}</p>
                </div>
                {t.metrics && (
                   <div className="bg-green-900/30 border border-green-800 text-green-400 text-xs px-3 py-1 rounded-full">
                    {t.metrics}
                   </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto mt-20 p-8 bg-brand-900/20 rounded-2xl border border-brand-500/30 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Möchten Sie der nächste Erfolg sein?</h3>
        <p className="text-slate-400 mb-8">
          Ob Handwerk oder Schule – wir analysieren Ihre Situation unverbindlich.
        </p>
        <NavLink 
          to="/kontakt"
          className="bg-brand-600 hover:bg-brand-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
        >
          Jetzt anfragen
        </NavLink>
      </div>
    </div>
  );
};

export default TestimonialsPage;