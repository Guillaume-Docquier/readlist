import neostandard, { resolveIgnoresFromGitignore } from "neostandard";
import globals from "globals";

export default [
  ...neostandard({
    globals: globals.browser,
    ts: true,
    noStyle: true,
    noJsx: true,
    ignores: resolveIgnoresFromGitignore(),
  }),
  { linterOptions: { reportUnusedDisableDirectives: true } },
];
