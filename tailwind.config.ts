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
        heroBgGradient: "var(--hero-bg-gradient)",
        profileBgGradient: "var(--profile-gradient)",
        cardGradient: "var(--card-gradient)",
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
