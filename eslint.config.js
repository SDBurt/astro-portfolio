import eslint from "@eslint/js";
import globals from "globals";
import eslintPluginAstro from "eslint-plugin-astro";
import tsEslint from "typescript-eslint";

export default [
  eslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  ...tsEslint.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        myCustomGlobal: "readonly",
      },
    },
  },
  {
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double", { allowTemplateLiterals: true }],
      "@typescript-eslint/triple-slash-reference": "off",
    },
    ignores: [".vscode/", "dist/", "node_modules/", "public/"],
  },
  {
    files: ["*.astro"],
    parser: "astro-eslint-parser",
    parserOptions: {
      parser: "@typescript-eslint/parser",
      extraFileExtensions: [".astro"],
    },
    rules: {},
  },
];
