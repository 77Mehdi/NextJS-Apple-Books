import flowbite from "flowbite-react/tailwind";
import { transform } from "next/dist/build/swc";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    flowbite.content(),
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        swipper: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }
        }
      },
      animation: {
        'awipe': 'swipper  linear infinite'
      },
      boxShadow: {
        'custom': '4px 4px 30px 4px rgba(0, 0, 0, 0.5)',
      },
     
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
