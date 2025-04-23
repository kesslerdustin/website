"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink, FiDownload, FiMapPin, FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { useLanguage } from "../../contexts/language-context";

export default function AboutPage() {
  const { t, language } = useLanguage();
  const isGerman = language === "de";
  
  return (
    <div className="container py-12 md:py-20 px-4 md:px-6 max-w-5xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {isGerman ? "Über Mich" : "About Me"}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {isGerman 
              ? "Full Stack Entwickler aus Dinslaken, NRW mit Expertise in AR/VR, KI und moderner Webentwicklung."
              : "Full Stack Developer from Dinslaken, NRW with expertise in AR/VR, AI, and modern web development."}
          </p>
        </div>
        
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="md:w-1/3 flex justify-center">
            <motion.div
              className="relative w-64 h-64 overflow-hidden rounded-lg border-4 border-primary/20 shadow-xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src="/images/avatar.jpeg"
                alt="Dustin Keßler - Full Stack Developer"
                width={256}
                height={256}
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
          
          <div className="md:w-2/3">
            <motion.div
              className="bg-card border shadow-sm rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h2 className="text-2xl font-semibold">Dustin Keßler</h2>
                  <div className="flex items-center text-muted-foreground mt-1">
                    <FiMapPin className="mr-1" size={14} />
                    <span>Dinslaken, NRW, Germany</span>
                  </div>
                </div>
                <div className="flex space-x-3 mt-4 md:mt-0">
                  <a 
                    href="https://github.com/kesslerdustin" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="GitHub profile of Dustin Keßler"
                  >
                    <FiGithub size={20} />
                  </a>
                  <a 
                    href="https://de.linkedin.com/in/dustin-keßler-462567193" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="LinkedIn profile of Dustin Keßler"
                  >
                    <FiLinkedin size={20} />
                  </a>
                  <a 
                    href="mailto:duselkay@gmail.com" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Email Dustin Keßler"
                  >
                    <FiMail size={20} />
                  </a>
                </div>
              </div>
              
              <div className="space-y-4">
                <p>
                  {isGerman 
                    ? "Als Full Stack Entwickler mit Sitz in Dinslaken, NRW, kombiniere ich technisches Know-how mit kreativer Problemlösung, um digitale Lösungen zu schaffen, die einen echten Unterschied machen."
                    : "As a Full Stack Developer based in Dinslaken, NRW, I combine technical expertise with creative problem-solving to build digital solutions that make a real difference."}
                </p>
                <p>
                  {isGerman 
                    ? "Mit über 10 Jahren Erfahrung in der Softwareentwicklung habe ich mich auf moderne Webtechnologien, mobile App-Entwicklung, AR/VR-Anwendungen und KI-Integration spezialisiert. Ich bin besonders interessiert daran, Technologie zu nutzen, um innovative und benutzerfreundliche Erfahrungen zu schaffen."
                    : "With over 10 years of experience in software development, I've specialized in modern web technologies, mobile app development, AR/VR applications, and AI integration. I'm particularly passionate about using technology to create innovative and user-friendly experiences."}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="px-3 py-1 bg-primary/10 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-primary/10 rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-primary/10 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-primary/10 rounded-full text-sm">Unity</span>
                <span className="px-3 py-1 bg-primary/10 rounded-full text-sm">AI</span>
                <span className="px-3 py-1 bg-primary/10 rounded-full text-sm">AR/VR</span>
              </div>
              
              <div className="flex flex-wrap gap-3 mt-6">
                <Link 
                  href="/resume" 
                  className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm"
                >
                  <FiDownload className="mr-2" /> {isGerman ? "Lebenslauf" : "Resume"}
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-4 py-2 rounded-md border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <FiMail className="mr-2" /> {isGerman ? "Kontakt" : "Contact Me"}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Professional Journey */}
        <motion.div 
          className="bg-card border shadow-sm rounded-xl p-6 md:p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-6">
            {isGerman ? "Mein beruflicher Werdegang" : "My Professional Journey"}
          </h2>
          
          <div className="space-y-6">
            <p>
              {isGerman 
                ? "Meine Reise in der Technologiebranche begann mit einer Leidenschaft für Spieleentwicklung und interaktive Medien. Schon früh entwickelte ich Mods für Spiele wie Crysis, was mir einen tiefen Einblick in 3D-Entwicklung und Benutzerinteraktion gab."
                : "My journey in the technology industry began with a passion for game development and interactive media. Early on, I developed mods for games like Crysis, which gave me deep insights into 3D development and user interaction."}
            </p>
            
            <p>
              {isGerman
                ? "Nach meinem Studium an der Hochschule Ruhr West im Bereich Informatik habe ich mich auf die Entwicklung von Webanwendungen und mobilen Apps konzentriert, während ich meine Kenntnisse in AR/VR-Technologien vertiefte. Diese Kombination hat es mir ermöglicht, an diversen innovativen Projekten zu arbeiten und mein Wissen durch verschiedene wissenschaftliche Publikationen zu teilen."
                : "After studying Computer Science at Hochschule Ruhr West, I focused on developing web applications and mobile apps while deepening my knowledge in AR/VR technologies. This combination has allowed me to work on various innovative projects and share my knowledge through several scientific publications."}
            </p>
            
            <p>
              {isGerman
                ? "Aktuell bin ich als CTO und Full Stack Entwickler bei der Omnystate GmbH tätig, wo ich die technische Entwicklung und Innovation vorantreibe. Neben meiner Haupttätigkeit bin ich weiterhin an spannenden Projekten interessiert und stehe für neue Herausforderungen offen. Ich bin grundsätzlich weltweit erreichbar, biete Vor-Ort-Beratungen jedoch nur in NRW an."
                : "Currently, I serve as CTO and Full Stack Developer at Omnystate GmbH, where I drive technical development and innovation. Alongside my main role, I remain interested in exciting projects and am open to new challenges. While I'm available worldwide, I only offer on-site consultations within NRW."}
            </p>
          </div>
        </motion.div>
        
        {/* Local Services */}
        <motion.div 
          className="bg-card border shadow-sm rounded-xl p-6 md:p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6">
            {isGerman ? "Lokal in NRW verfügbar" : "Available Locally in NRW"}
          </h2>
          
          <div className="space-y-4">
            <p>
              {isGerman
                ? "Als in Dinslaken ansässiger Entwickler biete ich meine Dienstleistungen in der gesamten Region Nordrhein-Westfalen an. Für Kunden in Dinslaken, Oberhausen, Duisburg, Essen, Düsseldorf und Umgebung bin ich auch für persönliche Treffen und Vor-Ort-Beratungen verfügbar."
                : "As a developer based in Dinslaken, I offer my services throughout the North Rhine-Westphalia region. For clients in Dinslaken, Oberhausen, Duisburg, Essen, Düsseldorf, and surrounding areas, I'm also available for in-person meetings and on-site consultations."}
            </p>
            
            <p>
              {isGerman
                ? "Die lokale Präsenz ermöglicht mir eine engere Zusammenarbeit mit regionalen Unternehmen und ein besseres Verständnis ihrer spezifischen Anforderungen und Herausforderungen."
                : "Local presence allows me to collaborate more closely with regional businesses and better understand their specific requirements and challenges."}
            </p>
            
            <div className="mt-6">
              <Link 
                href="/local-services" 
                className="inline-flex items-center text-primary hover:underline"
              >
                {isGerman ? "Mehr über meine lokalen Dienstleistungen erfahren" : "Learn more about my local services"} <FiExternalLink className="ml-1" />
              </Link>
            </div>
          </div>
        </motion.div>
        
        {/* Call to Action */}
        <motion.div 
          className="bg-primary/5 rounded-xl p-6 md:p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4">
            {isGerman ? "Lassen Sie uns zusammenarbeiten" : "Let's Work Together"}
          </h2>
          
          <p className="max-w-2xl mx-auto mb-6">
            {isGerman
              ? "Egal, ob Sie eine Website, mobile App, AR/VR-Anwendung oder KI-Integration benötigen – ich freue mich darauf, Ihr Projekt zum Leben zu erwecken."
              : "Whether you need a website, mobile app, AR/VR application, or AI integration, I look forward to bringing your project to life."}
          </p>
          
          <Link 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm"
          >
            {isGerman ? "Kontakt aufnehmen" : "Get in Touch"} <FiExternalLink className="ml-2" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
} 