"use client";

import { FiCode, FiDatabase, FiLayers, FiMonitor, FiStar } from "react-icons/fi";
import { motion } from "framer-motion";
import { skills } from "../../lib/data";
import { useLanguage } from "../../contexts/language-context";
import { StatisticsCard, BarChart } from "../../components/statistics-card";

export default function SkillsPage() {
  const { t } = useLanguage();
  
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FiMonitor />,
      skills: skills.filter(skill => 
        ["React", "Next.js", "TypeScript", "HTML", "CSS", "JavaScript", "Tailwind CSS"].includes(skill)
      )
    },
    {
      title: "Backend",
      icon: <FiDatabase />,
      skills: skills.filter(skill => 
        ["Node.js", "Python", "Java", "C#"].includes(skill)
      )
    },
    {
      title: "3D & XR",
      icon: <FiLayers />,
      skills: skills.filter(skill => 
        ["Unity", "Blender", "Photogrammetry", "AR", "VR"].includes(skill)
      )
    },
    {
      title: "Other",
      icon: <FiCode />,
      skills: skills.filter(skill => 
        ["AI", "Git", "Full Stack Development"].includes(skill)
      )
    },
  ];
  
  // Sample data for visualizations
  const experienceData = [
    { label: "Full Stack", value: 7 },
    { label: "VR/AR", value: 5 },
    { label: "AI Development", value: 3 },
    { label: "Unity", value: 4 },
  ];
  
  const projectCountData = [
    { label: "Web Projects", value: 12 },
    { label: "VR/AR Projects", value: 8 },
    { label: "Mobile Apps", value: 6 },
    { label: "Research", value: 14 },
  ];

  return (
    <div className="container py-12 px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {t("skills.title") || "Technical Skills"}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("skills.description") || "A comprehensive overview of my technical skills and expertise across different domains."}
          </p>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <StatisticsCard
            title={t("skills.stats.years") || "Years Experience"}
            value={7}
            suffix="+"
            icon={<FiStar />}
          />
          <StatisticsCard
            title={t("skills.stats.projects") || "Projects Completed"}
            value={30}
            suffix="+"
            color="from-purple-500 to-indigo-600"
          />
          <StatisticsCard
            title={t("skills.stats.publications") || "Publications"}
            value={13}
            color="from-amber-500 to-orange-600"
          />
          <StatisticsCard
            title={t("skills.stats.technologies") || "Technologies"}
            value={skills.length}
            color="from-emerald-500 to-teal-600"
          />
        </div>
        
        {/* Charts Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <BarChart
            title={t("skills.charts.experience") || "Years of Experience by Domain"}
            data={experienceData}
            maxValue={10}
          />
          <BarChart
            title={t("skills.charts.projects") || "Projects by Type"}
            data={projectCountData}
            color="from-violet-500 to-purple-600"
          />
        </div>
        
        {/* Skills Categories */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">
            {t("skills.categories.title") || "Skill Categories"}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="bg-card border rounded-xl p-6 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary/10 text-primary rounded-md mr-3">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-xl">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-md border border-input bg-background px-3 py-1 text-sm font-medium shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* All Skills */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            {t("skills.all.title") || "All Skills"}
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                className="inline-flex items-center rounded-md border border-input bg-background px-3 py-1 text-sm font-medium shadow-sm hover:bg-accent transition-colors duration-200"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
} 