import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-dark': '#2A196B',
        'purple-darker': '#1B1145',
        'yellow': '#F5DE7D',
        'teal': '#B6D9D2',
        'teal-hover': '#A1C6C0',
      },
      fontFamily: {
        'heading': ['Fraunces', 'Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;

