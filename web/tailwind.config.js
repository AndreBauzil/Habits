/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.tsx",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090a',
      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}