"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiExternalLink, FiX } from "react-icons/fi";
import {
  websiteProjects,
  frontendProjects,
  appProjects,
  threeDProjects,
  Project,
} from "../../lib/data";
import { useLanguage } from "../../contexts/language-context";

// Define project category and status types (optional, but good practice)
// type ProjectCategory = 'hobby' | 'professional' | 'research';
// type ProjectStatus = 'completed' | 'work in progress' | 'TBD';

// Combine all projects into a single array
const allProjects: Project[] = [
  ...websiteProjects,
  ...frontendProjects,
  ...appProjects,
  ...threeDProjects,
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>("all");
  const [sortOrder, setSortOrder] = useState<'timeline' | 'title'>('title');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();
  
  const categories = [
    { id: 'all', label: t("projects.category.all") },
    { id: 'professional', label: t("projects.category.professional") },
    { id: 'research', label: t("projects.category.research") },
    { id: 'hobby', label: t("projects.category.hobby") },
  ];

  const filteredProjects =
    filter === "all"
      ? allProjects
      : allProjects.filter((project) => project.category === filter);

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortOrder === 'timeline') {
      return b.year - a.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Helper function to get status translation key
  const getStatusTranslationKey = (status: 'completed' | 'work in progress' | 'TBD'): string => {
      switch (status) {
          case 'completed': return "projects.status.completed";
          case 'work in progress': return "projects.status.workInProgress";
          case 'TBD': return "projects.status.tbd";
          default: return ""; // Should not happen with defined types
      }
  };

   // Helper function to get category translation key
  const getCategoryTranslationKey = (category: 'hobby' | 'professional' | 'research'): string => {
      switch (category) {
          case 'hobby': return "projects.category.hobby";
          case 'professional': return "projects.category.professional";
          case 'research': return "projects.category.research";
          default: return ""; // Should not happen with defined types
      }
  };

  return (
    <div className="container py-12 px-4 md:px-6 md:py-16 relative">
      <div className="mb-8 space-y-2 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{t("section.projects")}</h1>
        <p className="text-muted-foreground md:text-lg">
          {t("projects.description")}
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-4 sm:mb-6">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setFilter(category.id)}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-md transition-colors ${
              filter === category.id
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="flex justify-center gap-2 mb-6 sm:mb-8">
         <button
            onClick={() => setSortOrder('title')}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-md transition-colors ${
              sortOrder === 'title'
                ? "bg-primary text-primary-foreground"
                : "bg-accent text-accent-foreground hover:bg-accent/80"
            }`}
          >
           {t("projects.sort.title")}
          </button>
        <button
            onClick={() => setSortOrder('timeline')}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-md transition-colors ${
              sortOrder === 'timeline'
                ? "bg-primary text-primary-foreground"
                : "bg-accent text-accent-foreground hover:bg-accent/80"
            }`}
          >
            {t("projects.sort.timeline")}
          </button>
      </div>

      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {sortedProjects.map((project) => (
          <ProjectCard key={project.title} project={project} onClick={() => handleProjectClick(project)} />
        ))}
      </div>

      {sortedProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">{t("projects.noProjectsFound")}</p>
        </div>
      )}

      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={closeModal}>
          <div
            className="relative bg-card text-card-foreground rounded-xl border shadow-xl w-11/12 max-w-2xl max-h-[90vh] overflow-y-auto p-6 md:p-8 animate-in fade-in-0 zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 p-1 rounded-full text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label={t("common.close")}
            >
              <FiX className="h-5 w-5" />
            </button>

            <h2 className="text-2xl font-semibold mb-1">{selectedProject.title}</h2>
            <div className="text-sm text-muted-foreground mb-4 space-x-4">
                 <span>{t("projects.yearLabel")} {selectedProject.year}</span>
                 <span>{t("projects.categoryLabel")} {t(getCategoryTranslationKey(selectedProject.category))}</span>
                 <span>{t("projects.statusLabel")} {t(getStatusTranslationKey(selectedProject.status))}</span>
            </div>

            {selectedProject.longDescription && (
              <p className="text-base mb-4">{selectedProject.longDescription}</p>
            )}

            {selectedProject.images && selectedProject.images.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-medium mb-2">Gallery</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {selectedProject.images.map((imgSrc, index) => (
                     <div key={index} className="relative aspect-video overflow-hidden rounded-md border">
                      <Image
                        src={imgSrc}
                        alt={`${selectedProject.title} - Image ${index + 1}`}
                        fill
                        sizes="(max-width: 640px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedProject.tags && selectedProject.tags.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-1.5">{t("projects.tagsLabel")}</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
            )}

            {selectedProject.link && (
              <div className="mt-auto pt-4 border-t">
                 <Link
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline hover:text-primary/80 transition-colors"
                 >
                    {t("projects.visitWebsite")} <FiExternalLink className="h-4 w-4" />
                 </Link>
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

function ProjectCard({ project, onClick }: ProjectCardProps) {
  const { t } = useLanguage();

  // Helper to get status badge styles
  const getStatusBadgeStyle = (status: 'completed' | 'work in progress' | 'TBD') => {
    switch (status) {
      case 'completed': return "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300";
      case 'work in progress': return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300";
      case 'TBD': return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
    }
  };

  // Helper function to get status translation key (can reuse the one from ProjectsPage or define locally)
  const getStatusTranslationKey = (status: 'completed' | 'work in progress' | 'TBD'): string => {
      switch (status) {
          case 'completed': return "projects.status.completed";
          case 'work in progress': return "projects.status.workInProgress";
          case 'TBD': return "projects.status.tbd";
          default: return "";
      }
  };

  return (
    <div
      className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md flex flex-col h-full hover:scale-[1.03] hover:border-primary/20 cursor-pointer"
      onClick={onClick}
    >
      {/* Add Thumbnail Image */}
      {project.thumbnailImage && (
         <div className="relative w-full aspect-video overflow-hidden">
             <Image
                src={project.thumbnailImage}
                alt={`${project.title} thumbnail`}
                fill // Use fill layout
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" // Define sizes for responsiveness
                className="object-cover transition-transform duration-300 group-hover:scale-105"
             />
         </div>
      )}
      {/* Card Content Area */}
      <div className="p-4 flex-grow flex flex-col">
         <div className="flex justify-between items-start mb-1">
           <h3 className="text-lg font-semibold mr-2">{project.title}</h3>
           <span className="text-xs font-mono text-muted-foreground bg-secondary/50 px-1.5 py-0.5 rounded">{project.year}</span>
        </div>
         {/* Status Badge */}
          <span className={`inline-block self-start px-2 py-0.5 text-xs font-medium rounded-full ${getStatusBadgeStyle(project.status)} mb-2`}>
            {t(getStatusTranslationKey(project.status))}
          </span>
        {/* Use shortDescription */}
        {project.shortDescription && (
          <p className="text-sm text-muted-foreground mt-1 mb-2 line-clamp-3 flex-grow">{project.shortDescription}</p>
        )}
        {/* Tags Area */}
        {project.tags && project.tags.length > 0 && (
          <div className="pt-2 flex flex-wrap gap-1">
            {project.tags.map((tag: string) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground group-hover:bg-primary/20 group-hover:text-primary-foreground transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      {/* Link Area (Bottom) */}
       <div className={`p-4 pt-2 border-t mt-auto ${!project.link ? 'h-[41px]' : ''}`}> {/* Keep consistent height */}
          {project.link && (
            <div
              className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:underline group-hover:text-primary/80 transition-colors cursor-pointer"
              onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.link, '_blank', 'noopener,noreferrer');
              }}
            >
              {t("projects.visitWebsite")} <FiExternalLink className="h-3 w-3" />
            </div>
          )}
       </div>
    </div>
  );
} 