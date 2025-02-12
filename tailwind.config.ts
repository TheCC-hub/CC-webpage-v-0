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
        accent: "#f76f6f",
        fill: "#FAF3E0",
        text: "#333333"

      },
    },
  },
  plugins: [],
} satisfies Config;
