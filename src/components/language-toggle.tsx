"use client";

import { useLanguage } from "../contexts/language-context";
import { Button } from "./ui/button";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  
  return (
    <div className="flex items-center gap-1">
      <Button
        variant={language === "en" ? "outline" : "default"}
        size="sm"
        onClick={() => setLanguage("en")}
        className={`h-8 w-8 p-0 ${
          language === "en" 
            ? "bg-background text-foreground font-bold border-2 border-primary" 
            : "bg-primary text-primary-foreground hover:bg-primary/90"
        }`}
        aria-label="English"
      >
        EN
      </Button>
      <Button
        variant={language === "de" ? "outline" : "default"}
        size="sm"
        onClick={() => setLanguage("de")}
        className={`h-8 w-8 p-0 ${
          language === "de" 
            ? "bg-background text-foreground font-bold border-2 border-primary" 
            : "bg-primary text-primary-foreground hover:bg-primary/90"
        }`}
        aria-label="Deutsch"
      >
        DE
      </Button>
    </div>
  );
} 