"use client";

import { FiMail, FiMapPin, FiGithub, FiLinkedin } from "react-icons/fi";
import { motion } from "framer-motion";
import { ContactForm } from "../../components/contact-form";
import { useLanguage } from "../../contexts/language-context";

export default function ContactPage() {
  const { t } = useLanguage();
  
  return (
    <div className="container py-12 md:py-20 px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center mb-12 scroll-animated from-bottom">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {t("contact.title") || "Get in Touch"}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("contact.description") || "Feel free to reach out for collaborations, questions, or just to say hello! I'll try my best to get back to you soon."}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16 scroll-animated from-left">
          <ContactInfoCard 
            icon={<FiMail className="text-xl" />}
            title={t("contact.email") || "Email"}
            value="contact@dustinkessler.com"
            link="mailto:contact@dustinkessler.com"
          />
          <ContactInfoCard 
            icon={<FiMapPin className="text-xl" />}
            title={t("contact.location") || "Location"}
            value="Dortmund, Germany"
          />
          <ContactInfoCard 
            icon={<FiGithub className="text-xl" />}
            title="GitHub"
            value="@kesslerdustin"
            link="https://github.com/kesslerdustin"
          />
        </div>
        
        <div className="bg-card border shadow-sm rounded-xl p-6 md:p-8 bg-grid-pattern overlay-primary scroll-animated from-bottom">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            {t("contact.sendMessage") || "Send a Message"}
          </h2>
          <ContactForm />
        </div>
      </motion.div>
    </div>
  );
}

interface ContactInfoCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  link?: string;
}

function ContactInfoCard({ icon, title, value, link }: ContactInfoCardProps) {
  return (
    <motion.div 
      className="bg-card p-6 rounded-lg border shadow-sm text-center"
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.2 }}
    >
      <div className="inline-flex justify-center items-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
        {icon}
      </div>
      <h3 className="font-medium mb-1">{title}</h3>
      {link ? (
        <a 
          href={link}
          className="text-primary hover:underline"
          target={link.startsWith('http') ? '_blank' : undefined}
          rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          {value}
        </a>
      ) : (
        <p className="text-muted-foreground">{value}</p>
      )}
    </motion.div>
  );
} 