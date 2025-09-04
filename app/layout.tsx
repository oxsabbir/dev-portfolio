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
  title: "Sabbir Hossain | Full-Stack Developer",
  description: "Sabbir Hossain - Developer portfolio",
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
          <div className="bodyGradient h-screen overflow-auto">
            <div className="max-w-screen-xxl 4xl:max-w-screen-3xl m-auto p-2">
              <div>{children}</div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
