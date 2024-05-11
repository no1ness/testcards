/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      'ss': '320px',
      'xs': '960px', // новая точка останова для экранов от 320 пикселей
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      // ... другие точки останова
    },
    extend: {},
  },
  plugins: [],
}

