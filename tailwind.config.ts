import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#FFFFFF",
        secondery: "#78CC6D",
        textSmColor: "#EAEAEA",
        offWhite: "#FFFFFF1F",
      },
      backgroundImage: {
        primaryGradient:
          "linear-gradient(112.564deg, rgba(255, 255, 255, 10%) 0%, rgba(255, 255, 255, 0%) 99%);",
        seconderGradient:
          "linear-gradient(120deg, rgba(255, 255, 255, 2%) 0%, rgba(0, 0, 0, 20%) 100%);",
        cardGradient:
          "linear-gradient(120deg, rgba(255, 255, 255, 2%) 0%, rgba(0, 0, 0, 20%) 100%);",
      },
      fontFamily: {
        plusJakarta: "var(--font-plus-jakarta-sans)",
        poppins: "var(--font-poppins)",
      },
      screens: {
        xxl: "1320px",
      },
    },
  },
  plugins: [],
} satisfies Config;
