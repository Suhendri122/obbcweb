/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        "inter" : ['inter'],
      },
      colors : {
        "oren" : '#FF7A30',
        "navy" : "#002745",
        "putih" : "#F9F9F9",
        "biru" : "#1379CA"
      }
    },
  },
  plugins: [],
}

