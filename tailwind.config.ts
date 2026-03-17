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
        bavarian: {
          black: "#0A0A0A",
          dark: "#141414",
          surface: "#1E1E1E",
          white: "#FAFAFA",
          gray: "#888888",
          copper: "#C47722",
          "copper-light": "#D4924A",
          "copper-dark": "#A0601A",
        },
      },
      fontFamily: {
        serif: ["Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
