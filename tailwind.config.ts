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
        "main-background": "#1A1A29",
        "dark-background": "#181824",
        "grey-background": "#31313F",
        "light-purple": "#7562E0",
      },
    },
    screens: {
      mobile: "360px", // Adjusted for smaller devices
      sm: "600px",
      md: "769px",
      lg: "1020px",
      xl: "1200px",
      "2xl": "1400px",
      "3xl": "1600px",
    },
  },
  plugins: [],
};
export default config;
