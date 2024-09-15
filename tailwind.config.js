/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '10%': '10%',
        '50%': '50%'
      }
    },
  },
  plugins: [],
}

