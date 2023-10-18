/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        nameTag: {
          '0%': {
            transform: 'translateY(-20px)',
            opacity: 0
          },
          '100%': {
            transform: 'translateY(0px)',
            opacity: 1
          },
        }
      },
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
      },
      animation: {
        'name-tag': 'nameTag .2s linear both'
      }
    },
  },
  plugins: [],
}

