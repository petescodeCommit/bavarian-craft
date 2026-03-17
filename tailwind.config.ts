import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bc: {
          cream: "#FBF7F2",
          "cream-dark": "#F2EBE0",
          white: "#FFFFFF",
          brown: "#6B3A2A",
          "brown-light": "#8B5240",
          "brown-dark": "#4A2518",
          gold: "#C9943A",
          "gold-light": "#DDB05A",
          "gold-dark": "#A87828",
          text: "#1C0E08",
          muted: "#7A5C50",
          border: "#E2D0C0",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
