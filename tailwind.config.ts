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
        primary: "#1DD4AA",
        secondary: "#02B5E2",
        black3: "#333333",
        black43: "#434343",
      },
      backgroundImage: {
        "gradient-primary": `linear-gradient(90deg, #1DD4AA 0%, #02B5E2 100%)`,
      },
    },
  },
  plugins: [],
};
export default config;
