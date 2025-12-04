import React from 'react';
import { JOBS, CONTACT_INFO } from '../constants';
import { Briefcase, MapPin, Clock } from 'lucide-react';

const JobsPage: React.FC = () => {
  return (
    <div className="pt-10 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h1 className="text-4xl font-bold text-white mb-6">Karriere bei HoloViper</h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          Wir suchen Visionäre, die die KI-Revolution in Deutschland mitgestalten wollen.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {JOBS.map((job) => (
          <div key={job.id} className="bg-slate-900 p-6 sm:p-8 rounded-xl border border-slate-800 hover:border-brand-500 transition-all group">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <h2 className="text-2xl font-bold text-white group-hover:text-brand-400 transition-colors">
                {job.title}
              </h2>
              <span className="inline-flex items-center text-brand-500 bg-brand-900/20 px-3 py-1 rounded-full text-sm font-medium">
                <Briefcase size={14} className="mr-2" /> {job.type}
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 text-slate-400 text-sm mb-6">
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" /> {job.location}
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" /> Ab sofort
              </div>
            </div>

            <p className="text-slate-300 mb-8">
              {job.description}
            </p>

            <a 
              href={`mailto:${CONTACT_INFO.email}?subject=Bewerbung: ${job.title}`}
              className="inline-block bg-white text-slate-900 px-6 py-2 rounded-md font-bold hover:bg-slate-200 transition-colors"
            >
              Jetzt bewerben
            </a>
          </div>
        ))}
        
        {JOBS.length === 0 && (
           <div className="text-center text-slate-500 py-12">
              Aktuell sind keine offenen Stellen ausgeschrieben. Initiativbewerbungen sind dennoch willkommen.
           </div>
        )}
      </div>
    </div>
  );
};

export default JobsPage;