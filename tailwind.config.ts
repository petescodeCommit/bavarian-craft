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
          cream: "#F5F9F6",
          "cream-dark": "#E8F2EB",
          white: "#FFFFFF",
          brown: "#1D5C3A",
          "brown-light": "#2E7A50",
          "brown-dark": "#0E3522",
          gold: "#C9943A",
          "gold-light": "#DDB05A",
          "gold-dark": "#A87828",
          text: "#0A1F13",
          muted: "#3D6B52",
          border: "#C2D9CB",
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
