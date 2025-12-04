import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  // Simple form state
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send data to backend. Here we simulate success.
    setSubmitted(true);
  };

  return (
    <div className="pt-10 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">Kontakt aufnehmen</h1>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">HoloViperAgency</h2>
            <p className="text-slate-400 mb-8">
              Lassen Sie uns über Ihr Projekt sprechen. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center shrink-0 mr-4">
                  <MapPin className="text-brand-500" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Adresse</h3>
                  <p className="text-slate-400">{CONTACT_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center shrink-0 mr-4">
                  <Phone className="text-brand-500" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Telefon / Mobil</h3>
                  <p className="text-slate-400">{CONTACT_INFO.phone}</p>
                  <p className="text-slate-400">{CONTACT_INFO.mobile}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center shrink-0 mr-4">
                  <Mail className="text-brand-500" />
                </div>
                <div>
                  <h3 className="text-white font-medium">E-Mail</h3>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-brand-400 hover:text-brand-300">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="mt-10 h-64 w-full bg-slate-800 rounded-xl overflow-hidden border border-slate-700 relative">
               <div className="absolute inset-0 flex items-center justify-center text-slate-500 text-sm">
                  Karte wird geladen...
                  {/* In a real scenario, embed Google Maps iframe here */}
               </div>
               <img src="https://picsum.photos/600/400?grayscale" className="w-full h-full object-cover opacity-20" alt="Map Location" />
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
             {submitted ? (
               <div className="h-full flex flex-col items-center justify-center text-center py-10">
                 <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                   <Send className="text-green-500" size={32} />
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-2">Nachricht gesendet!</h3>
                 <p className="text-slate-400">Vielen Dank für Ihre Anfrage. Wir melden uns in Kürze.</p>
                 <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-brand-500 font-medium hover:text-brand-400"
                 >
                   Neue Nachricht senden
                 </button>
               </div>
             ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name / Firma</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors placeholder-slate-600"
                    placeholder="Ihr Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">E-Mail Adresse</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors placeholder-slate-600"
                    placeholder="ihre@email.de"
                  />
                </div>

                 <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">Betreff</label>
                  <select 
                    id="subject"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                  >
                    <option>Allgemeine Anfrage</option>
                    <option>KI-Agenten für Unternehmen</option>
                    <option>Schulung anfragen</option>
                    <option>Karriere / Bewerbung</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Nachricht</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    required 
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors placeholder-slate-600"
                    placeholder="Wie können wir Ihnen helfen?"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-3 rounded-lg transition-all shadow-lg shadow-brand-500/10"
                >
                  Nachricht absenden
                </button>
                <p className="text-xs text-slate-500 text-center">
                  Ihre Daten werden sicher verschlüsselt übertragen.
                </p>
              </form>
             )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;