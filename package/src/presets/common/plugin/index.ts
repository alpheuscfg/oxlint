import type { LintPlugins } from "#/@types/oxlint";

const PLUGIN_COMMON = [
    "eslint",
    "typescript",
    "unicorn",
    "oxc",
    "import",
    "promise",
] as const satisfies LintPlugins;

const PLUGIN_JS_COMMON = [
    "@stylistic/eslint-plugin",
] as const;

export { PLUGIN_COMMON, PLUGIN_JS_COMMON };
