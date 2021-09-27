module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      hoverDark: "hsl(230, 12%, 44%)",
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
