"use client";

import Link from "next/link";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import {
  websiteProjects,
  threeDProjects,
  publications,
  skills,
  certifications,
} from "../lib/data";
import { useLanguage } from "../contexts/language-context";
import { Reveal } from "@/components/ui/reveal";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function Home() {
  const { t } = useLanguage();
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-16 pb-6 md:pt-28 md:pb-8 overlay-primary">
        <div className="container px-4 md:px-6">
          <motion.div 
            className="flex flex-col md:flex-row items-center gap-6 md:gap-12"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            {/* Profile Photo */}
            <motion.div 
              className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 overflow-hidden rounded-full border-4 border-primary/20 shadow-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/images/avatar.jpeg"
                alt="Dustin Keßler"
                width={256}
                height={256}
                className="object-cover"
                priority
              />
            </motion.div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  {t("hero.greeting")} <span className="text-primary">Dustin Keßler</span>
                </h1>
                <p className="max-w-[700px] text-muted-foreground text-sm sm:text-base md:text-xl">
                  {t("hero.specialization")}
                </p>
              </motion.div>
              <motion.div 
                className="flex flex-col sm:flex-row gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <Link
                  href="#projects"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 sm:px-8 text-sm font-medium text-primary-foreground shadow transition-all duration-200 hover:bg-primary/90 hover:scale-105 hover:shadow-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  {t("hero.viewWork")}
                </Link>
                <Link
                  href="/resume"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 sm:px-8 text-sm font-medium shadow-sm transition-all duration-200 hover:bg-accent hover:text-accent-foreground hover:scale-105 hover:shadow-md hover:border-primary/40 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  {t("hero.viewResume")}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Publications Section */}
      <motion.section 
        id="publications" 
        className="py-8 md:py-12 bg-transparent"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
      >
        <div className="container px-4 md:px-6">
          <motion.div 
            className="flex flex-col items-center text-center space-y-4 max-w-[800px] mx-auto mb-8"
            variants={fadeIn}
          >
             <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{t("section.publications")}</h2>
             <p className="text-muted-foreground">
               {t("publications.explore")}
             </p>
             <div className="flex flex-wrap justify-center gap-4">
               <Link
                 href="https://scholar.google.com/citations?user=A0OdhrIAAAAJ&hl=en"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline hover:text-primary/80 transition-all duration-200"
               >
                 {t("publications.scholar")} <FiExternalLink className="h-4 w-4" />
               </Link>
               <Link
                 href="/publications"
                 className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline hover:text-primary/80 transition-all duration-200"
               >
                 {t("publications.all")}
               </Link>
             </div>
          </motion.div>
          <motion.div 
            className="grid gap-6 md:grid-cols-1 lg:grid-cols-2"
            variants={staggerContainer}
          >
            {publications.slice(0, 4).map((pub, index) => (
              <motion.div key={index} variants={itemVariant}>
                <PublicationCard publication={pub} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Certifications & Awards Section */}
      <motion.section 
        id="certifications" 
        className="py-8 md:py-12 bg-transparent"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
      >
        <div className="parallax-bg absolute inset-0 z-[-1]" />
        <div className="container px-4 md:px-6">
          <motion.div 
            className="flex flex-col items-center text-center space-y-4 max-w-[800px] mx-auto mb-8"
            variants={fadeIn}
          >
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              {t("section.certifications")}
            </h2>
            <p className="text-muted-foreground">
              {t("certifications.description")}
            </p>
          </motion.div>
          <motion.div 
            className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
          >
            {certifications.map((cert, index) => (
              <motion.div 
                key={index} 
                variants={itemVariant}
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                }}
              >
                <CertificationCard certification={cert} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projects" 
        className="py-8 md:py-12 bg-transparent"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
      >
        <div className="container px-4 md:px-6">
          <motion.div 
            className="flex flex-col items-center text-center space-y-4 mb-8"
            variants={fadeIn}
          >
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{t("section.projects")}</h2>
            <p className="text-muted-foreground max-w-[700px]">
              {t("projects.description")}
            </p>
             <Link
               href="/projects"
               className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline hover:text-primary/80 transition-all duration-200"
             >
               {t("projects.all")}
             </Link>
          </motion.div>

          <motion.div 
            className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
          >
            {websiteProjects.slice(0, 2).map((project) => (
              <motion.div key={project.title} variants={itemVariant}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
            {threeDProjects.slice(0, 1).map((project) => (
              <motion.div key={project.title} variants={itemVariant}>
                <SimpleProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        id="skills" 
        className="py-8 md:py-12 bg-transparent"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
      >
        <div className="container px-4 md:px-6">
          <motion.div 
            className="flex flex-col items-center text-center space-y-4 max-w-[800px] mx-auto"
            variants={fadeIn}
          >
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{t("section.skills")}</h2>
              <p className="text-muted-foreground">
                {t("skills.description")}
              </p>
            </div>
            <motion.div 
              className="flex flex-wrap justify-center gap-2 md:gap-3 mt-6"
              variants={staggerContainer}
            >
              {skills.slice(0, 12).map((skill) => (
                <motion.span
                  key={skill}
                  className="inline-flex items-center rounded-md border border-input bg-background px-3 py-1 text-sm font-medium shadow-sm hover:bg-accent hover:border-primary/40 hover:scale-105 transition-all duration-200"
                  variants={itemVariant}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
             <div className="mt-8">
               <Link
                 href="/skills"
                 className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline hover:text-primary/80 transition-all duration-200"
               >
                 {t("skills.viewAll")}
               </Link>
             </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

import type { Publication, Project, ThreeDProject, Certification } from '../lib/data';

function PublicationCard({ publication }: { publication: Publication }) {
  return (
    <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm flex flex-col h-full card-hover-effect">
      <div className="flex-grow">
        <h4 className="font-semibold text-lg mb-1 line-clamp-2">{publication.title}</h4>
        <p className="text-sm text-muted-foreground mb-1 italic line-clamp-1">{publication.authors}</p>
        {publication.source && <p className="text-sm text-muted-foreground mb-2 line-clamp-1">{publication.source}</p>}
      </div>
      <div className="flex justify-between items-end text-sm text-muted-foreground mt-2 pt-2 border-t">
        <span>Year: {publication.year}</span>
        {publication.citations !== undefined && publication.citations !== "n/a" && (
          <span>Cited by: {publication.citations}</span>
        )}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md flex flex-col h-full card-hover-effect">
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
        {project.description && (
          <p className="text-sm text-muted-foreground mt-1 mb-2 line-clamp-2">{project.description}</p>
        )}
        {project.tags && (
           <div className="mt-auto pt-2 flex flex-wrap gap-1">
             {project.tags.map((tag: string) => (
               <span
                 key={tag}
                 className="inline-flex items-center rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground hover:bg-primary/20 hover:text-primary-foreground hover:scale-105 transition-all duration-200"
               >
                 {tag}
               </span>
             ))}
           </div>
         )}
      </div>
       {project.link && (
         <div className="p-4 pt-0 mt-auto">
           <Link
             href={project.link}
             target="_blank"
             rel="noopener noreferrer"
             className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline hover:text-primary/80 transition-all duration-200"
           >
             Visit Website <FiExternalLink className="h-3 w-3" />
           </Link>
         </div>
       )}
    </div>
  );
}

function SimpleProjectCard({ project }: { project: Project | ThreeDProject }) {
   return (
     <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm flex flex-col h-full card-hover-effect">
        <div className="flex-grow">
          <h4 className="font-semibold text-lg mb-1">{project.title}</h4>
          {project.description && <p className="text-sm text-muted-foreground mt-1 mb-2 line-clamp-2">{project.description}</p>}
        </div>
        {project.tags && (
            <div className="mt-auto pt-2 flex flex-wrap gap-1">
              {project.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground hover:bg-primary/20 hover:text-primary-foreground hover:scale-105 transition-all duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>
        )}
     </div>
   );
 }

function CertificationCard({ certification }: { certification: Certification }) {
  const { t } = useLanguage();
  return (
    <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm flex flex-col h-full hover:shadow-md transition-all">
      <div className="flex-grow">
        <h4 className="font-semibold text-lg mb-1">{certification.title}</h4>
        <p className="text-sm text-muted-foreground mb-1">{certification.organization}</p>
        <p className="text-sm text-muted-foreground mb-2">{certification.date}</p>
        {certification.description && (
          <p className="text-sm mt-2">{certification.description}</p>
        )}
      </div>
      {certification.link && (
        <div className="mt-2 pt-2 border-t">
          <Link
            href={certification.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline hover:text-primary/80 transition-all duration-200"
          >
            {t("certifications.viewCertificate")} <FiExternalLink className="h-3 w-3" />
          </Link>
        </div>
      )}
    </div>
  );
}
