import { FiHome, FiBriefcase, FiCpu, FiLayers, FiBookOpen, FiAward, FiCode } from 'react-icons/fi'; // Example icons

// Interfaces
export interface NavLink {
  href: string;
  label: string;
  icon?: React.ElementType;
}

export interface Project {
  title: string;
  description?: string;
  tags?: string[];
  link?: string;
  image?: string; // Optional image path
}

// Specific project types might extend Project if needed, but a single interface is often sufficient
// export interface WebsiteProject extends Project { ... }

export interface Publication {
  title: string;
  authors: string;
  source: string;
  citations?: number | string;
  year: number | string;
}

export interface Experience {
  company: string;
  logo?: string; // Path to logo image if available
  title: string;
  duration: string;
  period: string;
  location: string;
  details?: string[]; // Bullet points or description
  skills?: string[];
}

export interface Education {
  institution: string;
  logo?: string; // Path to logo image if available
  degree: string;
  field: string;
  period: string;
}

export interface Certification {
  title: string;
  organization: string;
  date: string;
  description?: string;
  link?: string;
}

// Data Arrays

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home', icon: FiHome },
  { href: '/#projects', label: 'Projects', icon: FiBriefcase },
  { href: '/#skills', label: 'Skills', icon: FiCpu },
  { href: '/#publications', label: 'Publications', icon: FiBookOpen },
  { href: '/resume', label: 'Resume', icon: FiAward },
  // { href: '/contact', label: 'Contact', icon: FiMail }, // Example
];

export const websiteProjects: Project[] = [
  {
    title: "Jinrui No Heart",
    description: "Website project.",
    link: "https://www.jinruinoheart.com",
    tags: ["Web Development"],
  },
  {
    title: "Töller & Steprath",
    description: "Website for an electrical engineering company.",
    link: "https://toeller-steprath.de/",
    tags: ["Web Development", "WordPress"], // Assuming WP based on structure
  },
   {
    title: "Steinhauer Engineering",
    description: "Website for an engineering services company.",
    link: "https://www.steinhauer-engineering.de/",
    tags: ["Web Development", "WordPress"], // Assuming WP based on structure
  },
];

export const frontendProjects: Project[] = [
 { title: "Omnystate Platform", description: "Frontend development project." },
];

export const appProjects: Project[] = [
  { title: "Omnystate App", description: "Mobile application development." },
  { title: "Omnystate Collect", description: "Mobile application development." },
  { title: "ProtocolIT", description: "Mobile application development." },
  { title: "The QUIZ", description: "Mobile application development." },
  { title: "Outdoorbible", description: "Mobile application development." },
  { title: "Memoria", description: "Mobile application development." },
];

export interface ThreeDProject extends Project {} // Alias for clarity if needed

export const threeDProjects: ThreeDProject[] = [
  { title: "FPVR VR Drone Racing", tags: ["Unity", "VR"] },
  { title: "Crysis Mod (2007)", tags: ["Modding", "Game Development", "CryEngine"] },
  { title: "Hololens AR Navigation", tags: ["Hololens", "AR", "Unity"] },
  { title: "VR School", tags: ["VR", "Unity", "Education"] },
  { title: "VR Solar", tags: ["VR", "Unity", "Education"] },
  { title: "AR Machines", tags: ["AR", "Unity"] },
  { title: "VR Fräse", tags: ["VR", "Unity", "Simulation"] },
];

export const publications: Publication[] = [
  {
    title: "Navigating a heavy industry environment using augmented reality-a comparison of two indoor navigation designs",
    authors: "A Arntz, D Keßler, N Borgert, N Zengeler, M Jansen, U Handmann, ...",
    source: "Virtual, Augmented and Mixed Reality. Industrial and Everyday Life …",
    citations: 22,
    year: 2020,
  },
  {
    title: "Relax yourself-using virtual reality to enhance employees' mental health and work performance",
    authors: "C Straßmann, SC Eimler, A Arntz, D Keßler, S Zielinski, G Brandenberg, ...",
    source: "Extended abstracts of the 2019 CHI conference on human factors in computing …",
    citations: 18,
    year: 2019,
  },
  {
    title: "Mill instructor: Teaching industrial cnc procedures using virtual reality",
    authors: "D Keßler, A Arntz, J Friedhoff, SC Eimler",
    source: "2020 IEEE International Conference on Artificial Intelligence and Virtual …",
    citations: 10,
    year: 2020,
  },
  {
    title: "Walking on the Bright Sight: Evaluating a Photovoltaics Virtual Reality Education Application",
    authors: "A Arntz, SC Eimler, D Keßler, J Thomas, A Helgert, M Rehm, E Graf, ...",
    source: "2021 IEEE International Conference on Artificial Intelligence and Virtual …",
    citations: 7,
    year: 2021,
  },
  {
    title: "Person tracking in heavy industry environments with camera images",
    authors: "N Zengeler, A Arntz, D Keßler, M Grimm, Z Qasem, M Jansen, S Eimler, ...",
    source: "Science and Technologies for Smart Cities: 5th EAI International Summit …",
    citations: 7,
    year: 2020,
  },
  {
    title: "Thermodynamics reloaded: Experiencing heating, ventilation and air conditioning in ar",
    authors: "A Arntz, SC Eimler, D Keßler, A Nabokova, S Schädlich",
    source: "2020 IEEE International Conference on Artificial Intelligence and Virtual …",
    citations: 5,
    year: 2020,
  },
  {
    title: "Teaching practical tasks with virtual reality and augmented reality an experimental study comparing learning outcomes",
    authors: "A Arntz, S Eimler, U Handmann, D Keßler",
    source: "21st General Online Research Conference, 49-49",
    citations: 5,
    year: 2019,
  },
  {
    title: "Enlighten: A photovoltaics learning environment in virtual reality",
    authors: "A Arntz, D Kessler, SC Eimler",
    source: "2021 International Conference on Advanced Learning Technologies (ICALT), 221-223",
    citations: 4,
    year: 2021,
  },
  {
    title: "Dynamic, adaptive and mobile system for context-based and intelligent support of employees in the steel industry",
    authors: "K Hermsen, S Eimler, A Arntz, D Keßler, M Jansen, Z Qasem, M Grimm, ...",
    source: "4th ESTAD (European Steel Technology and Application Days). Düsseldorf, Germany",
    citations: 3,
    year: 2019,
  },
  {
    title: "DamokleS 4.0",
    authors: "N Zengeler, M Grimm, A Arntz, D Keßler, M Jansen, S Eimler, ...",
    source: "Conference Paper", // Placeholder source
    citations: "n/a",
    year: 2019,
  },
  {
    title: "Evaluation des Einflusses von Beleuchtung auf die Aufmerksamkeit innerhalb von Virtual Reality Lernszenarien",
    authors: "A Arntz, D Keßler, S Eimler",
    source: "Mensch und Computer 2018-Tagungsband, 10.18420/muc2018-mci-0426",
    citations: "n/a",
    year: 2018,
  },
  {
    title: "Development of a Virtual Reality Application Affecting Relaxation and Well-being",
    authors: "C Straßmann, SC Eimler, A Arntz, D Keßler, S Zielinski, G Brandenberg, ...",
    source: "Conference Abstract/Poster", // Placeholder source
    citations: "n/a",
    year: "n/a",
  },
  {
    title: "Virtual Reality and Augmented Reality",
    authors: "A Arntz, D Keßler, SC Eimler, U Handmann",
    source: "Book Chapter/Conference Proceeding", // Placeholder source
    citations: "n/a",
    year: "n/a",
  },
];

