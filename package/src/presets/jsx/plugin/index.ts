import type { LintPlugins } from "#/@types/oxlint";

const PLUGIN_JSX = [
    "jsx-a11y",
] as const satisfies LintPlugins;

export { PLUGIN_JSX };
