/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'alpha-blue': 'rgba(37, 100, 235, 0.75)',
      },
    },
  },
  plugins: [],
}
