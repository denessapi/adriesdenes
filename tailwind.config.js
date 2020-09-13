module.exports = {
  purge: ["./css/**/*.css", "./pages/**/*.js", "./components/**/*.jsx"],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  theme: {
    fontFamily: {
      cardo: ["Cardo"],
      marckscript: ["MarckScript"]
    },
    extend: {}
  },
  variants: {},
  plugins: []
};
