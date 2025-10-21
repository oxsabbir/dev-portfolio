import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiFramer,
  SiReactrouter,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiJsonwebtokens,
  SiPrisma,
  SiMongoose,
  SiSocketdotio,
  SiPostman,
  SiFigma,
  SiGithub,
  SiGit,
  SiEslint,
  SiPrettier,
  SiNpm,
  SiYarn,
  SiVercel,
  SiNetlify,
  SiPostgresql,
  SiX,
} from "@icons-pack/react-simple-icons";

import {
  Linkedin,
  User,
  BadgeCheck,
  Hammer,
  FolderKanban,
  FileText,
  Newspaper,
  Mail,
  UserPen,
  Contact,
  Briefcase,
  Dumbbell,
  Workflow,
} from "lucide-react";

export const socialLinks = [
  { title: "github", link: "https://github.com/oxsabbir", icon: SiGithub },
  {
    title: "linkedIn",
    link: "https://www.linkedin.com/in/oxsabbir",
    icon: Linkedin,
  },
  {
    title: "x",
    link: "https://x.com/sabbir2always",
    icon: SiX,
  },
];

export const frontendTechStack = [
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    subtitle: "Frontend Programming Language",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    subtitle: "Typed JavaScript Superset",
  },
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
    subtitle: "Frontend UI Library",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#fff",
    subtitle: "React Framework for Fullstack Apps",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
    subtitle: "Utility-first CSS Framework",
  },
  {
    name: "Framer Motion",
    icon: SiFramer,
    color: "#0055FF",
    subtitle: "React Animation Library",
  },
  {
    name: "Redux",
    icon: SiRedux,
    color: "#764ABC",
    subtitle: "State Management Library",
  },
  {
    name: "React Router",
    icon: SiReactrouter,
    color: "#CA4245",
    subtitle: "Routing Library for React",
  },
];

export const backendTechStack = [
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#339933",
    subtitle: "JavaScript Runtime for Backend",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "#47A248",
    subtitle: "Minimalist Backend Framework for Node",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    subtitle: "NoSQL Database",
  },
  // {
  //   name: "Mongoose",
  //   icon: SiMongoose,
  //   color: "#880000",
  //   subtitle: "MongoDB ODM for Node.js",
  // },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#4169E1",
    subtitle: "Relational SQL Database",
  },
  // {
  //   name: "Prisma",
  //   icon: SiPrisma,
  //   color: "#2D3748",
  //   subtitle: "Type-safe ORM for SQL Databases",
  // },
  // {
  //   name: "JWT (Auth)",
  //   icon: SiJsonwebtokens,
  //   color: "#000000",
  //   subtitle: "Authentication Token Standard",
  // },
  {
    name: "Socket.io",
    icon: SiSocketdotio,
    color: "#47A248",
    subtitle: "Real-time Web Communication Library",
  },
];
export const toolsStack = [
  {
    name: "Git",
    icon: SiGit,
    color: "#F05032",
    subtitle: "Version Control System",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "#181717",
    subtitle: "Code Hosting Platform",
  },
  {
    name: "Postman",
    icon: SiPostman,
    color: "#FF6C37",
    subtitle: "API Testing Tool",
  },
  {
    name: "Figma",
    icon: SiFigma,
    color: "#F24E1E",
    subtitle: "UI/UX Design Tool",
  },
  {
    name: "ESLint",
    icon: SiEslint,
    color: "#4B32C3",
    subtitle: "Linting Tool for JS/TS",
  },
  {
    name: "Prettier",
    icon: SiPrettier,
    color: "#F7B93E",
    subtitle: "Code Formatter",
  },
  {
    name: "NPM",
    icon: SiNpm,
    color: "#CB3837",
    subtitle: "Package Manager",
  },
  {
    name: "Yarn",
    icon: SiYarn,
    color: "#2C8EBB",
    subtitle: "Alternative Package Manager",
  },
  {
    name: "Vercel",
    icon: SiVercel,
    color: "#000000",
    subtitle: "Frontend Deployment Platform",
  },
  {
    name: "Netlify",
    icon: SiNetlify,
    color: "#00C7B7",
    subtitle: "Static Site Hosting Platform",
  },
];

export const educationData = [
  {
    title: "Diploma In Computer Technology",
    institution: "Pabna Polytechnic Institute",
    duration: "2019 - 2024",
    description:
      "Studied software development fundamentals with a focus on programming, object-oriented concepts, and databases. Built small projects and gained hands-on experience that strengthened problem-solving skills.",
    tags: ["JavaScript", "C", "OOP", "MySQL", "Problem Solving"],
  },
  {
    title: "Secondary School Certificate (SSC)",
    institution: "Pabna, Rajshahi",
    duration: "2013 - 2019",
    description:
      "Completed foundational education with a strong focus on science and mathematics. Built critical problem-solving skills and discipline that laid the groundwork for future technical studies.",
    tags: ["Science", "Mathematics", "Discipline", "Focus"],
  },
];

export const navLinks = [
  {
    label: "About",
    path: "#home",
    icon: User,
  },
  {
    label: "Projects",
    path: "#projects",
    icon: Briefcase,
  },
  {
    label: "Skills",
    path: "#skills",
    icon: Dumbbell,
  },
  {
    label: "Services",
    path: "#services",
    icon: Workflow,
  },

  // {
  //   label: "Resume",
  //   path: "/resume",
  //   icon: FileText,
  // },
  {
    label: "Blogs",
    path: "#blogs",
    icon: Newspaper,
  },
  {
    label: "Contact",
    path: "#contact",
    icon: Contact,
  },
];
