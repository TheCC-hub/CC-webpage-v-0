import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
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
        background: "#EBE9E1", // Off-white background
        primary: "#E43D12", // 🔥 Ultra-vibrant fiery red
        fill: "#D6536D", // Soft, muted pink (for a gentle look)
        secondary: "#FFA2B6", // Soft, glowing pink (for a glossy look)
        accent: "#EFB11D", // Bright, glowing yellow (for attention)

        sFill: "#8E8D8A", // Dark gray for text
        mute: "#D8C3A5" // Soft, muted beige (for subtle elements)

        // text: "#FFFFFF", // Crisp white for perfect contrast
        // muted: "#AAAAAA", // Soft muted gray for subtle elements
        // highlight: "#FF5733", // Glossy, neon orange-red (attention grabber)
        // border: "#FF4500", // Bright orangish-red (for glowing effects)
        // shadow: "rgba(255, 85, 51, 0.4)", // **Soft glow effect** (makes UI feel glossy)
        // glass: "rgba(255, 34, 0, 0.2)", // **Glass effect transparency**
      },
    },
  },

  plugins: [],
} satisfies Config;

// colors: {
//   background: "var(--background)",
//   foreground: "var(--foreground)",
//   fill: "#333333",
//   sFill: "#200A0A",
//   primary: "#f34420",/* red */
//   // primary: "#ED1C31",/* red */
//   secondary: "#1A1A1A",/* Dark Gray/Black */
//   accent: "#FFD700", /* gold */
//   text: "#FFFFFF",/* white */
//   muted: "#888888", /* gray */
//   // accent: "#f76f6f",
//   // fill: "#333333",
//   // text: "#f5f5f5"

// },