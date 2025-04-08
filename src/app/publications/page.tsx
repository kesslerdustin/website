"use client";

import { FiExternalLink, FiCalendar, FiUsers, FiBook, FiAward } from "react-icons/fi";
import Link from "next/link";
import { publications, Publication } from "../../lib/data";

export default function PublicationsPage() {

  return (
    <div className="container py-12 px-4 md:px-6 md:py-16">
      <div className="mb-12 space-y-3 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Publications</h1>
        <p className="text-muted-foreground md:text-lg max-w-xl mx-auto">
          A list of my research contributions. For the most up-to-date list and citation metrics, please visit my Google Scholar profile.
        </p>
         <Link
           href="https://scholar.google.com/citations?user=A0OdhrIAAAAJ&hl=en"
           target="_blank"
           rel="noopener noreferrer"
           className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
         >
           View on Google Scholar <FiExternalLink className="h-4 w-4" />
         </Link>
      </div>

      {/* Publications list */}
      <div className="space-y-6 max-w-4xl mx-auto">
        {publications.map((publication, index) => (
          <div
            key={index}
            className="bg-card rounded-lg border p-5 md:p-6 shadow-sm"
          >
            <h2 className="text-lg md:text-xl font-semibold mb-2">{publication.title}</h2>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-x-5 gap-y-1 text-sm text-muted-foreground mb-3">
              {publication.authors && (
                 <div className="flex items-center gap-1.5" title={publication.authors}>
                    <FiUsers className="h-4 w-4 flex-shrink-0" />
                    <span className="truncate">{publication.authors}</span>
                 </div>
              )}
              {publication.source && (
                 <div className="flex items-center gap-1.5" title={publication.source}>
                   <FiBook className="h-4 w-4 flex-shrink-0" />
                   <span className="truncate">{publication.source}</span>
                 </div>
              )}
             <div className="flex items-center gap-1.5">
                <FiCalendar className="h-4 w-4 flex-shrink-0" />
                <span>{publication.year}</span>
             </div>
              {publication.citations !== undefined && publication.citations !== "n/a" && (
                 <div className="flex items-center gap-1.5">
                    <FiAward className="h-4 w-4 flex-shrink-0" />
                    <span>Cited by: {publication.citations}</span>
                 </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {publications.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No publications listed.</p>
        </div>
      )}
    </div>
  );
} 