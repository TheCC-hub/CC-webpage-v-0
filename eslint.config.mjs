import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];
export default [
  {
    ignores: ["node_modules/"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];
// export default tseslint.config({
//   rules: {
//     "@typescript-eslint/no-explicit-any": "error",
//   },
// });

// export default tseslint.config({
//   plugins: {
//     "@typescript-eslint": tseslint.plugin,
//   },
//   rules: {
//     "@typescript-eslint/no-explicit-any": "error",
//   },
// });
// export default eslintConfig;
