"use client";

import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import { useLanguage } from "../contexts/language-context";

export function Footer() {
  const { t, language } = useLanguage();
  const isGerman = language === "de";
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-6 md:py-0 bg-card/50 border-t">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8">
          {/* Main Column */}
          <div className="md:col-span-1 space-y-3">
            <h3 className="text-lg font-semibold">Dustin Keßler</h3>
            <p className="text-sm text-muted-foreground">
              {isGerman ? "Full Stack Entwickler aus Dinslaken, NRW." : "Full Stack Developer from Dinslaken, NRW."}
            </p>
            <div className="text-sm text-muted-foreground">
              <p>{isGerman ? "Spezialisiert auf" : "Specialized in"} AR/VR, AI & Web.</p>
            </div>
          </div>
          
          {/* Main Navigation */}
          <div className="md:col-span-1 space-y-3">
            <h3 className="text-lg font-semibold">{isGerman ? "Navigation" : "Navigation"}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {isGerman ? "Startseite" : "Home"}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {isGerman ? "Über Mich" : "About Me"}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {isGerman ? "Projekte" : "Projects"}
                </Link>
              </li>
              <li>
                <Link href="/skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {isGerman ? "Fähigkeiten" : "Skills"}
                </Link>
              </li>
              <li>
                <Link href="/publications" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {isGerman ? "Publikationen" : "Publications"}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {isGerman ? "Kontakt" : "Contact"}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="md:col-span-1 space-y-3">
            <h3 className="text-lg font-semibold">{isGerman ? "Dienstleistungen" : "Services"}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/local-services#web-development" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {isGerman ? "Webentwicklung" : "Web Development"}
                </Link>
              </li>
              <li>
                <Link href="/local-services#app-development" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {isGerman ? "App-Entwicklung" : "App Development"}
                </Link>
              </li>
              <li>
                <Link href="/local-services#arvr-development" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {isGerman ? "AR/VR-Entwicklung" : "AR/VR Development"}
                </Link>
              </li>
              <li>
                <Link href="/local-services#ai-integration" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {isGerman ? "KI-Integration" : "AI Integration"}
                </Link>
              </li>
              <li>
                <Link href="/resume" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {isGerman ? "Lebenslauf" : "Resume"}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Locations */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold">{isGerman ? "Service-Gebiete" : "Service Areas"}</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                <strong>Dinslaken</strong> - {isGerman ? "Hauptsitz" : "Main Location"}
              </li>
              <li className="text-sm text-muted-foreground">Oberhausen</li>
              <li className="text-sm text-muted-foreground">Duisburg</li>
              <li className="text-sm text-muted-foreground">Essen</li>
              <li className="text-sm text-muted-foreground">Düsseldorf</li>
              <li className="text-sm text-muted-foreground">{isGerman ? "Gesamtes NRW" : "All of NRW"}</li>
              <li className="text-sm text-muted-foreground mt-2">
                <Link href="/contact" className="text-primary hover:underline">
                  {isGerman ? "Kontakt aufnehmen" : "Get in touch"}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center border-t mt-6 pt-6">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Dustin Keßler. {isGerman ? "Alle Rechte vorbehalten." : "All rights reserved."}
            </p>
            <Link href="/impressum" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Impressum
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link href="https://github.com/kesslerdustin" className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
              GitHub
            </Link>
            <Link href="https://de.linkedin.com/in/dustin-keßler-462567193" className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </Link>
            <Link href="https://scholar.google.com/citations?user=A0OdhrIAAAAJ&hl=en" className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
              Google Scholar
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 