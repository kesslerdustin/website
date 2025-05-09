"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiExternalLink, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {
  websiteProjects,
  frontendProjects,
  appProjects,
  threeDProjects,
  Project,
  ProjectDomain,
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
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [filterDomain, setFilterDomain] = useState<string>("all");
  const [sortOrder, setSortOrder] = useState<'timeline' | 'title'>('timeline');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFsViewerOpen, setIsFsViewerOpen] = useState(false);
  const [currentFsImageIndex, setCurrentFsImageIndex] = useState<number | null>(null);
  const { t } = useLanguage();
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Memoize categories and domains arrays, recalculate when t changes
  const categories = useMemo(() => [
    { id: 'all', label: t("projects.filter.category.all") },
    { id: 'professional', label: t("projects.filter.category.professional") },
    { id: 'research', label: t("projects.filter.category.research") },
    { id: 'hobby', label: t("projects.filter.category.hobby") },
  ], [t]);

  const domains: { id: ProjectDomain | 'all', label: string }[] = useMemo(() => [
    { id: 'all', label: t("projects.filter.domain.all") },
    { id: 'website', label: t("projects.filter.domain.website") },
    { id: 'frontend', label: t("projects.filter.domain.frontend") },
    { id: 'backend', label: t("projects.filter.domain.backend") },
    { id: 'app', label: t("projects.filter.domain.app") },
    { id: '3d', label: t("projects.filter.domain.3d") },
  ], [t]);

  const filteredProjects = allProjects.filter((project) => {
      const categoryMatch = filterCategory === 'all' || project.category === filterCategory;
      const domainMatch = filterDomain === 'all' || project.domains.includes(filterDomain as ProjectDomain);
      return categoryMatch && domainMatch;
  });

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

  // Fullscreen image viewer handlers
  const openFsViewer = (index: number) => {
    setCurrentFsImageIndex(index);
    setIsFsViewerOpen(true);
  };

  const closeFsViewer = () => {
    setIsFsViewerOpen(false);
    setCurrentFsImageIndex(null);
  };

  const showNextFsImage = () => {
    if (selectedProject && selectedProject.images && currentFsImageIndex !== null) {
        const nextIndex = (currentFsImageIndex + 1) % selectedProject.images.length;
        setCurrentFsImageIndex(nextIndex);
    }
  };

  const showPrevFsImage = () => {
     if (selectedProject && selectedProject.images && currentFsImageIndex !== null) {
        const prevIndex = (currentFsImageIndex - 1 + selectedProject.images.length) % selectedProject.images.length;
        setCurrentFsImageIndex(prevIndex);
    }
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
          case 'hobby': return "projects.filter.category.hobby";
          case 'professional': return "projects.filter.category.professional";
          case 'research': return "projects.filter.category.research";
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

      {isClient ? (
        <>
          <div className="flex flex-wrap justify-center gap-2 mb-4 sm:mb-6">
            <p className="w-full text-center text-sm font-medium text-muted-foreground mb-2">{t("projects.filter.domain.title")}</p>
            {domains.map((domain) => (
              <button
                key={domain.id}
                onClick={() => setFilterDomain(domain.id)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-md transition-all duration-200 ${
                  filterDomain === domain.id
                    ? "bg-primary text-primary-foreground font-bold shadow-md scale-105"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {domain.label}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-4 sm:mb-6">
            <p className="w-full text-center text-sm font-medium text-muted-foreground mb-2">{t("projects.filter.category.title")}</p>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setFilterCategory(category.id)}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-md transition-all duration-200 ${
                  filterCategory === category.id
                ? "bg-primary text-primary-foreground font-bold shadow-md scale-105"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

          <div className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-8">
            <button
                onClick={() => setSortOrder('title')}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-md transition-all duration-200 ${
                  sortOrder === 'title'
                    ? "bg-primary text-primary-foreground font-bold shadow-md scale-105"
                    : "bg-accent text-accent-foreground hover:bg-accent/80"
                }`}
              >
                {t("projects.sort.title")}
              </button>
            <button
                onClick={() => setSortOrder('timeline')}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-md transition-all duration-200 ${
                  sortOrder === 'timeline'
                    ? "bg-primary text-primary-foreground font-bold shadow-md scale-105"
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
        </>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Loading projects...</p>
        </div>
      )}

      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-start md:items-center justify-center bg-black/30 dark:bg-black/60 backdrop-blur-sm overflow-y-auto pt-20 md:pt-0" onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}>
          <div
            className="relative bg-white/90 dark:bg-black/95 text-card-foreground rounded-xl border shadow-xl w-11/12 max-w-2xl max-h-[80vh] md:max-h-[90vh] overflow-y-auto p-6 md:p-8 animate-in fade-in-0 zoom-in-95 mb-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 p-2 rounded-full bg-secondary/80 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
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
              <p className="text-base mb-4">{t(selectedProject.longDescription)}</p>
            )}

            {selectedProject.images && selectedProject.images.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-medium mb-2">{t("projects.gallery")}</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {selectedProject.images.map((imgSrc, index) => (
                     <div 
                       key={index} 
                       className="relative aspect-video overflow-hidden rounded-md border group cursor-pointer"
                       onClick={() => openFsViewer(index)}
                     >
                        <Image
                          src={imgSrc}
                          alt={`${selectedProject.title} - Image ${index + 1}`}
                          fill
                          sizes="(max-width: 640px) 50vw, 33vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                       <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                         <FiX className="text-white h-6 w-6 transform rotate-45" />
                       </div>
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

      {isFsViewerOpen && selectedProject && currentFsImageIndex !== null && selectedProject.images && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-md animate-in fade-in-0"
          onClick={closeFsViewer}
        >
          <button
            onClick={closeFsViewer}
            className="absolute top-20 md:top-4 right-4 p-2 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-white/20 transition-colors"
            aria-label="Close image viewer"
          >
            <FiX className="h-7 w-7" />
          </button>

          <div 
            className="relative w-[90vw] h-[70vh] md:h-[90vh] flex items-center justify-center mt-10 md:mt-0"
            onClick={(e) => e.stopPropagation()}
          >
             <Image
                src={selectedProject.images[currentFsImageIndex]}
                alt={`${selectedProject.title} - Image ${currentFsImageIndex + 1} Fullscreen`}
                fill
                sizes="90vw"
                className="object-contain"
              />
          </div>

          {selectedProject.images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); showPrevFsImage(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-white/20 transition-colors"
              aria-label="Previous image"
            >
              <FiChevronLeft className="h-8 w-8" />
            </button>
          )}

           {selectedProject.images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); showNextFsImage(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-white/20 transition-colors"
              aria-label="Next image"
            >
              <FiChevronRight className="h-8 w-8" />
            </button>
           )}
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
          <p className="text-sm text-muted-foreground mt-1 mb-2 line-clamp-3 flex-grow">{t(project.shortDescription)}</p>
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