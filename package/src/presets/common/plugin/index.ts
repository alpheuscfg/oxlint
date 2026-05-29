import type { LintPlugins } from "#/@types/oxlint";

const PLUGIN_COMMON = [
    "eslint",
    "typescript",
    "unicorn",
    "oxc",
    "import",
    "promise",
] as const satisfies LintPlugins;

export { PLUGIN_COMMON };
