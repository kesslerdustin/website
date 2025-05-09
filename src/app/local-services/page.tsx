"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "../../contexts/language-context";
import { FiCheckCircle, FiArrowRight, FiGlobe, FiClock, FiMessageSquare, FiCreditCard, FiUsers } from "react-icons/fi";

export default function LocalServicesPage() {
  const { t, language } = useLanguage();
  const isGerman = language === "de";
  
  // Add JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": isGerman ? "Weltweite IT & Entwicklungsdienstleistungen" : "Worldwide IT & Development Services",
    "description": isGerman 
      ? "Professionelle IT-Dienstleistungen remote verfügbar weltweit. Spezialisiert auf Webentwicklung, App-Programmierung, AR/VR und KI-Lösungen mit internationaler Reichweite." 
      : "Professional IT services available remotely worldwide. Expert in web development, app programming, AR/VR and AI solutions with international reach.",
    "provider": {
      "@type": "Person",
      "name": "Dustin Keßler",
      "url": "https://dustinkessler.de"
    },
    "areaServed": {
      "@type": "GeoShape",
      "name": isGerman ? "Weltweit und Deutschland (insbesondere NRW)" : "Worldwide and Germany (especially North Rhine-Westphalia)"
    },
    "availableLanguage": ["en", "de"],
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "areaServed": "Worldwide"
    },
    "serviceType": ["Web Development", "App Development", "AR/VR Development", "AI Integration"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": isGerman ? "IT-Dienstleistungskatalog" : "IT Services Catalog",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": isGerman ? "Webentwicklung" : "Web Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": isGerman ? "App-Entwicklung" : "App Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": isGerman ? "AR/VR-Entwicklung" : "AR/VR Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": isGerman ? "KI-Integration" : "AI Integration"
          }
        }
      ]
    }
  };
  
  return (
    <div className="container py-12 md:py-20 px-4 md:px-6 max-w-5xl mx-auto">
      {/* Add the JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {t("localServices.title")}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("localServices.description")}
          </p>
          <div className="flex items-center justify-center mt-4 text-sm text-primary font-medium">
            <FiGlobe className="mr-2" />
            <span>{isGerman ? "Remote & weltweit verfügbar" : "Available remotely & worldwide"}</span>
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            <span className="opacity-0 absolute">{/* Hidden for SEO */}
              Dinslaken, Oberhausen, Duisburg, Essen, Düsseldorf, NRW, Wesel, Voerde, Deutschland, Germany, Global, Remote, Worldwide
            </span>
          </div>
        </div>
        
        <div className="bg-card border shadow-sm rounded-xl p-6 md:p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            {t("localServices.myServices")}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div id="web-development">
              <ServiceCard 
                title={t("localServices.webDev.title")}
                description={t("localServices.webDev.description")}
                features={[
                  t("localServices.webDev.feature1"),
                  t("localServices.webDev.feature2"),
                  t("localServices.webDev.feature3"),
                  t("localServices.webDev.feature4")
                ]}
              />
            </div>
            
            <div id="app-development">
              <ServiceCard 
                title={t("localServices.appDev.title")}
                description={t("localServices.appDev.description")}
                features={[
                  t("localServices.appDev.feature1"),
                  t("localServices.appDev.feature2"),
                  t("localServices.appDev.feature3"),
                  t("localServices.appDev.feature4")
                ]}
              />
            </div>
            
            <div id="arvr-development">
              <ServiceCard 
                title={t("localServices.arvrDev.title")}
                description={t("localServices.arvrDev.description")}
                features={[
                  "Unity 3D",
                  "Unreal Engine",
                  t("localServices.arvrDev.feature3"),
                  t("localServices.arvrDev.feature4")
                ]}
              />
            </div>
            
            <div id="ai-integration">
              <ServiceCard 
                title={t("localServices.aiDev.title")}
                description={t("localServices.aiDev.description")}
                features={[
                  t("localServices.aiDev.feature1"),
                  t("localServices.aiDev.feature2"),
                  t("localServices.aiDev.feature3"),
                  t("localServices.aiDev.feature4")
                ]}
              />
            </div>
          </div>
        </div>
        
        <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 md:p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            {t("localServices.global.title")}
          </h2>
          
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
            {t("localServices.global.description")}
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <GlobalFeatureCard 
              icon={<FiClock className="h-6 w-6 text-primary" />}
              title={t("localServices.global.feature1")}
            />
            <GlobalFeatureCard 
              icon={<FiMessageSquare className="h-6 w-6 text-primary" />}
              title={t("localServices.global.feature2")}
            />
            <GlobalFeatureCard 
              icon={<FiCreditCard className="h-6 w-6 text-primary" />}
              title={t("localServices.global.feature3")}
            />
            <GlobalFeatureCard 
              icon={<FiUsers className="h-6 w-6 text-primary" />}
              title={t("localServices.global.feature4")}
            />
          </div>
        </div>
        
        <div className="bg-card border shadow-sm rounded-xl p-6 md:p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            {t("localServices.serviceAreas")}
          </h2>
          
          <div className="flex justify-center mb-6">
            <div className="max-w-lg text-center">
              <FiGlobe className="text-primary mx-auto mb-4 h-12 w-12" />
              <p className="text-muted-foreground">
                {t("localServices.remoteWork")}
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              {isGerman ? "Lokale Kunden: " : "Local clients: "}
              <span className="font-medium">NRW - Dinslaken, Duisburg, Oberhausen, Essen, Düsseldorf, Wesel, Voerde</span>
            </p>
            <p className="text-sm text-muted-foreground">
              {isGerman ? "Nationale Kunden: " : "National clients: "}
              <span className="font-medium">{isGerman ? "Deutschland" : "Germany"}</span>
            </p>
            <p className="text-sm text-primary font-medium">
              {isGerman ? "Internationale Kunden: " : "International clients: "}
              <span className="font-bold">{isGerman ? "Weltweit" : "Worldwide"}</span> 🌎
            </p>
          </div>
        </div>
        
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            {t("localServices.readyProject")}
          </h2>
          
          <Link 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm"
          >
            {t("localServices.contactMe")} <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
}

function ServiceCard({ title, description, features }: ServiceCardProps) {
  return (
    <motion.div 
      className="bg-card p-6 rounded-lg border shadow-sm h-full"
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.2 }}
    >
      <h3 className="text-xl font-medium mb-3">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <FiCheckCircle className="text-primary mt-1 mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

interface GlobalFeatureCardProps {
  icon: React.ReactNode;
  title: string;
}

function GlobalFeatureCard({ icon, title }: GlobalFeatureCardProps) {
  return (
    <motion.div
      className="bg-white dark:bg-black/20 p-4 rounded-lg border shadow-sm text-center"
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
    >
      <div className="mx-auto rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-3">
        {icon}
      </div>
      <h3 className="font-medium">{title}</h3>
    </motion.div>
  );
} 