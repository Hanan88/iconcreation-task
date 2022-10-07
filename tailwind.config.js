/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'main-blue': '#14325C',
        'main-orange': '#F26522'
      },
      backgroundColor: {
        'main-blue': '#14325C',
        'main-orange': '#F26522'
      },
      boxShadow: {
        'banner': 'inset 550px 0px 300px 0px rgb(255 255 255 / 72%)',
        'feature': '20px -20px 0 0 #f2652275;',
        'offer': 'inset 0 0 0 1000px #14325ca3'
      },
      height: {
        'full-img': '28rem',
        'box': '413px'
      },
      width:{
        'offer': '38%'
      }
    },
  },
  plugins: [],
}