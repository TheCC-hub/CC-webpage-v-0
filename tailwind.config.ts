import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        pred: "#ed1c31",
        sred: "#f34420",
        accent: "#ff6600", /* orange */
        fill: "#333333",
        text: "#c0c0c0"
        // accent: "#f76f6f",
        // fill: "#333333",
        // text: "#f5f5f5"

      },
    },
  },
  plugins: [],
} satisfies Config;
