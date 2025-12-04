import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('hv_cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('hv_cookie_consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-700 p-4 shadow-2xl z-50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-300 text-sm">
          Mit Klick auf „Akzeptieren“ besuchen Sie unsere Webseite mit Werbung, Cookies und Tracking.
          <a href="#/datenschutz" className="ml-2 text-brand-500 hover:text-brand-400 underline">Datenschutz</a>
        </p>
        <button
          onClick={handleAccept}
          className="bg-brand-600 hover:bg-brand-500 text-white px-6 py-2 rounded-md font-medium transition-colors whitespace-nowrap"
        >
          Akzeptieren
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;