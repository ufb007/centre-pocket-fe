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
        'primary-red': '#e81f3e',
        'primary-blue': '#38a1f3',
        'primary-yellow': '#ffcb05'
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'roboto-condensed': ['Roboto Condensed', 'sans-serif']
      }
    },
  },
  plugins: [],
}

