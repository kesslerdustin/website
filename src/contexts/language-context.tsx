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
    "nav.localServices": "My Services",
    
    // Hero
    "hero.greeting": "Hi, I'm",
    "hero.specialization": "Master of Science specializing in Computer Science, AR/VR, AI, and Full Stack Development.",
    "hero.viewWork": "View My Work",
    "hero.viewResume": "View Resume",

    // About Me
    "about.title": "About Me",
    "about.content": "I'm Dustin Keßler, M.Sc. in Computer Science with a background in Human-Computer Interaction. I began doctoral studies but ultimately chose the path of entrepreneurship, becoming the CTO of Omnystate. I'm always open to exciting projects and new challenges. In my free time, I work with AI, photogrammetry, 3D creation (Blender, etc.), photography, videography, and drone flying. I love diving into new topics and, above all, solving problems.",
    "about.contactCTA": "Need help with a project? Let's talk!",

    // Sections
    "section.publications": "Publications",
    "section.projects": "Featured Projects",
    "section.skills": "Core Skills",
    "section.certifications": "Awards & Certifications",
    "section.education": "Education",
    "section.experience": "Professional Experience",
    
    // Publications
    "publications.explore": "Explore my research contributions on Google Scholar or browse the list below.",
    "publications.scholar": "View on Google Scholar",
    "publications.all": "View All Publications",
    "publications.citedBy": "Cited by:",
    "publications.none": "No publications listed.",
    "resume.subtitle": "Professional Experience & Qualifications",

    // Projects
    "projects.description": "A selection of my work across different domains.",
    "projects.all": "View All Projects",
    "projects.filter.domain.title": "Filter by Domain:",
    "projects.filter.category.title": "Filter by Category:",
    "projects.filter.domain.all": "All",
    "projects.filter.domain.website": "Website",
    "projects.filter.domain.frontend": "Frontend",
    "projects.filter.domain.backend": "Backend",
    "projects.filter.domain.app": "App",
    "projects.filter.domain.3d": "3D",
    "projects.filter.category.all": "All",
    "projects.filter.category.hobby": "Hobby",
    "projects.filter.category.professional": "Professional",
    "projects.filter.category.research": "Research",
    "projects.category.all": "All",
    "projects.category.hobby": "Hobby",
    "projects.category.professional": "Professional",
    "projects.category.research": "Research",
    "projects.visitWebsite": "Visit Website",
    "projects.sort.title": "Sort by Title",
    "projects.sort.timeline": "Sort by Timeline",
    "projects.yearLabel": "Year:",
    "projects.tagsLabel": "Tags:",
    "projects.categoryLabel": "Category:",
    "projects.statusLabel": "Status:",
    "projects.status.completed": "Completed",
    "projects.status.workInProgress": "Work in Progress",
    "projects.status.tbd": "TBD",
    "projects.noProjectsFound": "No projects found for this category.",
    "projects.gallery": "Gallery",

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
    "contact.phone": "Phone",
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

    // Common
    "common.close": "Close",

    // Project Descriptions
    "projects.jinrui.shortDesc": "Website project.",
    "projects.jinrui.longDesc": "Website for an indie manga project. Built from scratch with user management, payments, comments, and a manga reader. Features include user authentication, subscription management, and analytics tracking.",
    "projects.toeller.shortDesc": "Website for a local electrical engineering company specializing in residential and commercial installations.",
    "projects.toeller.longDesc": "A professional website for Töller & Steprath, a local electrical engineering company. The site features service information, contact details, and a portfolio of completed projects. Built with WordPress for easy content management, it includes responsive design, service pages, and a contact form for customer inquiries.",
    "projects.steinhauer.shortDesc": "Website for an engineering services company.",
    "projects.steinhauer.longDesc": "A comprehensive website for Steinhauer Engineering, featuring project management and mediation services. The site includes detailed service descriptions, project showcases, and client testimonials. Built with WordPress for easy content management, it offers a professional platform for engineering consultation and project coordination.",
    "projects.omnystatePlatform.shortDesc": "Digital building documentation platform with real-time data integration.",
    "projects.omnystatePlatform.longDesc": "As CTO, I lead the technical development of Omnystate's digital building documentation platform. The platform digitizes buildings and provides users with a comprehensive digital building file, real-time data, and advanced analytics. I oversee all technical processes, from innovation and creation to continuous improvement, ensuring seamless integration between frontend and backend systems while implementing robust user management features.",
    "projects.omnystateApp.shortDesc": "Mobile application development.",
    "projects.omnystateApp.longDesc": "Mobile application for iOS and Android that brings the Omnystate platform to users' mobile devices. The app provides access to digital building documentation, real-time data, and analytics on the go, ensuring users can manage their building information anytime, anywhere.",
    "projects.omnystateCollect.shortDesc": "Internal tool for collecting building data and technical building systems information.",
    "projects.omnystateCollect.longDesc": "A specialized mobile application designed for internal use in collecting and documenting building data. The app enables efficient on-site data collection for technical building systems, measurements, and building information. It streamlines the process of gathering accurate building data, ensuring comprehensive documentation of technical installations and building specifications.",
    "projects.protocolit.shortDesc": "AI-powered protocol generation app with JSON export capabilities.",
    "projects.protocolit.longDesc": "A versatile mobile application designed to generate detailed protocols for various use cases. The app features AI integration for smart protocol generation, JSON export functionality for data portability, and customizable templates. It served as the predecessor to the Omnycollect app, laying the foundation for more specialized building documentation tools. The app streamlines the process of creating, managing, and exporting professional protocols across different industries and use cases.",
    "projects.quiz.shortDesc": "Android quiz game with thousands of questions and multiple game modes.",
    "projects.quiz.longDesc": "My first mobile application, a comprehensive Android quiz game featuring thousands of questions across various categories. The app included multiple game modes such as single-player, cooperative play, and competitive challenges. Implemented features like global leaderboards, in-app purchases for additional content, and a robust question database. While the app is no longer available, it served as a valuable learning experience in mobile development, game design, and monetization strategies.",
    "projects.outdoorbible.shortDesc": "AI-powered outdoor survival companion app with species identification and interactive learning.",
    "projects.outdoorbible.longDesc": "A comprehensive mobile application that serves as an outdoor survival companion, combining AI-powered species identification with interactive learning features. The app allows users to capture and identify local flora and fauna, providing detailed information about species, their habitats, and survival tips. Features include an AI coach for personalized outdoor guidance, a community platform for sharing discoveries, and interactive elements like AI-generated survival scenarios and educational quizzes. The app aims to enhance outdoor experiences while promoting environmental awareness and survival skills.",
    "projects.memoria.shortDesc": "Innovative journaling and life-tracking app that creates your digital biography.",
    "projects.memoria.longDesc": "A comprehensive life documentation platform that combines journaling, milestone tracking, and memory preservation. The app intelligently organizes your life events, thoughts, and achievements to generate a personalized digital biography. Features include AI-assisted journaling, milestone tracking, photo and media integration, and collaborative memory sharing with friends and family. The platform aims to create a meaningful digital legacy while helping users reflect on their personal growth and life journey.",
    "projects.fpvr.shortDesc": "Immersive VR drone racing game with multiplayer support and various game modes.",
    "projects.fpvr.longDesc": "A comprehensive VR drone racing experience developed for Meta Quest 1/2, featuring multiplayer support, multiple game modes, and diverse racing environments. The game includes competitive racing modes, time trials, and free flight exploration across various detailed levels. Implemented using Unity and C#, the project showcases advanced VR controls, physics-based drone handling, and multiplayer networking. Features include customizable drones, leaderboards, and immersive first-person view racing mechanics.",
    "projects.nni1.shortDesc": "One of the most played Crysis mods, featured in PC Games magazine.",
    "projects.nni1.longDesc": "My first foray into game development and modding, Noname Island 1 became one of the most popular singleplayer modifications for Crysis. The project was featured in PC Games magazine and showcased my early passion for level design and game development. I handled all aspects of level design, creating an immersive tropical island environment that expanded upon Crysis's core gameplay mechanics. This experience laid the foundation for my future work in game development and 3D design.",
    "projects.nni2.shortDesc": "Second version of one of the most downloaded singleplayer mods for Crysis.",
    "projects.nni2.longDesc": "Building upon the success of the first Noname Island mod, this sequel became one of the most downloaded singleplayer modifications for Crysis. I handled all aspects of level design, creating an expanded and more detailed tropical island environment that pushed the boundaries of CryEngine's capabilities. The mod introduced new gameplay elements and challenges while maintaining the immersive atmosphere that made the original so popular.",
    "projects.hololensNav.shortDesc": "AR-based indoor navigation system for industrial environments with safety features and optimized workflow guidance.",
    "projects.hololensNav.longDesc": "A comprehensive AR navigation solution developed for Microsoft HoloLens, specifically designed for industrial environments. The system provides real-time indoor navigation with safety features including hazard zone visualization, optimal pathfinding around dangerous areas, and workflow optimization. Key features include dynamic route planning that considers safety protocols, visual warnings for restricted areas, and contextual information overlays for equipment and processes. The project focused on improving worker safety and efficiency in complex industrial settings through intuitive AR interfaces and spatial awareness.",
    "projects.vrSchool.shortDesc": "Immersive virtual campus with interactive lectures and educational simulations.",
    "projects.vrSchool.longDesc": "A comprehensive virtual learning environment that creates an immersive campus experience. The project focused on developing VR-specific educational tools that leverage the medium's unique capabilities, including interactive 3D model visualization, spatial learning experiences, and medical simulations. Key features included virtual lecture halls with interactive 3D models that students could manipulate while receiving auditory and visual information, simulations of various eye defects to help medical students understand vision impairments, and collaborative learning spaces. The system was designed to enhance understanding of complex subjects through spatial interaction and immersive visualization.",
    "projects.vrSolar.shortDesc": "Immersive VR simulation of Hochschule Ruhr West's solar installation with real-time energy data visualization.",
    "projects.vrSolar.longDesc": "A detailed VR replica of Hochschule Ruhr West's campus, featuring an accurate 3D model of the university's rooftop solar installation. The application integrates real-time weather data and solar energy production metrics to create an interactive learning environment. Users can explore the campus, examine the solar panels up close, and observe how different weather conditions affect energy production. The simulation includes detailed visualizations of energy flow, panel efficiency metrics, and historical data comparisons. This educational tool helps students understand photovoltaic technology and renewable energy systems through immersive, data-driven experiences.",
    "projects.masterThesisAR.shortDesc": "Comparative study on learning PC assembly using AR HoloLens versus traditional manual.",
    "projects.masterThesisAR.longDesc": "Master's thesis investigating the learning success of PC assembly using AR HoloLens compared to traditional methods. The study analyzes both the assembly process and the learning of individual PC components. The AR solution offers interactive instructions, 3D visualizations of components, and real-time feedback during assembly. The results show significant differences in learning efficiency, error rates, and user satisfaction between the two learning methods.",
    "projects.vrFraese.shortDesc": "Immersive VR simulation of a CNC milling machine with interactive operation and material processing capabilities.",
    "projects.vrFraese.longDesc": "A detailed VR simulation of a CNC milling machine that provides an authentic experience of machine operation and material processing. The application allows users to interact with the machine's controls, set up workpieces, and perform milling operations on various materials. Users can select different tools, adjust cutting parameters, and observe the milling process in real-time. The simulation includes realistic physics for material removal, tool wear visualization, and safety features. This educational tool helps students and professionals understand CNC milling operations, tool selection, and process optimization in a risk-free virtual environment.",

    // Local Services
    "localServices.title": "Professional IT & Development Services",
    "localServices.description": "Remote development and IT services available worldwide with expertise in web development, app programming, AR/VR, and AI integration.",
    "localServices.myServices": "My Services",
    "localServices.webDev.title": "Web Development",
    "localServices.webDev.description": "Modern, responsive websites and web applications focused on user-friendliness, performance, and SEO.",
    "localServices.webDev.feature1": "Responsive Design",
    "localServices.webDev.feature2": "SEO Optimization",
    "localServices.webDev.feature3": "Content Management Systems",
    "localServices.webDev.feature4": "E-Commerce Solutions",
    "localServices.appDev.title": "App Development",
    "localServices.appDev.description": "Native and Cross-Platform Mobile Apps for iOS and Android with modern technologies.",
    "localServices.appDev.feature1": "iOS & Android Apps",
    "localServices.appDev.feature2": "React Native",
    "localServices.appDev.feature3": "UI/UX Design",
    "localServices.appDev.feature4": "App Store Publication",
    "localServices.arvrDev.title": "AR/VR Development",
    "localServices.arvrDev.description": "Development of innovative Augmented and Virtual Reality Applications for various platforms.",
    "localServices.arvrDev.feature3": "360° Visualizations",
    "localServices.arvrDev.feature4": "Interactive 3D Models",
    "localServices.aiDev.title": "AI Integration",
    "localServices.aiDev.description": "Integration of Artificial Intelligence and Machine Learning into existing or new applications.",
    "localServices.aiDev.feature1": "Chatbots & Assistants",
    "localServices.aiDev.feature2": "Data Analysis",
    "localServices.aiDev.feature3": "Automation",
    "localServices.aiDev.feature4": "AI-powered Functions",
    "localServices.serviceAreas": "Working Globally",
    "localServices.remoteWork": "I provide remote services for clients worldwide, with the flexibility to work across different time zones and collaborate seamlessly with international teams.",
    "localServices.readyProject": "Ready for Your Next Project?",
    "localServices.contactMe": "Contact Me",

    // Time translations
    "time.years": "Years",
    "time.year": "Year",
    "time.months": "Months",
    "time.month": "Month",
    "time.present": "Present",
    "time.duration.years": "Years",
    "time.duration.months": "Months",
    "time.cited.by": "Cited by:",
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
    "nav.localServices": "Meine Services",
    
    // Hero
    "hero.greeting": "Hallo, ich bin",
    "hero.specialization": "Master of Science mit Schwerpunkt Informatik, AR/VR, KI und Full-Stack-Entwicklung.",
    "hero.viewWork": "Meine Arbeit ansehen",
    "hero.viewResume": "Lebenslauf ansehen",

    // About Me
    "about.title": "Über mich",
    "about.content": "Ich bin Dustin Keßler, M.Sc. Ich habe Mensch-Technik-Interaktion studiert und anschließend einen Master in Informatik absolviert. Ich begann eine Promotion, entschied mich aber für den Weg in die Startup-Gründung und bin jetzt CTO bei Omnystate. Ich bin immer offen für spannende Projekte. In meiner Freizeit beschäftige ich mich mit KI, Photogrammetrie, 3D-Erstellung (Blender, etc.), Foto- und Videografie und fliege Drohnen. Ich liebe es, mich in neue Themen einzuarbeiten und ganz besonders, Probleme zu lösen.",
    "about.contactCTA": "Brauchen Sie Hilfe bei einem Projekt? Lassen Sie uns sprechen!",

    // Sections
    "section.publications": "Publikationen",
    "section.projects": "Ausgewählte Projekte",
    "section.skills": "Kernkompetenzen",
    "section.certifications": "Auszeichnungen & Zertifizierungen",
    "section.education": "Bildung",
    "section.experience": "Berufserfahrung",
    
    // Publications
    "publications.explore": "Entdecken Sie meine Forschungsbeiträge auf Google Scholar oder durchsuchen Sie die Liste unten.",
    "publications.scholar": "Auf Google Scholar ansehen",
    "publications.all": "Alle Publikationen ansehen",
    "publications.citedBy": "Zitiert von:",
    "publications.none": "Keine Publikationen aufgelistet.",
    "resume.subtitle": "Berufserfahrung & Qualifikationen",

    // Projects
    "projects.description": "Eine Auswahl meiner Arbeiten in verschiedenen Bereichen.",
    "projects.all": "Alle Projekte ansehen",
    "projects.filter.domain.title": "Nach Bereich filtern:",
    "projects.filter.category.title": "Nach Kategorie filtern:",
    "projects.filter.domain.all": "Alle",
    "projects.filter.domain.website": "Webseite",
    "projects.filter.domain.frontend": "Frontend",
    "projects.filter.domain.backend": "Backend",
    "projects.filter.domain.app": "App",
    "projects.filter.domain.3d": "3D",
    "projects.filter.category.all": "Alle",
    "projects.filter.category.hobby": "Hobby",
    "projects.filter.category.professional": "Professionell",
    "projects.filter.category.research": "Forschung",
    "projects.category.all": "Alle",
    "projects.category.hobby": "Hobby",
    "projects.category.professional": "Professionell",
    "projects.category.research": "Forschung",
    "projects.visitWebsite": "Webseite besuchen",
    "projects.sort.title": "Nach Titel sortieren",
    "projects.sort.timeline": "Nach Zeitachse sortieren",
    "projects.yearLabel": "Jahr:",
    "projects.tagsLabel": "Schlagwörter:",
    "projects.categoryLabel": "Kategorie:",
    "projects.statusLabel": "Status:",
    "projects.status.completed": "Abgeschlossen",
    "projects.status.workInProgress": "In Bearbeitung",
    "projects.status.tbd": "TBD",
    "projects.noProjectsFound": "Keine Projekte für diese Kategorie gefunden.",
    "projects.gallery": "Galerie",

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
    "contact.phone": "Telefon",
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

    // Common
    "common.close": "Schließen",

    // Project Descriptions
    "projects.jinrui.shortDesc": "Webseiten-Projekt.",
    "projects.jinrui.longDesc": "Webseite für ein Indie-Manga-Projekt. Von Grund auf neu erstellt mit Benutzerverwaltung, Zahlungen, Kommentaren und einem Manga-Reader. Funktionen umfassen Benutzerauthentifizierung, Abonnementverwaltung und Analytics-Tracking.",
    "projects.toeller.shortDesc": "Webseite für ein lokales Elektrotechnik-Unternehmen, spezialisiert auf Wohn- und Gewerbeinstallationen.",
    "projects.toeller.longDesc": "Eine professionelle Webseite für Töller & Steprath, ein lokales Elektrotechnik-Unternehmen. Die Seite bietet Serviceinformationen, Kontaktdaten und ein Portfolio abgeschlossener Projekte. Erstellt mit WordPress für einfache Inhaltsverwaltung, beinhaltet responsives Design, Leistungsseiten und ein Kontaktformular für Kundenanfragen.",
    "projects.steinhauer.shortDesc": "Webseite für ein Ingenieurdienstleistungsunternehmen.",
    "projects.steinhauer.longDesc": "Eine umfassende Webseite für Steinhauer Engineering, die Projektmanagement- und Vermittlungsdienste anbietet. Die Seite enthält detaillierte Leistungsbeschreibungen, Projektpräsentationen und Kundenreferenzen. Erstellt mit WordPress für einfache Inhaltsverwaltung, bietet sie eine professionelle Plattform für Ingenieurberatung und Projektkoordination.",
    "projects.omnystatePlatform.shortDesc": "Digitale Gebäudedokumentationsplattform mit Echtzeit-Datenintegration.",
    "projects.omnystatePlatform.longDesc": "Als CTO leite ich die technische Entwicklung der digitalen Gebäudedokumentationsplattform von Omnystate. Die Plattform digitalisiert Gebäude und bietet Nutzern eine umfassende digitale Gebäudeakte, Echtzeitdaten und erweiterte Analysen. Ich überwache alle technischen Prozesse, von Innovation und Erstellung bis zur kontinuierlichen Verbesserung, stelle die nahtlose Integration zwischen Frontend- und Backend-Systemen sicher und implementiere robuste Benutzerverwaltungsfunktionen.",
    "projects.omnystateApp.shortDesc": "Mobile Anwendungsentwicklung.",
    "projects.omnystateApp.longDesc": "Mobile Anwendung für iOS und Android, die die Omnystate-Plattform auf die Mobilgeräte der Nutzer bringt. Die App bietet Zugriff auf digitale Gebäudedokumentation, Echtzeitdaten und Analysen unterwegs, sodass Nutzer ihre Gebäudeinformationen jederzeit und überall verwalten können.",
    "projects.omnystateCollect.shortDesc": "Internes Werkzeug zur Erfassung von Gebäudedaten und Informationen über technische Gebäudesysteme.",
    "projects.omnystateCollect.longDesc": "Eine spezialisierte mobile Anwendung für den internen Gebrauch zur Erfassung und Dokumentation von Gebäudedaten. Die App ermöglicht eine effiziente Datenerfassung vor Ort für technische Gebäudesysteme, Messungen und Gebäudeinformationen. Sie optimiert den Prozess der Erfassung genauer Gebäudedaten und gewährleistet eine umfassende Dokumentation technischer Installationen und Gebäudespezifikationen.",
    "projects.protocolit.shortDesc": "KI-gestützte Protokollgenerierungs-App mit JSON-Exportfunktionen.",
    "projects.protocolit.longDesc": "Eine vielseitige mobile Anwendung zur Erstellung detaillierter Protokolle für verschiedene Anwendungsfälle. Die App bietet KI-Integration für intelligente Protokollgenerierung, JSON-Exportfunktionalität für Datenübertragbarkeit und anpassbare Vorlagen. Sie diente als Vorgänger der Omnycollect-App und legte den Grundstein für spezialisiertere Gebäudedokumentationswerkzeuge. Die App optimiert den Prozess der Erstellung, Verwaltung und des Exports professioneller Protokolle über verschiedene Branchen und Anwendungsfälle hinweg.",
    "projects.quiz.shortDesc": "Android-Quizspiel mit Tausenden von Fragen und mehreren Spielmodi.",
    "projects.quiz.longDesc": "Meine erste mobile Anwendung, ein umfassendes Android-Quizspiel mit Tausenden von Fragen in verschiedenen Kategorien. Die App beinhaltete mehrere Spielmodi wie Einzelspieler, Koop-Spiel und Wettbewerbsherausforderungen. Implementierte Funktionen wie globale Bestenlisten, In-App-Käufe für zusätzliche Inhalte und eine robuste Fragendatenbank. Obwohl die App nicht mehr verfügbar ist, diente sie als wertvolle Lernerfahrung in der mobilen Entwicklung, im Spieldesign und bei Monetarisierungsstrategien.",
    "projects.outdoorbible.shortDesc": "KI-gestützte Outdoor-Survival-Begleiter-App mit Artenerkennung und interaktivem Lernen.",
    "projects.outdoorbible.longDesc": "Eine umfassende mobile Anwendung, die als Outdoor-Survival-Begleiter dient und KI-gestützte Artenerkennung mit interaktiven Lernfunktionen kombiniert. Die App ermöglicht es Benutzern, lokale Flora und Fauna zu erfassen und zu identifizieren, und liefert detaillierte Informationen über Arten, ihre Lebensräume und Überlebenstipps. Zu den Funktionen gehören ein KI-Coach für personalisierte Outdoor-Anleitungen, eine Community-Plattform zum Teilen von Entdeckungen und interaktive Elemente wie KI-generierte Überlebensszenarien und Bildungsquizze. Die App zielt darauf ab, Outdoor-Erlebnisse zu verbessern und gleichzeitig das Umweltbewusstsein und Überlebensfähigkeiten zu fördern.",
    "projects.memoria.shortDesc": "Innovative Journaling- und Life-Tracking-App, die Ihre digitale Biografie erstellt.",
    "projects.memoria.longDesc": "Eine umfassende Plattform zur Lebensdokumentation, die Journaling, Meilenstein-Tracking und Erinnerungsbewahrung kombiniert. Die App organisiert intelligent Ihre Lebensereignisse, Gedanken und Erfolge, um eine personalisierte digitale Biografie zu erstellen. Zu den Funktionen gehören KI-unterstütztes Journaling, Meilenstein-Tracking, Foto- und Medienintegration sowie kollaboratives Teilen von Erinnerungen mit Freunden und Familie. Die Plattform zielt darauf ab, ein bedeutungsvolles digitales Erbe zu schaffen und Nutzern dabei zu helfen, über ihr persönliches Wachstum und ihren Lebensweg nachzudenken.",
    "projects.fpvr.shortDesc": "Immersives VR-Drohnenrennspiel mit Multiplayer-Unterstützung und verschiedenen Spielmodi.",
    "projects.fpvr.longDesc": "Ein umfassendes VR-Drohnenrennerlebnis, entwickelt für Meta Quest 1/2, mit Multiplayer-Unterstützung, mehreren Spielmodi und vielfältigen Rennumgebungen. Das Spiel umfasst Wettbewerbsrennmodi, Zeitfahren und freie Flugerkundung über verschiedene detaillierte Level. Implementiert mit Unity und C#, zeigt das Projekt fortschrittliche VR-Steuerung, physikbasiertes Drohnenhandling und Multiplayer-Networking. Zu den Funktionen gehören anpassbare Drohnen, Bestenlisten und immersive Ich-Perspektive-Rennmechaniken.",
    "projects.nni1.shortDesc": "Einer der meistgespielten Crysis-Mods, vorgestellt im PC Games Magazin.",
    "projects.nni1.longDesc": "Mein erster Ausflug in die Spieleentwicklung und das Modding, Noname Island 1 wurde zu einer der beliebtesten Einzelspieler-Modifikationen für Crysis. Das Projekt wurde im PC Games Magazin vorgestellt und zeigte meine frühe Leidenschaft für Leveldesign und Spieleentwicklung. Ich übernahm alle Aspekte des Leveldesigns und schuf eine immersive tropische Inselumgebung, die die Kernspielmechanik von Crysis erweiterte. Diese Erfahrung legte den Grundstein für meine zukünftige Arbeit in der Spieleentwicklung und im 3D-Design.",
    "projects.nni2.shortDesc": "Zweite Version eines der am häufigsten heruntergeladenen Einzelspieler-Mods für Crysis.",
    "projects.nni2.longDesc": "Aufbauend auf dem Erfolg des ersten Noname Island-Mods wurde diese Fortsetzung zu einer der am häufigsten heruntergeladenen Einzelspieler-Modifikationen für Crysis. Ich übernahm alle Aspekte des Leveldesigns und schuf eine erweiterte und detailliertere tropische Inselumgebung, die die Grenzen der CryEngine-Fähigkeiten ausreizte. Der Mod führte neue Gameplay-Elemente und Herausforderungen ein, während die immersive Atmosphäre erhalten blieb, die das Original so beliebt machte.",
    "projects.hololensNav.shortDesc": "AR-basiertes Indoor-Navigationssystem für Industrieumgebungen mit Sicherheitsfunktionen und optimierter Workflow-Führung.",
    "projects.hololensNav.longDesc": "Eine umfassende AR-Navigationslösung, entwickelt für Microsoft HoloLens, speziell für Industrieumgebungen konzipiert. Das System bietet Echtzeit-Indoor-Navigation mit Sicherheitsfunktionen wie Gefahrenzonenvisualisierung, optimale Wegfindung um gefährliche Bereiche und Workflow-Optimierung. Zu den Hauptmerkmalen gehören eine dynamische Routenplanung unter Berücksichtigung von Sicherheitsprotokollen, visuelle Warnungen für Sperrbereiche und kontextbezogene Informationsüberlagerungen für Geräte und Prozesse. Das Projekt zielte darauf ab, die Arbeitssicherheit und Effizienz in komplexen Industrieanlagen durch intuitive AR-Schnittstellen und räumliches Bewusstsein zu verbessern.",
    "projects.vrSchool.shortDesc": "Immersiver virtueller Campus mit interaktiven Vorlesungen und Bildungssimulationen.",
    "projects.vrSchool.longDesc": "Eine umfassende virtuelle Lernumgebung, die ein immersives Campus-Erlebnis schafft. Das Projekt konzentrierte sich auf die Entwicklung VR-spezifischer Bildungswerkzeuge, die die einzigartigen Fähigkeiten des Mediums nutzen, einschließlich interaktiver 3D-Modellvisualisierung, räumlicher Lernerfahrungen und medizinischer Simulationen. Zu den Hauptmerkmalen gehörten virtuelle Hörsäle mit interaktiven 3D-Modellen, die Studenten während des Erhalts auditiver und visueller Informationen manipulieren konnten, Simulationen verschiedener Sehfehler, um Medizinstudenten das Verständnis von Sehstörungen zu erleichtern, und kollaborative Lernräume. Das System wurde entwickelt, um das Verständnis komplexer Themen durch räumliche Interaktion und immersive Visualisierung zu verbessern.",
    "projects.vrSolar.shortDesc": "Immersive VR-Simulation der Solaranlage der Hochschule Ruhr West mit Echtzeit-Energiedatenvisualisierung.",
    "projects.vrSolar.longDesc": "Eine detaillierte VR-Nachbildung des Campus der Hochschule Ruhr West mit einem genauen 3D-Modell der Dachanlage für Solarenergie. Die Anwendung integriert Echtzeit-Wetterdaten und Solarenergieproduktionsmetriken, um eine interaktive Lernumgebung zu schaffen. Benutzer können den Campus erkunden, die Solarmodule aus nächster Nähe betrachten und beobachten, wie unterschiedliche Wetterbedingungen die Energieproduktion beeinflussen. Die Simulation umfasst detaillierte Visualisierungen des Energieflusses, der Moduleffizienzmetriken und historischer Datenvergleiche. Dieses Bildungswerkzeug hilft Studenten, Photovoltaik-Technologie und erneuerbare Energiesysteme durch immersive, datengesteuerte Erfahrungen zu verstehen.",
    "projects.masterThesisAR.shortDesc": "Vergleichsstudie zum Lernen des PC-Zusammenbaus mittels AR-HoloLens versus traditionellem Handbuch.",
    "projects.masterThesisAR.longDesc": "Masterarbeit, die den Lernerfolg beim Zusammenbau eines PCs mittels AR-HoloLens im Vergleich zu traditionellen Methoden untersucht. Die Studie analysiert sowohl den Prozess des Zusammenbaus als auch das Erlernen der einzelnen PC-Komponenten. Die AR-Lösung bietet interaktive Anleitungen, 3D-Visualisierungen der Komponenten und Echtzeit-Feedback während des Aufbaus. Die Ergebnisse zeigen signifikante Unterschiede in Lerneffizienz, Fehlerquote und Benutzerzufriedenheit zwischen den beiden Lernmethoden.",
    "projects.vrFraese.shortDesc": "Immersive VR-Simulation einer CNC-Fräsmaschine mit interaktiver Bedienung und Materialbearbeitungsmöglichkeiten.",
    "projects.vrFraese.longDesc": "Eine detaillierte VR-Simulation einer CNC-Fräsmaschine, die ein authentisches Erlebnis der Maschinenbedienung und Materialbearbeitung bietet. Die Anwendung ermöglicht es Benutzern, mit den Bedienelementen der Maschine zu interagieren, Werkstücke einzurichten und Fräsvorgänge an verschiedenen Materialien durchzuführen. Benutzer können verschiedene Werkzeuge auswählen, Schnittparameter anpassen und den Fräsprozess in Echtzeit beobachten. Die Simulation umfasst realistische Physik für Materialabtrag, Werkzeugverschleißvisualisierung und Sicherheitsfunktionen. Dieses Bildungswerkzeug hilft Studenten und Fachleuten, CNC-Fräsvorgänge, Werkzeugauswahl und Prozessoptimierung in einer risikofreien virtuellen Umgebung zu verstehen.",

    // Local Services
    "localServices.title": "Professionelle IT & Entwicklungsdienstleistungen",
    "localServices.description": "Remote-Entwicklung und IT-Dienstleistungen weltweit verfügbar mit Expertise in Webentwicklung, App-Programmierung, AR/VR und KI-Integration.",
    "localServices.myServices": "Meine Services",
    "localServices.webDev.title": "Webentwicklung",
    "localServices.webDev.description": "Moderne, responsive Websites und Web-Anwendungen mit Fokus auf Benutzerfreundlichkeit, Performance und SEO.",
    "localServices.webDev.feature1": "Responsive Design",
    "localServices.webDev.feature2": "SEO-Optimierung",
    "localServices.webDev.feature3": "Content Management Systeme",
    "localServices.webDev.feature4": "E-Commerce Lösungen",
    "localServices.appDev.title": "App-Entwicklung",
    "localServices.appDev.description": "Native und Cross-Platform Mobile-Apps für iOS und Android mit modernen Technologien.",
    "localServices.appDev.feature1": "iOS & Android Apps",
    "localServices.appDev.feature2": "React Native",
    "localServices.appDev.feature3": "UI/UX Design",
    "localServices.appDev.feature4": "App Store Veröffentlichung",
    "localServices.arvrDev.title": "AR/VR Entwicklung",
    "localServices.arvrDev.description": "Entwicklung innovativer Augmented und Virtual Reality Anwendungen für verschiedene Plattformen.",
    "localServices.arvrDev.feature3": "360° Visualisierungen",
    "localServices.arvrDev.feature4": "Interaktive 3D-Modelle",
    "localServices.aiDev.title": "KI-Integration",
    "localServices.aiDev.description": "Integration von künstlicher Intelligenz und maschinellem Lernen in bestehende oder neue Anwendungen.",
    "localServices.aiDev.feature1": "Chatbots & Assistenten",
    "localServices.aiDev.feature2": "Datenanalyse",
    "localServices.aiDev.feature3": "Automatisierung",
    "localServices.aiDev.feature4": "KI-gestützte Funktionen",
    "localServices.serviceAreas": "Weltweit tätig",
    "localServices.remoteWork": "Ich biete Remote-Dienstleistungen für Kunden weltweit, mit der Flexibilität, in verschiedenen Zeitzonen zu arbeiten und nahtlos mit internationalen Teams zusammenzuarbeiten.",
    "localServices.readyProject": "Bereit für Ihr nächstes Projekt?",
    "localServices.contactMe": "Kontaktieren Sie mich",

    // Time translations
    "time.years": "Jahre",
    "time.year": "Jahr",
    "time.months": "Monate",
    "time.month": "Monat",
    "time.present": "Heute",
    "time.duration.years": "Jahre",
    "time.duration.months": "Monate",
    "time.cited.by": "Zitiert von:",

    // Resume date translations
    "date.jan": "Jan",
    "date.feb": "Feb", 
    "date.mar": "Mär",
    "date.apr": "Apr",
    "date.may": "Mai",
    "date.jun": "Jun",
    "date.jul": "Jul",
    "date.aug": "Aug", 
    "date.sep": "Sep",
    "date.oct": "Okt",
    "date.nov": "Nov",
    "date.dec": "Dez",
    "date.january": "Januar",
    "date.february": "Februar",
    "date.march": "März",
    "date.april": "April",
    "date.may.full": "Mai",
    "date.june": "Juni",
    "date.july": "Juli",
    "date.august": "August",
    "date.september": "September", 
    "date.october": "Oktober",
    "date.november": "November",
    "date.december": "Dezember",
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