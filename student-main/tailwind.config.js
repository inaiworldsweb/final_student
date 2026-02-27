/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-blue': '#4169E1',
        'dark-bg': '#0a0a0a',
        'card-bg': '#141414',
        'card-border': '#2a2a2a',
      },
    },
  },
  plugins: [],
}
