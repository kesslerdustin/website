"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "de";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

// Default translations
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.publications": "Publications",
    "nav.certifications": "Awards & Certificates",
    "nav.skills": "Skills",
    "nav.resume": "Resume",
    "nav.contact": "Contact",
    
    // Hero
    "hero.greeting": "Hi, I'm",
    "hero.specialization": "Master of Science specializing in Computer Science, AR/VR, AI, and Full Stack Development.",
    "hero.viewWork": "View My Work",
    "hero.viewResume": "View Resume",

    // Sections
    "section.publications": "Publications",
    "section.projects": "Featured Projects",
    "section.skills": "Core Skills",
    "section.certifications": "Awards & Certifications",
    
    // Publications
    "publications.explore": "Explore my research contributions on Google Scholar or browse the list below.",
    "publications.scholar": "View on Google Scholar",
    "publications.all": "View All Publications",

    // Projects
    "projects.description": "A selection of my work across different domains.",
    "projects.all": "View All Projects",
    "projects.category.all": "All",
    "projects.category.website": "Websites",
    "projects.category.frontend": "Frontend",
    "projects.category.app": "App Development",
    "projects.category.3d": "3D / AR / VR",
    "projects.visitWebsite": "Visit Website",

    // Skills
    "skills.title": "Technical Skills",
    "skills.description": "A comprehensive overview of my technical skills and expertise across different domains.",
    "skills.stats.years": "Years Experience",
    "skills.stats.projects": "Projects Completed",
    "skills.stats.publications": "Publications",
    "skills.stats.technologies": "Technologies",
    "skills.charts.experience": "Years of Experience by Domain",
    "skills.charts.projects": "Projects by Type",
    "skills.categories.title": "Skill Categories",
    "skills.all.title": "All Skills",
    "skills.viewAll": "View All Skills",
    
    // Certifications
    "certifications.description": "Professional achievements and recognitions in the field.",
    "certifications.viewCertificate": "View Certificate",

    // Contact
    "contact.title": "Get in Touch",
    "contact.description": "Feel free to reach out for collaborations, questions, or just to say hello! I'll try my best to get back to you soon.",
    "contact.email": "Email",
    "contact.location": "Location",
    "contact.sendMessage": "Send a Message",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.send": "Send Message",
    "contact.form.sending": "Sending...",
    "contact.errors.name": "Name is required",
    "contact.errors.emailRequired": "Email is required",
    "contact.errors.emailInvalid": "Invalid email format",
    "contact.errors.message": "Message is required",
    "contact.errors.submission": "Failed to submit form. Please try again.",
    "contact.success.title": "Message Sent!",
    "contact.success.message": "Thanks for contacting me. I'll get back to you soon!",
    "contact.success.newMessage": "Send Another Message",
  },
  de: {
    // Header
    "nav.home": "Start",
    "nav.projects": "Projekte",
    "nav.publications": "Publikationen",
    "nav.certifications": "Auszeichnungen & Zertifikate",
    "nav.skills": "Fähigkeiten",
    "nav.resume": "Lebenslauf",
    "nav.contact": "Kontakt",
    
    // Hero
    "hero.greeting": "Hallo, ich bin",
    "hero.specialization": "Master of Science mit Schwerpunkt Informatik, AR/VR, KI und Full-Stack-Entwicklung.",
    "hero.viewWork": "Meine Arbeit ansehen",
    "hero.viewResume": "Lebenslauf ansehen",

    // Sections
    "section.publications": "Publikationen",
    "section.projects": "Ausgewählte Projekte",
    "section.skills": "Kernkompetenzen",
    "section.certifications": "Auszeichnungen & Zertifizierungen",
    
    // Publications
    "publications.explore": "Entdecken Sie meine Forschungsbeiträge auf Google Scholar oder durchsuchen Sie die Liste unten.",
    "publications.scholar": "Auf Google Scholar ansehen",
    "publications.all": "Alle Publikationen ansehen",

    // Projects
    "projects.description": "Eine Auswahl meiner Arbeiten in verschiedenen Bereichen.",
    "projects.all": "Alle Projekte ansehen",
    "projects.category.all": "Alle",
    "projects.category.website": "Webseiten",
    "projects.category.frontend": "Frontend",
    "projects.category.app": "App-Entwicklung",
    "projects.category.3d": "3D / AR / VR",
    "projects.visitWebsite": "Webseite besuchen",

    // Skills
    "skills.title": "Technische Fähigkeiten",
    "skills.description": "Ein umfassender Überblick über meine technischen Fähigkeiten und Expertise in verschiedenen Bereichen.",
    "skills.stats.years": "Jahre Erfahrung",
    "skills.stats.projects": "Abgeschlossene Projekte",
    "skills.stats.publications": "Publikationen",
    "skills.stats.technologies": "Technologien",
    "skills.charts.experience": "Erfahrungsjahre nach Bereich",
    "skills.charts.projects": "Projekte nach Typ",
    "skills.categories.title": "Fähigkeitskategorien",
    "skills.all.title": "Alle Fähigkeiten",
    "skills.viewAll": "Alle Fähigkeiten anzeigen",
    
    // Certifications
    "certifications.description": "Berufliche Erfolge und Anerkennungen im Fachbereich.",
    "certifications.viewCertificate": "Zertifikat anzeigen",

    // Contact
    "contact.title": "Kontakt",
    "contact.description": "Kontaktieren Sie mich für Zusammenarbeit, Fragen oder einfach nur zum Hallo sagen! Ich werde mich schnellstmöglich bei Ihnen melden.",
    "contact.email": "E-Mail",
    "contact.location": "Standort",
    "contact.sendMessage": "Nachricht senden",
    "contact.form.name": "Name",
    "contact.form.email": "E-Mail",
    "contact.form.subject": "Betreff",
    "contact.form.message": "Nachricht",
    "contact.form.send": "Nachricht senden",
    "contact.form.sending": "Wird gesendet...",
    "contact.errors.name": "Name ist erforderlich",
    "contact.errors.emailRequired": "E-Mail ist erforderlich",
    "contact.errors.emailInvalid": "Ungültiges E-Mail-Format",
    "contact.errors.message": "Nachricht ist erforderlich",
    "contact.errors.submission": "Formular konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
    "contact.success.title": "Nachricht gesendet!",
    "contact.success.message": "Vielen Dank für Ihre Nachricht. Ich werde mich in Kürze bei Ihnen melden!",
    "contact.success.newMessage": "Weitere Nachricht senden",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Default to browser language or English
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    // Try to get language from localStorage on client side
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "de")) {
      setLanguage(savedLanguage);
    } else {
      // Or try to detect browser language
      const browserLanguage = navigator.language.substring(0, 2);
      if (browserLanguage === "de") {
        setLanguage("de");
      }
    }
  }, []);

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  // Translation function
  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        setLanguage: changeLanguage, 
        t 
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
} 