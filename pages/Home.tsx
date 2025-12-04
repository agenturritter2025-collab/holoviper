import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Bot, GraduationCap, TrendingUp, Users } from 'lucide-react';
import { TAGLINE, SERVICES, FAQ } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-slate-950">
          <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080?grayscale&blur=2')] opacity-10 bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/80 to-slate-900"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-brand-900/30 border border-brand-500/30">
            <span className="text-brand-400 font-medium text-sm">Innovation beginnt hier</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            AI-Agenten & Schulungen <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-500">
              für Ihren Erfolg
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
            {TAGLINE} Wir analysieren das Problem und finden gemeinsam eine Lösung für Handwerk, Bildung und KMUs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <NavLink 
              to="/kontakt" 
              className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-lg font-semibold transition-all shadow-lg shadow-brand-500/20 flex items-center justify-center"
            >
              Jetzt Termin vereinbaren <ArrowRight className="ml-2 h-5 w-5" />
            </NavLink>
            <NavLink 
              to="/leistungen" 
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold transition-all border border-slate-700 flex items-center justify-center"
            >
              Leistungen ansehen
            </NavLink>
          </div>
        </div>
      </section>

      {/* Trust / Stats (Proof) */}
      <section className="py-12 bg-slate-900 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <p className="text-3xl font-bold text-white mb-1">2025</p>
              <p className="text-slate-400 text-sm">Gegründet</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-white mb-1">DACH</p>
              <p className="text-slate-400 text-sm">Region</p>
            </div>
             <div className="p-4">
              <p className="text-3xl font-bold text-white mb-1">24/7</p>
              <p className="text-slate-400 text-sm">Automatisierung</p>
            </div>
             <div className="p-4">
              <p className="text-3xl font-bold text-white mb-1">100%</p>
              <p className="text-slate-400 text-sm">Praxisnah</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Solution Teaser */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Warum HoloViperAgency?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Der Wettbewerb schläft nicht. Ob Handwerk oder Bildung – wer jetzt nicht automatisiert, verliert den Anschluss.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <div key={service.id} className="bg-slate-900 p-8 rounded-xl border border-slate-800 hover:border-brand-500/50 transition-colors">
                <div className="w-12 h-12 bg-brand-900/50 rounded-lg flex items-center justify-center mb-6 text-brand-400">
                  {service.iconName === 'Bot' && <Bot size={28} />}
                  {service.iconName === 'GraduationCap' && <GraduationCap size={28} />}
                  {service.iconName === 'Workflow' && <TrendingUp size={28} />}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.benefits.slice(0, 2).map((benefit, i) => (
                    <li key={i} className="flex items-center text-sm text-slate-300">
                      <CheckCircle2 size={16} className="text-accent-500 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section (SEO Content) */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Häufig gestellte Fragen</h2>
          <div className="space-y-6">
            {FAQ.map((item, index) => (
              <div key={index} className="bg-slate-950 p-6 rounded-lg border border-slate-800">
                <h3 className="text-lg font-semibold text-white mb-2">{item.question}</h3>
                <p className="text-slate-400">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-brand-900 to-slate-900 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Bereit für die Transformation?
          </h2>
          <p className="text-xl text-brand-100 mb-10">
            Lassen Sie uns gemeinsam Ihre Prozesse optimieren oder Ihre Schüler fit für die Zukunft machen.
          </p>
          <NavLink 
            to="/kontakt" 
            className="inline-flex items-center px-8 py-4 bg-white text-brand-900 rounded-lg font-bold hover:bg-slate-100 transition-colors"
          >
            Kostenloses Erstgespräch buchen
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Home;