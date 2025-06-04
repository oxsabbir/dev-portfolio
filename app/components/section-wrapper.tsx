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
          <Icon strokeWidth={1.5} className="w-5 h-5 sm:w-6 sm:h-6" />
          <h5 className="font-poppins sm:text-base  text-sm">{title}</h5>
        </div>
        <div>
          <h3 className="font-plusJakarta font-medium text-xl md:text-3xl lg:text-4xl">
            {subTitle}
          </h3>
        </div>
      </div>

      <div>{children}</div>
    </section>
  );
}
