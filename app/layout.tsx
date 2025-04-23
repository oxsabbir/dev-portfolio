import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Poppins } from "next/font/google";
import ProfileCard from "@/app/components/profile-card";
import "./globals.css";

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
  title: "Sabbir Hossain | Full-Stack Developer",
  description: "Sabbir Hossain - Developer portfolio",
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
        <div className=" bodyGradient overflow-auto h-screen">
          <div className=" max-w-screen-xxl m-auto p-3">
            <div className=" flex gap-3 justify-between ">
              <div className="min-w-[340px]">
                <ProfileCard />
              </div>
              <div className="flex-grow">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
