import React from "react";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "plain" | "secondery" | "shiny";
  size?: "sm" | "md" | "lg";
  disable?: boolean;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  size = "md",
  variant = "primary",
  disable,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      disabled={disable}
      className={clsx(
        `${styles[variant]} ${
          disable
            ? "opacity-60 hover:border-transparent cursor-not-allowed"
            : "opacity-100"
        } cursor-pointer border border-transparent  duration-200 transition-all ${
          styles[size]
        } rounded-sm ${className}`
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

const styles = {
  primary:
    "text-[#323232] text-base bg-secondery hover:border-[#323232] p-2 px-4",
  shiny: `animate-bg-shine shadow bg-[length:200%_100%] hover:border-[#323232] p-2 px-4 
          dark:bg-[linear-gradient(110deg,#78CC6D,45%,#95fd87,55%,#78CC6D)] 
          bg-[linear-gradient(110deg,#78CC6D,45%,#95fd87,55%,#78CC6D)] text-[#323232]`,
  secondery:
    "dark:text-[#ffffffe7] text-base dark:bg-[#ffffff09] text-gray-800 bg-[#00000009] hover:border-offBorder p-2 px-4",
  plain: "",
  sm: "text-sm p-1.5 px-2",
  md: "",
  lg: "",
};
