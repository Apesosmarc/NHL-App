const { sky } = require("tailwindcss/colors");
const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/*.js", "./src/**/*"],
  darkMode: false,
  theme: {
    colors: {
      hoverDark: "hsl(230, 12%, 44%)",
      lightText: "hsl(230, 12%, 44%)",
      lightGray: "#d3d3d3",
      darkCard: "#252a41",
      darkBG: "hsl(230, 17%, 14%)",
      darkText: "hsl(228, 34%, 66%)",

      ...colors,
    },
  },
  variants: {
    extend: {
      padding: ["first"],
      divideColor: ["group-hover"],
    },
  },
  plugins: [],
};
