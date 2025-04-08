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
  title: "Dustin Keßler | AI, VR & Full Stack Developer",
  description: "Full Stack Developer and Expert in AR/VR, AI, and Computer Science. Hire me for your next project. View my portfolio, publications, and certifications.",
  keywords: ["Dustin Keßler", "Full Stack Developer", "AI Expert", "VR Developer", "AR Developer", "Freelancer", "Computer Science", "Hire Developer", "SCRUM Master", "Publications"],
  authors: [{ name: "Dustin Keßler" }],
  creator: "Dustin Keßler",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dustinkessler.com",
    title: "Dustin Keßler | AI, VR & Full Stack Developer",
    description: "Full Stack Developer and Expert in AR/VR, AI, and Computer Science. Hire me for your next project. View my portfolio, publications, and certifications.",
    siteName: "Dustin Keßler Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dustin Keßler - Developer Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Dustin Keßler | AI, VR & Full Stack Developer",
    description: "Full Stack Developer and Expert in AR/VR, AI, and Computer Science. Hire me for your next project.",
    images: ["/images/og-image.jpg"]
  },
  alternates: {
    canonical: "https://dustinkessler.com",
    languages: {
      'en': 'https://dustinkessler.com/en',
      'de': 'https://dustinkessler.com/de'
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
              "url": "https://dustinkessler.com",
              "jobTitle": "Full Stack Developer",
              "knowsAbout": ["AI", "VR", "AR", "Computer Science", "Full Stack Development"],
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "Hochschule Ruhr West"
              },
              "sameAs": [
                "https://github.com/kesslerdustin",
                "https://scholar.google.com/citations?user=A0OdhrIAAAAJ&hl=en"
              ]
            })
          }}
        />
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
