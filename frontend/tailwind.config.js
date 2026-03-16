/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        neon: '0 0 25px rgba(34, 211, 238, 0.35)',
      },
    },
  },
  plugins: [],
}

