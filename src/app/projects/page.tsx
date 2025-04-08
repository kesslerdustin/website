"use client";

import { useState } from "react";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import {
  websiteProjects,
  frontendProjects,
  appProjects,
  threeDProjects,
  Project,
} from "../../lib/data";

// Combine all projects and add category
const allProjects: (Project & { category: string })[] = [
  ...websiteProjects.map(p => ({ ...p, category: 'website' })),
  ...frontendProjects.map(p => ({ ...p, category: 'frontend' })),
  ...appProjects.map(p => ({ ...p, category: 'app' })),
  ...threeDProjects.map(p => ({ ...p, category: '3d' })),
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'website', label: 'Websites' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'app', label: 'App Development' },
  { id: '3d', label: '3D / AR / VR' },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>("all");

  const filteredProjects =
    filter === "all"
      ? allProjects
      : allProjects.filter((project) => project.category === filter);

  return (
    <div className="container py-12 px-4 md:px-6 md:py-16">
      <div className="mb-8 space-y-2 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Projects</h1>
        <p className="text-muted-foreground md:text-lg">
          Explore a collection of my work across various domains.
        </p>
      </div>

      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setFilter(category.id)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              filter === category.id
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No projects found for this category.</p>
        </div>
      )}
    </div>
  );
}

// ProjectCard component adapted for this page
// Uses the imported Project interface
function ProjectCard({ project }: { project: Project & { category: string } }) {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md flex flex-col h-full">
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
        {project.description && (
          <p className="text-sm text-muted-foreground mt-1 mb-2 line-clamp-3">{project.description}</p>
        )}
      </div>
      {project.tags && (
        <div className="px-4 pb-2 flex flex-wrap gap-1">
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {project.link && project.category === 'website' && (
        <div className="p-4 pt-2 mt-auto border-t">
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            Visit Website <FiExternalLink className="h-3 w-3" />
          </Link>
        </div>
      )}
    </div>
  );
} 