"use client";

import { FiDownload, FiCalendar, FiMapPin, FiUsers, FiBook, FiAward } from "react-icons/fi";
import Link from "next/link";
import { useLanguage } from "../../contexts/language-context";
// Import data from the central store
import {
  skills,
  experience,
  education,
  publications,
  certifications,
  Experience, // Import interfaces if needed for typing
  Education,
  Publication,
  Certification
} from "../../lib/data";

export default function ResumePage() {
  const { t } = useLanguage();
  
  return (
    <div className="container py-12 px-4 md:px-6 md:py-16">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{t("nav.resume")}</h1>
          <p className="text-muted-foreground md:text-lg">
            Dustin Keßler - {t("resume.subtitle")}
          </p>
        </div>
        {/* Optional: Add a real link to your resume PDF if available */}
        {/* <a
          href="/dustin-kessler-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <FiDownload className="h-4 w-4" />
          <span>Download PDF</span>
        </a> */}
      </div>

      <div className="grid gap-10 md:grid-cols-3">
        {/* Left Column - Skills, Education */}
        <div className="space-y-8">
          {/* Contact Information (Placeholder) 
          <section className="bg-card rounded-lg border p-6 space-y-4">
            <h2 className="text-xl font-bold">Contact Information</h2>
             Add your contact details here 
          </section> 
          */}

          {/* Skills */}
          <section className="bg-card rounded-lg border p-6 space-y-4 shadow-sm">
            <h2 className="text-xl font-bold mb-3">{t("section.skills")}</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-md border bg-background px-2.5 py-0.5 text-sm font-medium shadow-sm hover:bg-accent hover:scale-105 hover:border-primary/40 transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="bg-card rounded-lg border p-6 space-y-4 shadow-sm">
            <h2 className="text-xl font-bold mb-3">{t("section.education")}</h2>
            <div className="space-y-5">
              {education.map((edu, index) => (
                <div key={index} className="space-y-1">
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <p className="text-sm font-medium text-primary">{edu.field}</p>
                  <p className="text-sm text-muted-foreground">{edu.institution}</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <FiCalendar className="h-3 w-3" />
                    {edu.period}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="bg-card rounded-lg border p-6 space-y-4 shadow-sm">
            <h2 className="text-xl font-bold mb-3">{t("section.certifications")}</h2>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="space-y-1">
                  <h3 className="font-semibold">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.organization}</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <FiCalendar className="h-3 w-3" />
                    {cert.date}
                  </p>
                  {cert.link && (
                    <Link
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-primary hover:underline hover:text-primary/80 transition-all duration-200"
                    >
                      {t("certifications.viewCertificate")}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column - Experience, Publications */}
        <div className="md:col-span-2 space-y-8">
          {/* Professional Experience */}
          <section className="bg-card rounded-lg border p-6 space-y-6 shadow-sm">
            <h2 className="text-xl font-bold mb-4">{t("section.experience")}</h2>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div key={index} className="space-y-2 border-b border-border pb-6 last:border-b-0 last:pb-0">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1">
                    <h3 className="font-semibold text-lg">{job.title}</h3>
                    <p className="text-sm text-muted-foreground flex-shrink-0">{job.period} ({job.duration})</p>
                  </div>
                  <p className="text-sm font-medium text-primary">{job.company}</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-1 mb-2">
                    <FiMapPin className="h-4 w-4" />
                    {job.location}
                  </p>
                   {/* Display skills associated with the job */}
                  {job.skills && job.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {job.skills.map((skill) => (
                         <span
                           key={skill}
                           className="inline-flex items-center rounded bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground hover:bg-primary/20 hover:text-primary-foreground hover:scale-105 transition-all duration-200"
                         >
                           {skill}
                         </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Publications */}
          <section className="bg-card rounded-lg border p-6 space-y-6 shadow-sm">
            <h2 className="text-xl font-bold mb-4">{t("section.publications")}</h2>
            <div className="space-y-5">
              {publications.slice(0, 5).map((pub, index) => ( // Show first 5 publications
                <div key={index} className="space-y-1 border-b border-border pb-4 last:border-b-0 last:pb-0">
                  <h3 className="font-semibold text-base">{pub.title}</h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                      {pub.authors && (
                        <div className="flex items-center gap-1" title={pub.authors}>
                           <FiUsers className="h-3 w-3 flex-shrink-0" />
                           <span className="truncate">{pub.authors}</span>
                        </div>
                       )}
                       {pub.source && (
                        <div className="flex items-center gap-1" title={pub.source}>
                           <FiBook className="h-3 w-3 flex-shrink-0" />
                           <span className="truncate">{pub.source}</span>
                        </div>
                       )}
                       <div className="flex items-center gap-1">
                           <FiCalendar className="h-3 w-3 flex-shrink-0" />
                           <span>{pub.year}</span>
                       </div>
                       {pub.citations !== undefined && pub.citations !== "n/a" && (
                          <div className="flex items-center gap-1">
                             <FiAward className="h-3 w-3 flex-shrink-0" />
                             <span>Cited by: {pub.citations}</span>
                          </div>
                       )}
                  </div>
                </div>
              ))}
               <div className="pt-2">
                  <Link
                    href="/publications"
                    className="text-sm font-medium text-primary hover:underline hover:text-primary/80 transition-all duration-200"
                  >
                    {t("publications.all")}
                  </Link>
               </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

// Removed all placeholder data arrays (skills, experience, education, publications, languages, certifications) 