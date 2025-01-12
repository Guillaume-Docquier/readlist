import neostandard, { resolveIgnoresFromGitignore } from "neostandard";
import love from "eslint-config-love";
import globals from "globals";

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
    files: ["**/*.ts"],
    ignores: ["rsbuild.config.ts"],
  },
  { linterOptions: { reportUnusedDisableDirectives: true } },
];
