import type { LintPlugins } from "#/@types/oxlint";

const PLUGIN_REACT = [
    "react",
    "react-perf",
] as const satisfies LintPlugins;

export { PLUGIN_REACT };
