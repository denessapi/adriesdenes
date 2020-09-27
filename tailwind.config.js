module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  theme: {
    fontFamily: {
      cardo: ["Cardo"],
      marckscript: ["MarckScript"]
    },
    fontSize: {
      "0": "0",
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem"
    },
    extend: {}
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")]
};
