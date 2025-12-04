import { NavItem, Service, Testimonial, Job, SocialLink } from './types';

export const COMPANY_NAME = "HoloViperAgency";
export const FOUNDER = "Detlef Ritter";
export const FOUNDED_YEAR = 2025;
export const TAGLINE = "Ihre Agentur für künstliche Intelligenz, Automatisierung und Bildung. Wir gestalten die Zukunft heute.";

export const CONTACT_INFO = {
  address: "Fuchsgasse 60, 97496 Burgpreppach",
  mobile: "+49 173 5406175",
  phone: "+49 9534 1703399",
  email: "agentur@detlef-ritter.de",
  website: "https://detlef-ritter.de"
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "Instagram", url: "https://www.instagram.com/holoviperagency", iconName: "Instagram" },
  { platform: "Facebook", url: "https://www.facebook.com/profile.php?id=61583181315297", iconName: "Facebook" },
  { platform: "Website", url: "https://detlef-ritter.de", iconName: "Globe" }
];

export const NAV_ITEMS: NavItem[] = [
  { label: "Startseite", path: "/" },
  { label: "Leistungen", path: "/leistungen" },
  { label: "Kundenstimmen", path: "/kundenstimmen" },
  { label: "Jobangebote", path: "/jobs" },
];

export const SERVICES: Service[] = [
  {
    id: "ai-agents",
    title: "Maßgeschneiderte AI-Agenten",
    description: "Entwicklung intelligenter, autonomer Agenten zur Prozessoptimierung für Handwerksbetriebe und Einzelunternehmer.",
    targetAudience: "Handwerk, KMU, Solopreneure",
    benefits: ["24/7 Kundenkommunikation", "Automatisierte Terminbuchung", "Effizienzsteigerung bis zu 40%"],
    iconName: "Bot"
  },
  {
    id: "training",
    title: "KI-Schulungskurse",
    description: "Praxisorientierte Bildungsmodule für Schulen und Bildungseinrichtungen. Wir machen Schüler fit für die Zukunft.",
    targetAudience: "Schulen, Bildungsträger",
    benefits: ["Lehrplankonforme Inhalte", "Hands-on Workshops", "Zertifizierte Abschlüsse"],
    iconName: "GraduationCap"
  },
  {
    id: "workflow",
    title: "KI-Workflow Automation",
    description: "Analyse und Neugestaltung bestehender Geschäftsprozesse durch den Einsatz modernster KI-Tools.",
    targetAudience: "Unternehmen ab 5 Mitarbeitern",
    benefits: ["Fehlerreduktion", "Kostensenkung", "Skalierbare Prozesse"],
    iconName: "Workflow"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote: "Durch den AI-Agenten von HoloViper sparen wir täglich 2 Stunden bei der Auftragsannahme.",
    author: "M. Müller",
    role: "Inhaber",
    company: "Sanitär Müller",
    metrics: "+25% Umsatz im ersten Quartal"
  },
  {
    id: "t2",
    quote: "Endlich Schulungen, die Schüler wirklich begeistern und auf die Arbeitswelt vorbereiten.",
    author: "S. Weber",
    role: "Schulleiterin",
    company: "Berufsschule Nord",
    metrics: "Note 1,2 Bewertungsdurchschnitt"
  }
];

export const JOBS: Job[] = [
  {
    id: "j1",
    title: "AI Prompt Engineer (m/w/d)",
    type: "Vollzeit / Teilzeit",
    location: "Remote / Burgpreppach",
    description: "Entwicklung komplexer System-Prompts für unsere Business-Kunden."
  },
  {
    id: "j2",
    title: "Vertriebspartner B2B (m/w/d)",
    type: "Provision",
    location: "DACH-Region",
    description: "Akquise von Handwerksbetrieben und Bildungseinrichtungen."
  }
];

export const FAQ = [
  {
    question: "Für wen sind Ihre AI-Lösungen geeignet?",
    answer: "Unser Fokus liegt auf Handwerksbetrieben, Einzelunternehmern und Bildungseinrichtungen in der DACH-Region."
  },
  {
    question: "Wie lange dauert die Implementierung eines KI-Agenten?",
    answer: "Nach der Erstanalyse ist ein Basis-Agent in der Regel innerhalb von 5-10 Werktagen einsatzbereit."
  },
  {
    question: "Bieten Sie auch Vor-Ort-Schulungen an?",
    answer: "Ja, wir schulen sowohl remote als auch direkt in Ihrer Einrichtung in Deutschland, Österreich und der Schweiz."
  }
];
