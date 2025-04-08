import React from "react";
import { skills } from "../../lib/data"; // Import skills from central data

// --- Categorize Skills (adjust categories and assignments as needed) ---
const skillCategories: { title: string; skills: string[] }[] = [
  {
    title: "Programming & Development",
    skills: skills.filter(s => [
      "Java", "C#", "Python", "JavaScript", "TypeScript", "HTML", "CSS", "Node.js", "Full Stack Development"
    ].includes(s))
  },
  {
    title: "XR Development (AR/VR)",
    skills: skills.filter(s => [
      "Unity", "AR", "VR", "Blender", "Photogrammetry"
    ].includes(s))
  },
  {
    title: "Web Technologies",
    skills: skills.filter(s => [
      "Next.js", "React", "Tailwind CSS"
      // Add others like Express, Databases if relevant
    ].includes(s))
  },
  {
    title: "AI & Data",
    skills: skills.filter(s => [
      "AI",
      // Add specific AI/ML libraries if relevant
    ].includes(s))
  },
  {
    title: "Tools & Platforms",
    skills: skills.filter(s => [
      "Git",
      // Add Docker, AWS, Vercel, etc. if relevant
    ].includes(s))
  },
];
// Filter out categories with no skills assigned
const availableCategories = skillCategories.filter(cat => cat.skills.length > 0);

export default function SkillsPage() {
  return (
    <div className="container py-12 px-4 md:px-6 md:py-16">
      <div className="mb-12 space-y-2 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Skills</h1>
        <p className="text-muted-foreground md:text-lg">
          My technical expertise spans across various areas of development.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-1 lg:grid-cols-2">
        {availableCategories.map((category) => (
          <section key={category.title} className="space-y-4 bg-card p-6 rounded-lg border shadow-sm">
            <h2 className="text-xl font-semibold text-primary mb-4">{category.title}</h2>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-md border border-input bg-background px-3 py-1 text-sm font-medium shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Optional: Add sections for Professional Skills or Languages later if desired */}
      {/*
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Professional Skills</h2>
         ... content ...
      </section>
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Languages</h2>
         ... content ...
      </section>
      */}
    </div>
  );
}

// Removed SkillCategory component and placeholder data (professionalSkills, languages) 