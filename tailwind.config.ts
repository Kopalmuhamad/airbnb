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
        "accent-primary": "#219ebc",
        "accent-secondary": "#c1121f",
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/banner1.jpg')"
      }
    },
  },
  plugins: [],
};
export default config;
