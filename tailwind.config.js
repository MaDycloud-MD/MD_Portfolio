/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#facc15', // yellow
        dark: '#0d1117',
        light: '#f9fafb',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        code: ['Fira Code', 'monospace']
      },
      transformOrigin: {
        center: 'center',
      },
      rotate: {
        'y-180': '360deg',
        'y-0': '0deg',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
