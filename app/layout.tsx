import type { Metadata } from "next";
import { Geist, Geist_Mono,Plus_Jakarta_Sans,Poppins } from "next/font/google";
import "./globals.css";

const plustJakartaSans = 
  Plus_Jakarta_Sans({
    variable : "--font-plus-jakarta-sans",
    subsets : ['latin'],
    weight : ["400","500"],
    fallback: ["Arial", "Helvetica"]
  })


const poppins = 
  Poppins({
    variable : "--font-poppins",
    subsets : ['latin'],
    weight : ["400","500","900"],
    fallback: ["Arial", "Helvetica"]
  })


export const metadata: Metadata = {
  title: "Sabbir Hossain | Developer Portfolio",
  description: "Sabbir Hossain - Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plustJakartaSans.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
