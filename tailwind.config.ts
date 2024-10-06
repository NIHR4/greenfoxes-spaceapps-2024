import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'partial-fade': {
          '0%': { opacity: '0'},
          '100%': { opacity: '0.7'}
        },
      },
      animation: {
        'partial-fade': 'partial-fade 0.2s ease-in-out'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
export default config;
