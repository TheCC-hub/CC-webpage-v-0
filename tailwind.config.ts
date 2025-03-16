import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        slowspin: "spin 60s linear infinite", // Custom speed
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        fill: "#333333",
        sfill: "#200A0A",
        primary: "#ED1C31",/* red */
        secondary: "#1A1A1A",/* Dark Gray/Black */
        accent: "#FFD700", /* gold */
        text: "#FFFFFF",/* white */
        muted: "#888888", /* gray */
        // accent: "#f76f6f",
        // fill: "#333333",
        // text: "#f5f5f5"

      },
    },
  },
  plugins: [],
} satisfies Config;
