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
    customForms: theme => ({
      default: {
        input: {
          borderRadius: theme("borderRadius.lg")
        },
        select: {
          borderRadius: theme("borderRadius.lg"),
          boxShadow: theme("boxShadow.default")
        },
        checkbox: {
          backgroundColor: theme("colors.white"),
          width: theme("spacing.6"),
          height: theme("spacing.6"),
          borderWidth: "1px",
          borderColor: theme("colors.gray.400")
        },
        radio: {
          backgroundColor: theme("colors.white"),
          width: theme("spacing.6"),
          height: theme("spacing.6"),
          borderWidth: "1px",
          borderColor: theme("colors.gray.400")
        }
      }
    }),
    extend: {}
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")]
};
