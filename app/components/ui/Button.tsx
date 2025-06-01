import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "plain" | "secondery";
  className?: string;
  rest?: React.HtmlHTMLAttributes<HTMLButtonElement>;
};

export default function Button({
  children,
  variant = "primary",
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`p-2 px-3 text-[#323232]  bg-secondery rounded-lg ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
