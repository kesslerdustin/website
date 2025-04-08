"use client";

import { useLanguage } from "../contexts/language-context";
import { Button } from "./ui/button";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  
  return (
    <div className="flex items-center gap-1">
      <Button
        variant={language === "en" ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage("en")}
        className="h-8 w-8 p-0"
        aria-label="English"
      >
        EN
      </Button>
      <Button
        variant={language === "de" ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage("de")}
        className="h-8 w-8 p-0"
        aria-label="Deutsch"
      >
        DE
      </Button>
    </div>
  );
} 