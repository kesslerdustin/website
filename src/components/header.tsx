"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";
import { LanguageToggle } from "./language-toggle";
import { useLanguage } from "../contexts/language-context";
import { cn } from "../lib/utils";
import { buttonVariants } from "./ui/button";

const navItems = [
  { name: "nav.home", href: "/" },
  { name: "nav.projects", href: "/projects" },
  { name: "nav.publications", href: "/publications" },
  { name: "nav.localServices", href: "/local-services" },
  { name: "nav.skills", href: "/skills" },
  { name: "nav.resume", href: "/resume" },
  { name: "nav.contact", href: "/contact" },
];

// Keep serviceItems for reference but we won't use it in the dropdown anymore
const serviceItems = [
  { name: "localServices.webDev.title", href: "/local-services#web-development" },
  { name: "localServices.appDev.title", href: "/local-services#app-development" },
  { name: "localServices.arvrDev.title", href: "/local-services#arvr-development" },
  { name: "localServices.aiDev.title", href: "/local-services#ai-integration" },
];

export function Header() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      className={`sticky top-0 z-40 border-b bg-background/95 backdrop-blur transition-all duration-200 ${
        scrolled ? "shadow-md" : ""
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <motion.span 
              className="font-bold text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Portfolio
            </motion.span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1), duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === item.href ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {t(item.name)}
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>
        <motion.div 
          className="flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <LanguageToggle />
          <ThemeToggle />
          <MobileNav />
        </motion.div>
      </div>
    </motion.header>
  );
}

function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  useEffect(() => {
    // Prevent body scroll when menu is open
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        className="flex h-9 w-9 items-center justify-center rounded-md border"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
        >
          <path
            d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      
      {open && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 z-50 bg-black/70"
            onClick={() => setOpen(false)}
          />
          
          {/* Menu */}
          <div 
            className="fixed z-50 top-16 left-1/2 -translate-x-1/2 w-11/12 max-w-xs"
          >
            <motion.div
              className="w-full dark:bg-black bg-white border border-border rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col gap-4">
                {navItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block w-full py-2 px-2 text-base font-medium ${
                      pathname === item.href
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {t(item.name)}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </div>
        </>
      )}
    </div>
  );
} 