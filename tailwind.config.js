/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#40ba9b",
          secondary: "#f6d860",
          accent: "#ebefee",
          neutral: "#677469",
          base: "#ffffff",
          lightblack:"#001e1d",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
