import proSaveLanding from "@/public/screenshots/pro-save/pro-save-landing.png";
import dynamicTour from "@/public/screenshots/dynamic-tour/dynamic-tour-landing.png";
import WBSender from "@/public/screenshots/wbsender/wbsender-landing.jpg";
import proSaveApp from "@/public/screenshots/pro-save-app/pro-save-app-ui.png";

export const projectContent = [
  {
    id: 1,
    title: "Prosave Landing – Real Estate Analytics Platform",
    image: proSaveLanding,
    details:
      "Built a sleek and fully responsive landing page for a modern real estate analytics tool. Designed with smooth animations, theme switching, and internationalization support for a global audience.",
    tech: ["Next.js", "React", "Framer Motion", "Tailwind CSS", "next-intl"],
    slug: "pro-save-landing",
  },
  {
    id: 2,
    title: "Dynamic Tour - Travel Booking Platform",
    image: dynamicTour,
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
    title: "Property Save – Android Property Management App",
    image: proSaveApp,
    details:
      "Developed the entire Android frontend for a full-scale property management app. Includes lead and property management, push notifications, Google Maps integration, and multi-step state-driven modals with full UI/UX redesign.",
    tech: [
      "React Native",
      "Tailwind CSS / Nativewind",
      "React Hook Form",
      "Reanimated",
      "Google Maps API",
    ],
    slug: "property-save-app",
  },

  {
    id: 4,
    title: "WB-Sender - WhatsApp Bulk Messaging Tool",
    image: WBSender,
    details:
      "A WhatsApp automation and bulk messaging app with CSV import and delivery reporting.",
    tech: ["Electron", "React.js", "Node.js", "Puppeteer", "Tailwind CSS"],
    slug: "wbsender",
  },
];

export const technololgyList = [
  "All",
  "React",
  "Next.Js",
  "Redux",
  "Node.Js",
  "Express",
  "Web-Socket",
  "React Native",
  "Framer Motion",
];
