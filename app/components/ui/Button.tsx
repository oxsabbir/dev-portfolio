import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "plain" | "secondery";
  size?: "sm" | "md" | "lg";
  className?: string;
  rest?: React.HtmlHTMLAttributes<HTMLButtonElement>;
};

export default function Button({
  children,
  size = "md",
  variant = "primary",
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`${styles[variant]} ${styles[size]} rounded-lg ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

const styles = {
  primary: "text-[#323232] text-base bg-secondery p-2 px-4",
  secondery: "text-[#ffffffe7] text-base bg-[#ffffff09] p-2 px-4",
  plain: "",
  sm: "text-sm p-1.5 px-2",
  md: "",
  lg: "",
};
