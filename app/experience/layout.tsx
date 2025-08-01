import React from "react";
import Navigation from "@/app/components/navigation";
import Contacts from "@/app/components/contacts";

export default function ExperienceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navigation />
      {children}
      <Contacts />
    </>
  );
}
