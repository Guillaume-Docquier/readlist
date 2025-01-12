import neostandard, { resolveIgnoresFromGitignore } from "neostandard";
import globals from "globals";
import love from "eslint-config-love";
import pluginVue from "eslint-plugin-vue";

export default [
  ...neostandard({
    globals: globals.browser,
    ts: true,
    noStyle: true,
    noJsx: true,
    ignores: resolveIgnoresFromGitignore(),
  }),
  {
    ...love,
    rules: {
      ...love.rules,
      "@typescript-eslint/no-magic-numbers": [
        "error",
        {
          ignoreNumericLiteralTypes: true,
          ignoreEnums: true,
        },
      ],
    },
    files: ["**/*.ts"],
    ignores: ["rsbuild.config.ts"],
  },
  ...pluginVue.configs["flat/recommended"],
  { linterOptions: { reportUnusedDisableDirectives: true } },
];
