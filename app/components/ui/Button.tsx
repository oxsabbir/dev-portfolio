import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "plain" | "secondery";
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
      className={`${styles[variant]} ${
        disable
          ? "opacity-60 hover:border-transparent cursor-not-allowed"
          : "opacity-100"
      } cursor-pointer border border-transparent duration-200 transition-all ${
        styles[size]
      } rounded-sm ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

const styles = {
  primary:
    "text-[#323232] text-base bg-secondery hover:border-[#323232] p-2 px-4",
  secondery:
    "text-[#ffffffe7] text-base bg-[#ffffff09] hover:border-white p-2 px-4",
  plain: "",
  sm: "text-sm p-1.5 px-2",
  md: "",
  lg: "",
};
