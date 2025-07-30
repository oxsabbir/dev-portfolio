import project1 from "@/public/images/project_1.webp";
import project2 from "@/public/images/project_2.webp";

export const projectContent = [
  {
    id: 1,
    title: "ChatterSpace - Real-Time Messaging App",
    image: project2,
    details:
      "A real-time chat app with private & group messaging, read receipts, and user presence tracking.",
    tech: ["Next.js", "Socket.io", "TypeScript", "Tailwind CSS", "MongoDB"],
    slug: "dynamic-chat",
  },
  {
    id: 2,
    title: "TourNest - Travel Booking Platform",
    image: project1,
    details:
      "A full-featured tour booking platform with dynamic maps, filters, and booking flow.",
    tech: [
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Mapbox",
      "Tailwind CSS",
    ],
    slug: "dynamic-travel",
  },
  {
    id: 3,
    title: "FlowSuite ERP - Business Management System",
    image: project2,
    details:
      "An internal ERP system for managing inventory, accounts, HR, and sales pipeline efficiently.",
    tech: ["React.js", "Laravel", "MySQL", "Tailwind CSS", "Redux"],
    slug: "albayti-erp",
  },
  {
    id: 4,
    title: "WaveBlast - WhatsApp Bulk Messaging Tool",
    image: project1,
    details:
      "A WhatsApp automation and bulk messaging app with CSV import and delivery reporting.",
    tech: ["Electron", "React.js", "Node.js", "Puppeteer", "Tailwind CSS"],
    slug: "wb-sender",
  },
];
