/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#20273f',
        'secondary': '#7c859a',
        'primary-red': '#e81f3e'
      },
      fontFamily: {
        nunito: ['Nunito', 'Arial']
      }
    },
  },
  plugins: [],
}

