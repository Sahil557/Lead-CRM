/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        blue: {
          DEFAULT: '#0a66c2',
          dark: '#0057a8',
          light: '#e0f0ff',
        },
        teal: {
          DEFAULT: '#00b4aa',
        },
        brand: {
          dark: '#1a1a2e',
        },
      },
      boxShadow: {
        blue: '0 4px 16px rgba(10,102,194,0.35)',
      },
    },
  },
  plugins: [],
};
