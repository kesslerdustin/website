"use client";

import { useLanguage } from "../../contexts/language-context";

export default function ImpressumPage() {
  const { language } = useLanguage();
  const isGerman = language === "de";

  return (
    <div className="container py-12 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">
          {isGerman ? "Impressum" : "Legal Notice"}
        </h1>

        {/* German Version */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Impressum</h2>
          <div className="space-y-4 text-muted-foreground">
            <div>
              <h3 className="font-medium text-foreground">Angaben gemäß § 5 TMG</h3>
              <p>Dustin Keßler</p>
              <p>Kurt Schumacher Straße 93</p>
              <p>46539 Dinslaken</p>
              <p>Deutschland</p>
            </div>
            
            <div>
              <h3 className="font-medium text-foreground">Kontakt</h3>
              <p>E-Mail: <a href="mailto:duselkay@gmail.com" className="text-primary hover:underline">duselkay@gmail.com</a></p>
            </div>

            <div>
              <h3 className="font-medium text-foreground">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
              <p>Dustin Keßler</p>
              <p>Kurt Schumacher Straße 93</p>
              <p>46539 Dinslaken</p>
            </div>
          </div>
        </div>

        {/* English Version */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Legal Notice</h2>
          <div className="space-y-4 text-muted-foreground">
            <div>
              <h3 className="font-medium text-foreground">Information according to § 5 TMG</h3>
              <p>Dustin Keßler</p>
              <p>Kurt Schumacher Strasse 93</p>
              <p>46539 Dinslaken</p>
              <p>Germany</p>
            </div>
            
            <div>
              <h3 className="font-medium text-foreground">Contact</h3>
              <p>Email: <a href="mailto:duselkay@gmail.com" className="text-primary hover:underline">duselkay@gmail.com</a></p>
            </div>

            <div>
              <h3 className="font-medium text-foreground">Responsible for content according to § 55 Abs. 2 RStV</h3>
              <p>Dustin Keßler</p>
              <p>Kurt Schumacher Strasse 93</p>
              <p>46539 Dinslaken</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 