export const skills: string[] = [
  "Unity",
  "C#",
  "Java",
  "Python",
  "Blender",
  "Photogrammetry",
  "AI",
  "AR",
  "VR",
  "Full Stack Development",
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "HTML",
  "CSS",
  "JavaScript",
  "Node.js", // Added based on Full Stack
  "Git", // Common essential skill
];

export const experience: Experience[] = [
 {
    company: "Omnystate GmbH",
    // logo: "/logos/omnystate.png", // Example path
    title: "CTO",
    duration: "4 Jahre+", // Calculated from dates
    period: "Mai 2021 – Heute",
    location: "Dortmund · Hybrid",
    skills: ["Full-Stack-Entwicklung", "Python", "Leadership", "Product Management"] // Expanded based on role
  },
  // Note: The CV lists CTO twice for Omnystate with overlapping periods. Consolidating into one entry.
  {
    company: "wirfliegendrohne.de GmbH",
    // logo: "/logos/wfd.png", // Example path
    title: "VR/AR-Entwickler, Photogrammetrie",
    duration: "8 Monate",
    period: "Okt. 2020 – Mai 2021",
    location: "Dortmund, Nordrhein-Westfalen, Deutschland",
    skills: ["Unity", "C#", "AR", "VR", "Photogrammetry", "Full-Stack-Entwicklung"] // Combined from description
  },
  {
    company: "Hochschule Ruhr West",
    // logo: "/logos/hrw.png", // Example path
    title: "Wissenschaftlicher Mitarbeiter mit akademischem Abschluss",
    duration: "2 Jahre 10 Monate",
    period: "Jan. 2018 – Okt. 2020",
    location: "Bottrop, Nordrhein-Westfalen, Deutschland",
    skills: ["Research", "AR", "VR", "Unity", "Full-Stack-Entwicklung", "Computer Graphics"] // Expanded based on role and publications
  },
];

export const education: Education[] = [
  {
    institution: "Hochschule Ruhr West University of Applied Sciences",
    // logo: "/logos/hrw.png", // Example path
    degree: "Master of Science - MS",
    field: "Informatik",
    period: "Juli 2016 – Jan. 2018",
  },
  {
    institution: "Hochschule Ruhr West University of Applied Sciences",
    // logo: "/logos/hrw.png", // Example path
    degree: "Bachelor of Applied Science - BASc",
    field: "Mensch-Computer-Interaktion",
    period: "Okt. 2012 – Juni 2016",
  },
];

export const certifications: Certification[] = [
  {
    title: "SCRUM Master",
    organization: "Scrum Alliance",
    date: "2022",
    description: "Certified ScrumMaster® (CSM) certification",
  },
  {
    title: "Stipendium",
    organization: "Deutschland Stipendium",
    date: "2017-2019",
    description: "Merit-based scholarship awarded to high-achieving students",
  },
  {
    title: "Nordstern Preis",
    organization: "Immotech",
    date: "2021",
    description: "Award for innovation in real estate technology solutions",
  },
];

// Helper function for Project Cards (if needed across pages)
// Can be moved to components later
export function getProjectCategory(project: Project): string {
  // Simple logic based on tags or title, adjust as needed
  if (websiteProjects.includes(project)) return "Website";
  if (frontendProjects.includes(project)) return "Frontend";
  if (appProjects.includes(project)) return "App Development";
  if (threeDProjects.includes(project)) return "3D / AR / VR";
  return "Other";
} 