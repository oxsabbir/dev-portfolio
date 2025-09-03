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
        smGray: "#EAEAEA",
        offBorder: "var(--border-primary)",
      },
      backgroundImage: {
        heroBgGradient: "var(--hero-bg-gradient)",
        profileBgGradient: "var(--profile-gradient)",
        cardGradient: "var(--card-gradient)",
        cardRadialGradient: "var(--card-radial-gradient)",
      },
      fontFamily: {
        plusJakarta: "var(--font-plus-jakarta-sans)",
        poppins: "var(--font-poppins)",
      },
      screens: {
        xxl: "1320px",
        "3xl": "1440px",
        "4xl": "1536px",
      },
    },
  },
  plugins: [],
} satisfies Config;
