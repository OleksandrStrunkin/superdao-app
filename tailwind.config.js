/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
        fontFamily: {
          loos: ['LoosWide', 'sans-serif'],
          montserrat: ['Montserrat', 'sans-serif']
        },
      colors: {
        primary: "#0a1117",
        btn: "#ffcf01",
        btnHov: "#ffa800",
        accent: "#4be1f4",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
