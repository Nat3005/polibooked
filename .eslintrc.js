module.exports = {
  extends: ["react-app", "airbnb", "plugin:jsx-a11y/recommended", "prettier"],
  plugins: ["jsx-a11y", "prettier"],
  ignorePatterns: ["build/**", "node_modules/**"],

  rules: {
    quotes: [2, "single", { avoidEscape: true }],
    "import/prefer-default-export": 0,
    "react/prop-types": 0,
    "react/forbid-prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        semi: true,
        singleQuote: true,
      },
    ],
    "react/no-unstable-nested-components": [
      "off" || "warn" || "error",
      { allowAsProps: true },
    ],
    "no-console": ["error", { allow: ["warn", "error"] }],
  },
};
