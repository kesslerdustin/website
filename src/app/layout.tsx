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
  title: "Dustin Keßler | Full Stack Developer | AI & VR Expert",
  description: "Full Stack Developer based in Germany. Expert in AR/VR, AI, and Computer Science. Hire me for your next project - anywhere in the world. View my portfolio, publications, and certifications.",
  keywords: ["Dustin Keßler", "Dustin Kessler", "Full Stack Developer", "Webentwickler NRW", "Webentwicklung Dinslaken", "Freelancer Oberhausen", "Entwickler Duisburg", "Software Essen", "AI Expert", "VR Developer", "AR Developer", "Freelancer", "Computer Science", "Hire Developer", "SCRUM Master", "Publications", "Software Developer Dinslaken", "IT Freelancer NRW", "Programmierung Umgebung Dinslaken", "App Entwicklung Oberhausen", "KI Experte NRW"],
  authors: [{ name: "Dustin Keßler" }],
  creator: "Dustin Keßler",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://dustinkessler.de",
    title: "Dustin Keßler | Full Stack Developer in NRW | AI & VR Expert",
    description: "Full Stack Developer based in Dinslaken, NRW. Expert in AR/VR, AI, and Computer Science. Hire me for your next project in Oberhausen, Dinslaken or surrounding areas.",
    siteName: "Dustin Keßler Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dustin Keßler - Full Stack Developer aus Dinslaken, NRW"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Dustin Keßler | Full Stack Developer in NRW | AI & VR Expert",
    description: "Full Stack Developer based in Dinslaken, NRW. Expert in AR/VR, AI, and Computer Science. Hire me for your next project.",
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
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
              "knowsAbout": ["AI", "VR", "AR", "Computer Science", "Full Stack Development", "Web Development", "Mobile App Development"],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dinslaken",
                "addressRegion": "NRW",
                "addressCountry": "DE"
              },
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance Developer in Dinslaken, NRW"
              },
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "Hochschule Ruhr West"
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
