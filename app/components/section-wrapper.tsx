import React from "react";
import { LucideIcon } from "lucide-react";

type SectionWrapperProps = {
  title: string;
  subTitle: string;
  children: React.ReactNode;
  className?: string;
  icon: LucideIcon;
};

export default function SectionWrapper({
  title,
  subTitle,
  children,
  className,
  icon: Icon,
}: SectionWrapperProps) {
  return (
    <section
      className={`p-4 py-8  md:p-8 my-4 bg-seconderGradient bg-background ${className}`}
    >
      <div className="flex flex-col gap-3 mb-6">
        <div className="px-4 py-2 rounded-3xl border flex items-center w-fit border-offWhite  gap-2">
          <Icon strokeWidth={1.4} className="w-6 h-6" />
          <h5 className="font-poppins font-light  text-base">{title}</h5>
        </div>
        <div>
          <h3 className="font-plusJakarta font-medium text-4xl">{subTitle}</h3>
        </div>
      </div>

      <div>{children}</div>
    </section>
  );
}
