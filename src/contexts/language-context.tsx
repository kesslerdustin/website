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

    // Skills
    "skills.description": "Leveraging a diverse technical skill set to build innovative solutions.",
    "skills.all": "View All Skills",
    
    // Certifications
    "certifications.description": "Professional achievements and recognitions in the field.",
  },
  de: {
    // Header
    "nav.home": "Start",
    "nav.projects": "Projekte",
    "nav.publications": "Publikationen",
    "nav.certifications": "Auszeichnungen & Zertifikate",
    "nav.skills": "Fähigkeiten",
    "nav.resume": "Lebenslauf",
    
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

    // Skills
    "skills.description": "Einsatz vielfältiger technischer Fähigkeiten zur Entwicklung innovativer Lösungen.",
    "skills.all": "Alle Fähigkeiten ansehen",
    
    // Certifications
    "certifications.description": "Berufliche Erfolge und Anerkennungen im Fachbereich.",
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