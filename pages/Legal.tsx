import React from 'react';
import { useParams } from 'react-router-dom';
import { COMPANY_NAME, CONTACT_INFO, FOUNDER } from '../constants';

const LegalContent: React.FC = () => {
  const { type } = useParams();

  let title = "";
  let content = null;

  if (type === 'impressum') {
    title = "Impressum";
    content = (
      <>
        <h2 className="text-xl font-bold text-white mt-8 mb-4">Angaben gemäß § 5 TMG</h2>
        <p className="mb-4">
          {COMPANY_NAME}<br />
          Inhaber: {FOUNDER}<br />
          {CONTACT_INFO.address}
        </p>

        <h2 className="text-xl font-bold text-white mt-8 mb-4">Kontakt</h2>
        <p className="mb-4">
          Telefon: {CONTACT_INFO.phone}<br />
          Mobil: {CONTACT_INFO.mobile}<br />
          E-Mail: {CONTACT_INFO.email}
        </p>

        <h2 className="text-xl font-bold text-white mt-8 mb-4">Umsatzsteuer-ID</h2>
        <p className="mb-4">
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
          DE (Wird nachgereicht)
        </p>

        <h2 className="text-xl font-bold text-white mt-8 mb-4">Redaktionell verantwortlich</h2>
        <p className="mb-4">
          {FOUNDER}<br />
          {CONTACT_INFO.address}
        </p>
      </>
    );
  } else if (type === 'datenschutz') {
    title = "Datenschutzerklärung";
    content = (
      <>
        <h2 className="text-xl font-bold text-white mt-8 mb-4">1. Datenschutz auf einen Blick</h2>
        <p className="mb-4">
          <strong>Allgemeine Hinweise</strong><br />
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
        </p>
        <h2 className="text-xl font-bold text-white mt-8 mb-4">2. Hosting</h2>
        <p className="mb-4">
          Wir hosten die Inhalte unserer Website bei folgenden Anbietern: [Vercel/Github Pages/Wordpress].
        </p>
        <h2 className="text-xl font-bold text-white mt-8 mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
        <p className="mb-4">
          <strong>Datenschutz</strong><br />
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften.
        </p>
        <p>
          Verantwortliche Stelle ist:<br />
          {COMPANY_NAME}<br />
          {FOUNDER}<br />
          {CONTACT_INFO.address}
        </p>
      </>
    );
  } else {
    title = "Allgemeine Geschäftsbedingungen";
    content = (
      <>
        <h2 className="text-xl font-bold text-white mt-8 mb-4">§ 1 Geltungsbereich</h2>
        <p className="mb-4">
          Für die Geschäftsbeziehung zwischen {COMPANY_NAME} und dem Kunden gelten ausschließlich die nachfolgenden Allgemeinen Geschäftsbedingungen.
        </p>
        <h2 className="text-xl font-bold text-white mt-8 mb-4">§ 2 Vertragsgegenstand</h2>
        <p className="mb-4">
           Gegenstand des Vertrages ist die Erstellung von KI-Agenten sowie die Durchführung von Schulungen.
        </p>
      </>
    );
  }

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-300">
        <h1 className="text-4xl font-bold text-white mb-8">{title}</h1>
        <div className="prose prose-invert max-w-none">
          {content}
        </div>
      </div>
    </div>
  );
};

export default LegalContent;