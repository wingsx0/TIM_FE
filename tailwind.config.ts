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
        // f26b38
        primary: "#fb9440",
        secondary: "#f26b38",
        black3: "#333333",
        black43: "#434343",
        gray4A: "#4a4a4a",
        bgAccount: "#f9f9f9",
        borderGray: "#e5e7eb",
        blackA4: "rgba(0, 0, 0, 0.40)",
      },
      backgroundImage: {
        "gradient-primary": `linear-gradient(90deg, #1DD4AA 0%, #02B5E2 100%)`,
      },
    },
  },
  plugins: [],
};
export default config;
