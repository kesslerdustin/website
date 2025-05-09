import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "../components/theme-provider";
import { LanguageProvider } from "../contexts/language-context";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ScrollEffects } from "../components/scroll-effects";
import { ScrollProgress } from "../components/scroll-progress";
import { ScrollToTop } from "../components/scroll-to-top";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dustin Keßler | Full Stack Developer | Global AI & VR Expert",
  description: "Full Stack Developer available worldwide. Expert in AR/VR, AI, and Computer Science. Remote services for international clients. Based in Germany with global reach.",
  keywords: ["Dustin Keßler", "Dustin Kessler", "Full Stack Developer", "Global Developer", "Remote Developer", "International Freelancer", "Webentwickler NRW", "Webentwicklung Dinslaken", "Freelancer Oberhausen", "Entwickler Duisburg", "Software Essen", "AI Expert", "VR Developer", "AR Developer", "Remote Freelancer", "Computer Science", "Hire Developer", "SCRUM Master", "Publications", "Software Developer Germany", "IT Freelancer International", "Programmierung Umgebung Dinslaken", "App Entwicklung Oberhausen", "KI Experte Deutschland", "Remote Services"],
  authors: [{ name: "Dustin Keßler" }],
  creator: "Dustin Keßler",
  icons: {
    icon: '/favicon.ico'
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://dustinkessler.de",
    title: "Dustin Keßler | Global Full Stack Developer | AI & VR Expert",
    description: "Full Stack Developer offering remote services worldwide. Based in Germany with global reach. Expert in AR/VR, AI, and Computer Science. Available for international projects.",
    siteName: "Dustin Keßler Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dustin Keßler - Full Stack Developer with global services"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Dustin Keßler | Global Full Stack Developer | AI & VR Expert",
    description: "Full Stack Developer offering remote services worldwide. Expert in AR/VR, AI, and Computer Science. Available for international projects.",
    images: ["/images/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.dustinkessler.de",
    languages: {
      'en': 'https://www.dustinkessler.de/en',
      'de': 'https://www.dustinkessler.de/de'
    }
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Dustin Keßler",
              "alternateName": "Dustin Kessler",
              "url": "https://dustinkessler.de",
              "jobTitle": "Full Stack Developer",
              "description": "Global Full Stack Developer specializing in AI, VR/AR, and Computer Science. Available for remote work worldwide.",
              "knowsAbout": ["AI", "VR", "AR", "Computer Science", "Full Stack Development", "Web Development", "Mobile App Development", "International Remote Work"],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dinslaken",
                "addressRegion": "NRW",
                "addressCountry": "DE"
              },
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance Developer with Global Services"
              },
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "Hochschule Ruhr West"
              },
              "makesOffer": {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Remote Development Services",
                  "description": "Full stack development, AI integration, VR/AR solutions, and app development available worldwide with remote collaboration."
                },
                "areaServed": {
                  "@type": "GeoShape",
                  "name": "Worldwide"
                },
                "availableLanguage": ["en", "de"]
              },
              "sameAs": [
                "https://github.com/kesslerdustin",
                "https://de.linkedin.com/in/dustin-keßler-462567193",
                "https://scholar.google.com/citations?user=A0OdhrIAAAAJ&hl=en"
              ]
            })
          }}
        />
        <meta name="geo.region" content="DE-NW" />
        <meta name="geo.placename" content="Dinslaken" />
        <meta name="geo.position" content="51.5667;6.7333" />
        <meta name="ICBM" content="51.5667, 6.7333" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="sitemap" type="application/xml" href="/image-sitemap.xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>
            <ScrollProgress />
            <ScrollEffects />
            <ScrollToTop />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <Analytics />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
