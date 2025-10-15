import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./context/Provider";

const plustJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
  fallback: ["Arial", "Helvetica"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "900"],
  fallback: ["Arial", "Helvetica"],
});

export const metadata: Metadata = {
  title: "Sabbir Hossain | Full-Stack Developer & JavaScript Expert",
  description:
    "Hi, I'm Sabbir Hossain — a full-stack developer specializing in React, Next.js, Node.js, and modern web apps. Explore my portfolio, client projects, and coding journey.",
  keywords: [
    "Sabbir Hossain",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Web Developer Portfolio",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "Bangladesh Developer",
  ],
  openGraph: {
    title: "Sabbir Hossain | Full-Stack Developer & JavaScript Expert",
    description:
      "Full-stack developer skilled in React, Next.js, and Node.js — building fast, scalable web apps with clean UI and solid backend.",
    url: "",
    siteName: "Sabbir Hossain Portfolio",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Sabbir Hossain - Full-Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sabbir Hossain | Full-Stack Developer",
    description:
      "Full-stack developer specializing in React, Next.js, and Node.js — check out my latest web projects.",
    images: [""],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${plustJakartaSans.variable} ${poppins.variable} antialiased`}
      >
        <Providers>
          <div className="bodyGradient h-screen">
            <div className="max-w-screen-xxl 4xl:max-w-screen-3xl m-auto md:p-2">
              <div>{children}</div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
