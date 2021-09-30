const colors = require("tailwindcss/colors");
module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    colors: {
      hoverDark: "hsl(230, 12%, 44%)",
      lightText: "hsl(230, 12%, 44%)",
      lightGray: "#d3d3d3",
      darkCard: "#252a41",
      darkBG: "hsl(230, 17%, 14%)",
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
