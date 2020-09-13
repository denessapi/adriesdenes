module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: ["plugin:react/recommended", "nextjs"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "max-len": ["error", { code: 80, ignoreUrls: true }],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/jsx-one-expression-per-line": "off",
    "react/react-in-jsx-scope": "off"
  }
};
