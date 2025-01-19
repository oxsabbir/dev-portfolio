import type { Metadata } from "next";
import {Plus_Jakarta_Sans,Poppins } from "next/font/google";
import ProfileCard from "@/app/components/profile-card"
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
    weight : ["300","400","500","900"],
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
        <div className=" max-w-screen-xxl m-auto p-4">
          <div className="fixed top-5 max-w-[320px]">
            <ProfileCard/>
          </div>
        {children}
        </div>
      </body>
    </html>
  );
}
