module.exports = {
  env: {
    node: true,
  },
  extends: ["expo", "prettier"],
  plugins: ["prettier", "perfectionist"],
  rules: {
    "perfectionist/sort-imports": [
      "error",
      {
        type: "line-length",
      },
    ],
    "perfectionist/sort-jsx-props": "error",
    "perfectionist/sort-named-exports": "error",
    "perfectionist/sort-named-imports": "error",
    "perfectionist/sort-objects": "error",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
