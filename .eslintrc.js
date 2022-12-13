const path = require("node:path");
module.exports = {
  root: true,
  parser: "",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  ignorePatterns: ["**/generated", "**/*.generated.ts", "*.d.ts"],
  overrides: [
    {
      files: [
        "src/**/*.ts",
        "src/**/*.js",
        "src/**/*.tsx",
        "src/**/*.jsx",
        "src/**/*.cts",
        "src/**/*.mts",
        "src/**/*.cjs",
        "src/**/*.mjs",
        "src/**/*.cjsx",
        "src/**/*.mjsx",
        "src/**/*.ctsx",
        "src/**/*.mtsx",
      ],
      extends: ["plugin:@typescript-eslint/recommended"],
      parser: "@typescript-eslint/parser",
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-empty-function": [
          "error",
          { allow: ["private-constructors", "protected-constructors"] },
        ],
        "@typescript-eslint/no-unused-vars": [
          "warn",
          { ignoreRestSiblings: true, varsIgnorePattern: "React" },
        ],
      },
    },
    {
      files: ["*.graphql"],
      extends: "plugin:@graphql-eslint/operations-recommended",
      parserOptions: {
        documents: path.join(__dirname, "./src/**/*.graphql"),
        schema: "./schema.graphql",
      },
    },
  ],
};
